import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { updateUser, removeUser } from "./usersSlice";
import { logout } from "../auth/authActions"

function EditUserForm () {
    const [isHidden, setIsHidden] = useState(true)
    const [errorsList, setErrorsList] = useState([])
    const [error, setError] = useState('')
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [newName, setNewName] = useState('')
    const [newProfPic, setNewProfPic] = useState('')
    const [newBio, setNewBio] = useState('')
    const [newUserName, setNewUsername] = useState('')

    const currentUserJSON = useSelector(state => state.auth.currentUser)

    useEffect(() => {
        if (currentUserJSON.user){
        setNewName(currentUserJSON.user.name)
        setNewProfPic(currentUserJSON.user.profile_picture)
        setNewBio(currentUserJSON.user.bio)
        setNewUsername(currentUserJSON.user.username)
    }
    }, [])

    function handleEditProfile(e){
        e.preventDefault()

        fetch(`/users/${id}`, {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: newName,
                profile_picture: newProfPic,
                bio: newBio,
                username: newUserName
             })
           })
           .then(res => {
            if(res.ok){
                res.json().then((updatedUser) => {
                    dispatch(updateUser(updatedUser))
                    setIsHidden(true)
                    })
            } else {
                res.json().then((message) => {
                    const errorLis = message.errors.map(error => <li key={error}>{error}</li>)
                    setErrorsList(errorLis)
                })
            }
        })
    }

    function confirmDelete(){
        if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
            fetch(`/users/${currentUserJSON.user.id}`, {
                method: 'DELETE',
                headers: {"Content-Type": "application/json"},
              })
              .then(res => {
                if(res.ok){
                    res.json().then((deletedUser) => {
                        dispatch(removeUser(deletedUser.id))
                        dispatch(logout(deletedUser))
                        navigate('/login')})
                } else {
                    res.json().then((message) => {
                        const errorMessage = message.error
                        setError(errorMessage)
                    })
                }
            })
        }
    }

    return (
        <div className="profile-form-container">
            <button className="button" onClick={() => setIsHidden(!isHidden)}>{isHidden ? "Edit Profile" : "Hide Edit Profile"}</button>
            {isHidden ? null : 
                <form onSubmit={handleEditProfile} className="form">
                    <label>Edit Full Name: </label>
                    <br/>
                    <input className="form-input" type="text" onChange={(e) => setNewName(e.target.value)} value={newName} placeholder="Full Name" />
                    <br/><br/>
                    <label>Edit Profile Picture: </label>
                    <br/>
                    <input className="form-input" type="text" onChange={(e) => setNewProfPic(e.target.value)} value={newProfPic} placeholder="Image URL" />
                    <br/><br/>
                    <label>Edit UserName: </label>
                    <br/>
                    <input className="form-input" type="text" onChange={(e) => setNewUsername(e.target.value)} value={newUserName} placeholder="E.g. thenextallstar" />
                    <br/><br/>
                    <label>Edit Bio: </label>
                    <br/>
                    <input className="form-input" type="text" onChange={(e) => setNewBio(e.target.value)} value={newBio} placeholder="E.g. Sissy that walk" />
                    <br/><br/>
                    <button className="button" type="submit">Finish Editing Profile</button>
                    <p className="error-message">{errorsList}</p>
                    <p className="error-message">{error}</p>
                </form>}
                <button className="button" onClick={() => confirmDelete()}>Delete Profile</button>
        </div>
    )
}

export default EditUserForm;
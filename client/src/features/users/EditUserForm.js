import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "./usersSlice";

function EditUserForm () {
    const [isHidden, setIsHidden] = useState(true)
    const [errorsList, setErrorsList] = useState([])
    const { id } = useParams()
    const dispatch = useDispatch();

    const [newName, setNewName] = useState('')
    const [newProfPic, setNewProfPic] = useState('')
    const [newBio, setNewBio] = useState('')
    const [newUserName, setNewUsername] = useState('')

    const currentUserJSON = useSelector(state => state.auth.currentUser)
    const currentUser = JSON.parse(currentUserJSON)

    useEffect(() => {
        if (currentUser.user){
        setNewName(currentUser.user.name)
        setNewProfPic(currentUser.user.profile_picture)
        setNewBio(currentUser.user.bio)
        setNewUsername(currentUser.user.username)
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
                </form>}
        </div>
    )
}

export default EditUserForm;
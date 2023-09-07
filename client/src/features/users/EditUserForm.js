import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { updateUser } from "./usersSlice";

function EditUserForm ({ currentUser }) {
    const [isHidden, setIsHidden] = useState(true)
    const [errorsList, setErrorsList] = useState([])
    const { id } = useParams()
    const dispatch = useDispatch();

    const [newName, setNewName] = useState('')
    const [newProfPic, setNewProfPic] = useState('')
    const [newBio, setNewBio] = useState('')
    const [newUserName, setNewUsername] = useState('')

    useEffect(() => {
        if (currentUser){
        setNewName(currentUser.name)
        setNewProfPic(currentUser.profile_picture)
        setNewBio(currentUser.bio)
        setNewUsername(currentUser.username)
    }
    }, [currentUser])

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
            <button className="button" onClick={() => setIsHidden(!isHidden)}>Edit Profile</button>
            {isHidden ? null : 
                <form onSubmit={handleEditProfile} className="form">
                    <label>Edit Full Name: </label>
                    <input className="form-input" type="text" onChange={(e) => setNewName(e.target.value)} value={newName} placeholder="Full Name" />
                    <br/>
                    <label>Edit Profile Picture: </label>
                    <input className="form-input" type="text" onChange={(e) => setNewProfPic(e.target.value)} value={newProfPic} placeholder="Image URL" />
                    <br/>
                    <label>Edit UserName: </label>
                    <input className="form-input" type="text" onChange={(e) => setNewUsername(e.target.value)} value={newUserName} placeholder="E.g. thenextallstar" />
                    <br/>
                    <label>Edit Bio: </label>
                    <input className="form-input" type="text" onChange={(e) => setNewBio(e.target.value)} value={newBio} placeholder="E.g. Sissy that walk" />
                    <br/><br/>
                    <button className="button" type="submit">Finish Editing Profile</button>
                    <p className="error-message">{errorsList}</p>
                </form>}
        </div>
    )
}

export default EditUserForm;
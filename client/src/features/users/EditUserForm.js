import React, { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

function EditUserForm () {
    const [isHidden, setIsHidden] = useState(true)
    const [errorsList, setErrorsList] = useState([])
    const { id } = useParams()
    const [newName, setNewName] = useState('')
    const [newImage, setNewImage] = useState('')
    const navigate = useNavigate()

    // useEffect(() => {
    //     if (currentUser){
    //     setNewName(currentUser.name)
    //     setNewImage(currentUser.image)
    // }
    // }, [currentUser])

    function handleEditProfile(e){
        e.preventDefault()

        fetch(`/users/${id}`, {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: newName,
                image: newImage
             })
           })
           .then(res => {
            if(res.ok){
                res.json().then((updatedUser) => {
                    // handleEditUser(updatedUser)
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
            <button className="button" onClick={setIsHidden(!isHidden)}>Edit Profile:</button>
            {isHidden ? null : 
                <form onSubmit={handleEditProfile} className="form">
                    <label>Edit Full Name: </label>
                    <input className="form-input" type="text" onChange={(e) => setNewName(e.target.value)} value={newName} placeholder="Full Name" />
                    <br/>
                    <label>Edit Image URL (optional): </label>
                    <input className="form-input" type="text" onChange={(e) => setNewImage(e.target.value)} value={newImage} placeholder="Image URL" />
                    <br/><br/>
                    <button type="submit">Finish Editing Profile ✏️ </button>
                    <p className="error-message">{errorsList}</p>
                </form>}
        </div>
    )
}

export default EditUserForm;
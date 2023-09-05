import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPost } from "./postsSlice";

function NewPostForm () {
    const [newImage, setNewImage] = useState('')
    const [newCaption, setNewCaption] = useState('')
    const [newLocation, setNewLocation] = useState('')
    const [errorsList, setErrorsList] = useState([])
    const { id } = useParams()

    const navigate = useNavigate()
    const dispatch = useDispatch();

    function onSubmitPost(e){
        e.preventDefault()

        const newPost = {
            location: newLocation,
            image: newImage,
            caption: newCaption
        }

        fetch(`/users/${id}/posts`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                newPost
            )
          })
          .then(res => {
            if(res.ok){
                res.json().then((newPost) => {
                    dispatch(addPost(newPost))
                    setNewCaption('')
                    setNewLocation('')
                    setNewImage('')
                    navigate(`/users/${id}`)})
            } else {
                res.json().then((message) => {
                    const errorLis = message.errors.map(error => <li key={error}>{error}</li>)
                    setErrorsList(errorLis)
                })
            }
        })
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={onSubmitPost}>
            <h1 className="form-header">Craft Your New Post</h1>
            <p className='form-input'>Caption: </p>
            <input className="form-input" type="text" placeholder="E.g. The Library is Open" value={newCaption} onChange={e => setNewCaption(e.target.value)}>
            </input>
            <br/><br/>
            <p className='form-input'>Image: </p>
            <input className="form-input" type="text" placeholder="Paste Image URL here" value={newImage} onChange={e => setNewImage(e.target.value)}>
            </input>
            <br/><br/>
            <p className='form-input'>Location: </p>
            <input className="form-input" type="text" placeholder="E.g. The Werk Room" value={newLocation} onChange={e => setNewLocation(e.target.value)}>
            </input>
            <br/><br/>
            <button className="button" type="submit">Submit</button>
            <p className="error-message">{errorsList}</p>
            </form>
        </div>
    )
}

export default NewPostForm;
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import SendMessageIcon from "../icons/SendMessageIcon";

function NewDirectMessageForm () {
    const [newContent, setNewContent] = useState('')
    // const [newCaption, setNewCaption] = useState('')
    // const [newLocation, setNewLocation] = useState('')
    const [errorsList, setErrorsList] = useState([])
    const { id } = useParams()

    const navigate = useNavigate()
    const dispatch = useDispatch();

    function onSubmitDM(e){
        e.preventDefault()

        const newDM = {
            content: "hi",
            recipient_id: "hi"
        }

        fetch(`/users/${id}/posts`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                newDM
            )
          })
          .then(res => {
            if(res.ok){
                res.json().then((newDM) => {
                    // dispatch(addPost(newPost))
                    // setNewCaption('')
                    // setNewLocation('')
                    // setNewImage('')
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
        <div className="message-input-container">
            <form className="form" onSubmit={onSubmitDM}>
            <input className="message-input-field" type="text" placeholder="Message..." value={newContent} onChange={e => setNewContent(e.target.value)}>
            </input>
            <button className="button" type="submit"><SendMessageIcon/></button>
            <p className="error-message">{errorsList}</p>
            </form>
        </div>
    )
}

export default NewDirectMessageForm;
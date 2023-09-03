import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { addComment } from './commentsSlice';
import { useDispatch, useSelector } from "react-redux";

function NewCommentForm () {
    const [newContent, setNewContent] = useState('')
    const [errorsList, setErrorsList] = useState([])
    const { post_id } = useParams()

    const navigate = useNavigate()
    const dispatch = useDispatch();

    function onSubmitComment(e){
        e.preventDefault()

        const newComment = {
            content: newContent,
            post_id: post_id
        }

        fetch(`/posts/${post_id}/comments`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                newComment
            )
          })
          .then(res => {
            if(res.ok){
                res.json().then((newComment) => {
                    dispatch(addComment(newComment))
                    setNewContent('')
                    navigate('/')})
            } else {
                res.json().then((message) => {
                    const errorLis = message.errors.map(error => <li key={error}>{error}</li>)
                    setErrorsList(errorLis)
                })
            }
        })
    }

    return (
        <div className="review-form-container">
            {/* render the post you are looking at here! */}
            <form className="form" onSubmit={onSubmitComment}>
            Leave a Comment: <input className="form-input" type="text" placeholder="E.g. Love this post!" value={newContent} onChange={e => setNewContent(e.target.value)}>
                </input>
            <br/>
                <button>Submit</button>
                <p className="error-message">{errorsList}</p>
            </form>
        </div>
    )
}

export default NewCommentForm;
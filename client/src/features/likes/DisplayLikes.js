import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyHeartIcon from "../icons/EmptyHeartIcon";
import FullHeartIcon from "../icons/FullHeartIcon";
import { addLike, removeLike } from "./likesSlice";
import { fetchPosts } from "../posts/postsSlice";

function DisplayLikes({ post }) {
    const [errorsList, setErrorsList] = useState([])
    const [error, setError] = useState('')
    const dispatch = useDispatch();

    const currentUserJSON = useSelector(state => state.auth.currentUser)
    const currentUser = JSON.parse(currentUserJSON)

    const likeExists = post.likes.find((l) => l.user_id === currentUser.user.id)
    const selfLiked = likeExists ? true : false

    function handleLike() {
        fetch(`/users/${post.user.id}/posts/${post.id}/likes`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                post_id: post.id
        })
          })
          .then(res => {
            if(res.ok){
                res.json().then((newLike) => {
                    dispatch(addLike(newLike))
                    dispatch(fetchPosts());
                    })
            } else {
                res.json().then((message) => {
                    const errorLis = message.errors.map(error => <li key={error}>{error}</li>)
                    setErrorsList(errorLis)
                })
            }
        })
    }

    function handleUnlike() {
        const unlikedLike = post.likes.find((l) => l.user_id === currentUser.user.id)

        fetch(`/likes/${unlikedLike.id}`, {
            method: 'DELETE',
            headers: {"Content-Type": "application/json"},
          })
          .then(res => {
            if(res.ok){
                res.json().then((deletedLike) => {
                    dispatch(removeLike(deletedLike.id))
                    dispatch(fetchPosts());
                    })
            } else {
                res.json().then((message) => {
                    const errorMessage = message.error
                    setError(errorMessage)
                })
            }
        })
    }

  return (
    <div>
        { selfLiked ? <button onClick={() => handleUnlike()}><FullHeartIcon/> {post.likes.length} Likes</button> : <button onClick={() => handleLike()}><EmptyHeartIcon/> {post.likes.length} Likes</button>}
        <p className="error-message">{errorsList}</p>  
        <p className="error-message">{error}</p>    
    </div>
  );
}

export default DisplayLikes;
    
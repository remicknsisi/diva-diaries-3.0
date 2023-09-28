import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeComment } from "./commentsSlice";
import { fetchPosts } from "../posts/postsSlice";

function Comment({ comment }) {
  const [error, setError] = useState('')
  const dispatch = useDispatch();
  const { content, user, id } = comment

  const currentUserJSON = useSelector(state => state.auth.currentUser)
  const currentUser = JSON.parse(currentUserJSON)

    function handleDeleteComment() {
      fetch(`/comments/${id}`, {
          method: 'DELETE',
          headers: {"Content-Type": "application/json"},
        })
        .then(res => {
          if(res.ok){
              res.json().then((deletedComment) => {
                  dispatch(removeComment(deletedComment.id))
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
        <ul>
            <li>
                <a className="username" href="/">{user.username}</a>
                <span className="comment-text"> {content}</span>
                {user.id === currentUser.user.id ? <button onClick={() => handleDeleteComment()}>X</button> : null}
                <p className="error-message">{error}</p>    
            </li>
        </ul>
    </div>
  );
}

export default Comment;
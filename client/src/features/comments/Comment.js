import React from "react";
import { useSelector } from "react-redux";

function Comment({ comment }) {
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
                  dispatch(removeComment(deletedComment));
                  navigate('/')})
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
                <a class="username" href="#">{user.username}</a>
                <span class="comment-text"> {content}</span>
                {user.id === currentUser.user.id ? <button onClick={() => handleDeleteComment()}>X</button> : null}
            </li>
        </ul>
    </div>
  );
}

export default Comment;
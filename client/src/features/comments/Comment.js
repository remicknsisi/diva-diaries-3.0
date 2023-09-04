import React from "react";

function Comment({ comment }) {
    const { content, user } = comment
    
  return (
    <div>
        <ul>
            <li>
                <a class="username" href="#">{user.username}</a>
                <span class="comment-text"> {content}</span>
            </li>
        </ul>
    </div>
  );
}

export default Comment;
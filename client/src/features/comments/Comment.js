import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
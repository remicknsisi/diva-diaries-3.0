import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchUsers } from "../users/usersSlice";

function DirectMessage({ message }) {
    const { id, user_id, recipient_id, content, created_at } = message
    const dispatch = useDispatch();
    const currentUserJSON = useSelector(state => state.auth.currentUser)
    const currentUser = JSON.parse(currentUserJSON)

    useEffect(() => {
        dispatch(fetchUsers());
    }, [])

  return (
    <div className="message">
        <header className="dm-header">
            {/* <img className="user-info-profile-pic" src={currentUser.user.profile_picture}/>
            <p className="user-info">{currentUser.user.username}</p> */}
        </header>
        {message.content}
    </div>
  );
}

export default DirectMessage;
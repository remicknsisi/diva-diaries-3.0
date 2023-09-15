import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchUsers } from "../users/usersSlice";

function DirectMessage({ message }) {
    const { id, user_id, recipient_id, content, created_at } = message
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.entities);
    const userToDisplay = users.find((u) => u.id === user_id)
    const inputDate = created_at
    const dateObject = new Date(inputDate);
    const day = dateObject.getDate();
    const month = dateObject.toLocaleString('default', { month: 'long' });
    const time = dateObject.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const formattedDate = `${day} ${month} ${time}`;

    useEffect(() => {
        dispatch(fetchUsers());
    }, [])

  return (
    <div className="message">
        <header className="dm-header">
            <img className="user-info-profile-pic" src={userToDisplay.profile_picture}/>
            <p className="user-info">{userToDisplay.username}</p>
        </header>
        {message.content}
        <div className="post-timestamp">
            <span>{formattedDate}</span>
        </div>
    </div>
  );
}

export default DirectMessage;
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../users/usersSlice";

function DirectMessage({ message }) {
    const { user_id, created_at } = message
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.entities);
    const userToDisplay = users.find((u) => u.id === user_id)
    const inputDate = created_at
    const dateObject = new Date(inputDate);
    const day = dateObject.getDate();
    const month = dateObject.toLocaleString('default', { month: 'long' });
    const time = dateObject.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const formattedDate = `${day} ${month} ${time}`;    
    
    const currentUserJSON = useSelector(state => state.auth.currentUser)
    const currentUser = JSON.parse(currentUserJSON)

    useEffect(() => {
        dispatch(fetchUsers());
    }, [])

  return (
    <div className="message">
        <header className={currentUser.user.id === user_id ?  "dm-header-sent" : "dm-header-received"}>
            <img className="user-info-profile-pic" src={userToDisplay.profile_picture}/>
            <p className="user-info">{userToDisplay.username}</p>
        </header>
        <p className={`message-content ${currentUser.user.id === user_id ? "sent-message" : "received-message"}`}>{message.content}</p>
        <div className={`dm-timestamp ${currentUser.user.id === user_id ? "dm-timestamp-sent" : "dm-timestamp-received"}`}>
            <span>{formattedDate}</span>
        </div>
    </div>
  );
}

export default DirectMessage;
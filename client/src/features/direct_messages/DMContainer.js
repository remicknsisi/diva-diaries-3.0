import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchMessages } from "./dmsSlice";
import DirectMessage from "./DisplayDirectMessages";

function DMContainer({ recipient }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams()

  // const messages = useSelector((state) => state.messages.entities);
  // const messagesToDisplay = [...messages].filter((m) => m.recipient_id === recipient.id)
  // {messagesToDisplay.map((message) => <DirectMessage key={message.id} message={message}/>)}


  // console.log(messagesToDisplay)


  useEffect(() => {
    dispatch(fetchMessages());
  }, [])

  return (
    <div className="conversation-item">
      <img className="profile-picture" src={recipient.profile_picture} alt="user"/>
      <a className="username" href={`/users/${id}/direct_messages/${recipient.id}`}>{recipient.username}</a>
    </div>
  );
}

export default DMContainer;
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchMessages } from "./dmsSlice";
import DirectMessage from "./DirectMessage";

function DisplayDirectMessages() {
  const { id, recipient_id } = useParams()
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const messages = useSelector((state) => state.messages.entities);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [])

  const messagesToDisplay = [...messages].filter((m) => m.recipient_id === recipient_id*1)

  return (
    <div className="message-container">
      <button className="button" onClick={() => navigate(`/users/${id}/direct_messages`)}>Back</button>
      {messagesToDisplay.map((message) => <DirectMessage key={message.id} message={message}/>)}
    </div>
  );
}

export default DisplayDirectMessages;
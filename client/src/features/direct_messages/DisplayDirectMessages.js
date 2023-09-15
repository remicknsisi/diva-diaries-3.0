import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchMessages } from "./dmsSlice";
import DirectMessage from "./DirectMessage";
import NewDirectMessageForm from "./NewDirectMessageForm";

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
      <NewDirectMessageForm/>
    </div>
  );
}

export default DisplayDirectMessages;

// .message-input {
//   display: flex;
//   border-top: 1px solid #ddd;
//   padding: 10px 0;
// }

// .message-input input {
//   flex-grow: 1;
//   border: none;
//   outline: none;
//   padding: 10px;
//   font-size: 14px;
// }

// .send-button {
//   background-color: #3897f0;
//   color: #fff;
//   border: none;
//   padding: 10px 20px;
//   cursor: pointer;
// }

// .send-button:hover {
//   background-color: #2473c0;
// }

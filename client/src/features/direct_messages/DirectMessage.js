import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

function DirectMessage({ message }) {
    const { id, user_id, recipient_id, content, created_at } = message
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { id, recipient_id } = useParams()

//   const messages = useSelector((state) => state.messages.entities);
  // const messagesToDisplay = [...messages].filter((m) => m.recipient_id === recipient.id)
  // {messagesToDisplay.map((message) => <DirectMessage key={message.id} message={message}/>)}


  // console.log(messagesToDisplay)


//   useEffect(() => {
//     dispatch(fetchMessages());
//   }, [])

console.log(message)

  return (
    <div>
      {message.content}
    </div>
  );
}

export default DirectMessage;
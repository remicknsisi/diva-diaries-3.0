import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchMessages } from "./dmsSlice";

function DisplayDirectMessages() {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { id } = useParams()

  // const messages = useSelector((state) => state.messages.entities);
  // const messagesToDisplay = [...messages].filter((m) => m.recipient_id === recipient.id)
  // {messagesToDisplay.map((message) => <DirectMessage key={message.id} message={message}/>)}


  // console.log(messagesToDisplay)


  // useEffect(() => {
  //   dispatch(fetchMessages());
  // }, [])

  return (
    <div>
      this is the display direct messages component
      render messages here for this recipient
    </div>
  );
}

export default DisplayDirectMessages;
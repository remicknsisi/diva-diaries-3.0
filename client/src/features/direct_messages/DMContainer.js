import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchMessages } from "./dmsSlice";


function DMContainer({ recipient }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams()

  const messages = useSelector((state) => state.messages.entities);

  console.log(messages)

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
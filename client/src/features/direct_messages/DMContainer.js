import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMessages } from "./dmsSlice";

function DMContainer({ recipient }) {
  const dispatch = useDispatch();
  const { id } = useParams()


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
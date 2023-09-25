import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../users/usersSlice";
import { useParams, useNavigate } from "react-router-dom";
import User from "../users/User";

function DisplayFollowings({ inFollowers }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const users = useSelector((state) => state.users.entities);
    const user = users.find((u) => u.id === id*1)

    const followers = user ? users.filter((u) => user.unique_followers.some((f) => f.user_id === u.id)) : null
    const followings = user ? users.filter((u) => user.unique_followings.some((f) => f.followed_user_id === u.id)) : null

    useEffect(() => {
        dispatch(fetchUsers());
    }, [])

  if(user){return (
    <div className="conversation-list">
        <button className="button" onClick={() => navigate(`/users/${id}`)}>Back</button>
        {inFollowers ? followers.map((u) => <User key={u.id} user={u}/>) : followings.map((u) => <User key={u.id} user={u}/>) }
    </div>
  );} else{
    return(<p>Loading...</p>)
  }
}

export default DisplayFollowings;
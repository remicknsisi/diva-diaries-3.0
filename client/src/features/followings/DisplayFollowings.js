import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../users/usersSlice";
import { useParams, useNavigate } from "react-router-dom";
import User from "../users/User";

function DisplayFollowings({ inFollowers }) {
    const dispatch = useDispatch();
    const { id } = useParams();
    const users = useSelector((state) => state.users.entities);
    const user = users.find((u) => u.id === id*1)
    console.log(user)

    // const recipientsToDisplay = users.filter((user) => uniqueRecipients.includes(user.id))
    
    // follower count is off bc i have repeats from the smae user

    const followers = user ? users.filter((u) => user.followers.some((f) => f.user_id === u.id)) : null
    const followings = user ? users.filter((u) => user.followings.some((f) => f.user_id === u.id)) : null

    useEffect(() => {
        dispatch(fetchUsers());
    }, [])

  if(user){return (
    <div className="conversation-list">
        {inFollowers ? followers.map((u) => <User key={u.id} user={u}/>) : followings.map((u) => <User key={u.id} user={u}/>) }
    </div>
  );} else{
    return(<p>Loading...</p>)
  }
}

export default DisplayFollowings;
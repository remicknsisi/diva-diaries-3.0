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

    useEffect(() => {
        dispatch(fetchUsers());
    }, [])

    // const usersToDisplay = users.filter(user => {
    //     if (user.name.toLowerCase().includes(search)) return true;
    //     else if (user.username.toLowerCase().includes(search)) return true;
    //   })

  if(user){return (
    <div className="conversation-list">
        {inFollowers ? user.followers.map((u) => <User key={u.id} user={u}/>) : user.followings.map((u) => <User key={u.id} user={u}/>) }
    </div>
  );} else{
    return(<p>Loading...</p>)
  }
}

export default DisplayFollowings;
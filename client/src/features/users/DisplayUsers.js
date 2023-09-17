import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./usersSlice";
import User from "./User";

function DisplayUsers() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.entities);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [])

  if(users){return (
    <div className="posts-container">
        hi
      {users.map((u) => <User key={u.id} user={u}/>)}
    </div>
  );} else{
    return(<p>Loading...</p>)
  }
}

export default DisplayUsers;
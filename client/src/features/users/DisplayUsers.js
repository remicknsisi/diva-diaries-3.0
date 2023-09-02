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

  const usersList = users.map((u) => (
    <User key={u.id} user={u}/>
  ))

  return (
    <div>
      {usersList}
    </div>
  );
}

export default DisplayUsers;
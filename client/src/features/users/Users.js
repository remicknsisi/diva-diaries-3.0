import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./usersSlice";

function Users() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.entities);
  console.log(users)

  function handleClick() {
    dispatch(fetchUsers());
  }

  const usersList = users.map((u) => (
    <li key={u.id}>{u.name}</li>
  ))

  return (
    <div>
      <button onClick={handleClick}>Get Users</button>
      {usersList}
    </div>
  );
}

export default Users;
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./usersSlice";

function User({ user }) {
    const { bio, name, profile_picture, username } = user

  return (
    <div>
      {username}
    </div>
  );
}

export default User;
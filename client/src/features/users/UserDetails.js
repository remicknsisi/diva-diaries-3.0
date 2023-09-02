import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./usersSlice";
import { useParams } from 'react-router-dom';

function UserDetails() {

  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.entities);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [])

  const userToDisplay = users.find((u) => u.id === id*1)
  console.log(userToDisplay)

  if (userToDisplay){return (
    <div>
      this is {userToDisplay.name}
    </div>
  );
  } else { return (
    <p>Loading User...</p>)
  }
}

export default UserDetails;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./usersSlice";
import User from "./User";
import Search from "../Search";

function DisplayUsers() {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch();

    const users = useSelector((state) => state.users.entities);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [])

    const usersToDisplay = users.filter(user => {
        if (user.name.toLowerCase().includes(search)) return true;
        else if (user.username.toLowerCase().includes(search)) return true;
      })

  if(usersToDisplay){return (
    <div className="conversation-list">
        <Search search={search} setSearch={setSearch}/>
        {usersToDisplay.map((u) => <User key={u.id} user={u}/>)}
    </div>
  );} else{
    return(<p>Loading...</p>)
  }
}

export default DisplayUsers;
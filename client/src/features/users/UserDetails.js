import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./usersSlice";
import { useParams } from 'react-router-dom';
import EditUserForm from "./EditUserForm";
import Post from "../posts/Post";

function UserDetails() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.entities);
  const currentUserJSON = useSelector(state => state.auth.currentUser)
  const currentUser = JSON.parse(currentUserJSON)

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [])

  const userToDisplay = users.find((u) => u.id === id*1)

  if (userToDisplay){return (
    <div>
        <title>Instagram User Page</title>
      <header>
        <img className="profile-picture" src={userToDisplay.profile_picture} alt="User"/>
        <div className="user-info">
          <h1 className="username">{userToDisplay.username}</h1>
          <p className="bio">{userToDisplay.bio}</p>
        </div>
        <br/><br/>
        <div className="edit-profile">
          {currentUser.user.id === id*1 ? <EditUserForm currentUser={currentUser.user} /> : null}
        </div>
      </header>
      <section className="user-posts">
          {userToDisplay.posts.map((p) => <Post key={p.id} inUserDetails={true} post={p} user={userToDisplay} />)}
      </section>
      <footer>
      </footer>
    </div>
  );
  } else { return (
    <p>Loading User...</p>)
  }
}

export default UserDetails;
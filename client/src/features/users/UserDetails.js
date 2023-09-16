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

  function handleFollowUser(){
    
  }

  const userToDisplay = users.find((u) => u.id === id*1)

  if (userToDisplay){return (
    <div>
        <div class="counts">
          <div class="count">
            <span class="count-number">{userToDisplay.posts.length}</span>
            <span class="count-label">Posts</span>
          </div>
          <div class="count">
            <span class="count-number">{userToDisplay.followers.length}</span>
            <span class="count-label">Followers</span>
          </div>
          <div class="count">
            <span class="count-number">{userToDisplay.followings.length}</span>
            <span class="count-label">Following</span>
          </div>
        </div>
        <header>
        <img className="profile-picture" src={userToDisplay.profile_picture} alt="User"/>
        <div className="user-info">
          <h1 className="username">{userToDisplay.username}</h1>
          <p className="bio">{userToDisplay.bio}</p>
        </div>
      </header>
      <div className="edit-profile">
          {currentUser.user.id === id*1 ? <EditUserForm currentUser={currentUser.user} /> : null}
      </div>
      <div className="follow-user">
          {currentUser.user.id === id*1 ? null : <button className="button" onClick={() => handleFollowUser()}>Follow</button>}
      </div>
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
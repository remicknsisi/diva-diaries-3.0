import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./usersSlice";
import { useParams } from 'react-router-dom';
import Post from "../posts/Post";

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
      <head>
        <title>Instagram User Page</title>
      </head>
    <body>
    <header>
      <img class="profile-picture" src={userToDisplay.profile_picture} alt="User Profile Picture"/>
      <div class="user-info">
        <h1 class="username">{userToDisplay.username}</h1>
        <p class="bio">{userToDisplay.bio}</p>
      </div>
    </header>
      <section class="user-posts">
        {userToDisplay.posts.map((p) => <Post key={p.id} post={p}/>)}
      </section>
      <footer>
      </footer>
    </body>
    </div>
  );
  } else { return (
    <p>Loading User...</p>)
  }
}

export default UserDetails;
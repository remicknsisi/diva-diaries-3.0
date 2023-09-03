import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./usersSlice";
import { Navigate, useParams } from 'react-router-dom';
import Post from "../posts/Post";
import EditUserForm from "./EditUserForm";

function UserDetails() {
  const [isHidden, setIsHidden] = useState(true)

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
        <div class="edit-profile">
          {isHidden ? <button onClick={() => setIsHidden(false)}>Edit Profile</button> : 
            <>
              <button onClick={() => setIsHidden(true)}>Hide Edit Profile Form</button>
              <EditUserForm />
            </>
          }
        </div>
      </header>
      <section class="user-posts">
          {/* {userToDisplay.posts.map((p) => <Post key={p.id} post={p}/>)} */}
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
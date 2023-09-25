import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./usersSlice";
import { useParams, useNavigate } from 'react-router-dom';
import EditUserForm from "./EditUserForm";
import Post from "../posts/Post";
import { addFollowing, removeFollowing } from "../followings/followingsSlice";

function UserDetails() {
  const [errorsList, setErrorsList] = useState([]);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.entities);
  const currentUserJSON = useSelector(state => state.auth.currentUser)
  const currentUser = JSON.parse(currentUserJSON)
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(users)

  useEffect(() => {
    dispatch(fetchUsers());
  }, [])

  const userToDisplay = users.find((u) => u.id === id*1)
  console.log(userToDisplay)

  const isFollowed = userToDisplay ? userToDisplay.followers.find((follower) => follower.user_id === currentUser.user.id) : null

  function handleFollowUser(){

    const newFollowing = {
      followed_user_id: userToDisplay.id
    }

    fetch(`/users/${currentUser.user.id}/followings`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(
          newFollowing
      )
    })
    .then(res => {
      if(res.ok){
          res.json().then((newFollowing) => {
              dispatch(addFollowing(newFollowing))
              dispatch(fetchUsers())
              })
      } else {
          res.json().then((message) => {
              const errorLis = message.errors.map(error => <li key={error}>{error}</li>)
              setErrorsList(errorLis)
          })
      }
  })
  }

  function handleUnfollowUser(){
    const following_id = userToDisplay.followers.find((follower) => follower.user_id === currentUser.user.id)

    fetch(`/followings/${following_id.id}`, {
      method: 'DELETE',
      headers: {"Content-Type": "application/json"},
    })
    .then(res => {
      if(res.ok){
          res.json().then((deletedFollowing) => {
              dispatch(removeFollowing(deletedFollowing.id))
              dispatch(fetchUsers())
              })
      } else {
          res.json().then((message) => {
              const errorMessage = message.error
              setError(errorMessage)
          })
      }
  })
  }

  if (userToDisplay){return (
    <div>
        <div className="counts">
          <div className="count">
            <span className="count-number">{userToDisplay.posts.length}</span>
            <span className="count-label">Posts</span>
          </div>
          <div className="count" onClick={() => navigate(`/users/${id}/followers`)}>
            <span className="count-number">{userToDisplay.followers.length}</span>
            <span className="count-label">Followers</span>
          </div>
          <div className="count" onClick={() => navigate(`/users/${id}/followings`)}>
            <span className="count-number">{userToDisplay.followings.length}</span>
            <span className="count-label">Following</span>
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
          {currentUser.user.id === id*1 ? null : Boolean(isFollowed) ? <button className="button" onClick={() => handleUnfollowUser()}>Unfollow</button> : <button className="button" onClick={() => handleFollowUser()}>Follow</button>}
          <p className="error-message">{errorsList}</p>
          <p className="error-message">{error}</p>    
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
import React from "react";

function User({ user }) {

  return (
    <div className="conversation-item">
      <img className="profile-picture" src={user.profile_picture} alt="user"/>
      <a className="username" href={`/users/${user.id}`}>{user.username}</a>
    </div>
  );
}

export default User;
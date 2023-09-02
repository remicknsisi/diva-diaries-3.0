import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayComments from '../comments/DisplayComments'

function Post({ post }) {
    const { location, caption, image, user_id, user, comments, created_at, id } = post

  return (
    <div class="post">
        <div class="post-header">
            <img class="profile-picture" src={user.profile_picture} alt="Profile Picture"/>
            <a class="username" href="#">{user.username}</a>
        </div>
        <div class="post-location">
            <i class="fas fa-map-marker"></i>
            <span>📍 {location}</span>
        </div>
        <div class="post-image">
            <img src={image} alt="Post Image"/>
        </div>
        <div class="post-actions">
            <div class="like-button">
            <button>Like</button>
            </div>
            <div class="comment-button">
            <button>Comment</button>
            </div>
            <div class="share-button">
            <button>Share</button>
            </div>
        </div>
        <div class="post-caption">
            <a class="username" href="#">{user.username}</a>
            <span class="caption-text"> {caption}</span>
        </div>
        <div class="post-comments">
            <DisplayComments id={id} />
        </div>
        <div class="post-timestamp">
            <span>{created_at}</span>
        </div>
    </div>
  );
}

export default Post;
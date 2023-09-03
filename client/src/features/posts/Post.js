import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayComments from '../comments/DisplayComments';
import { useParams } from 'react-router-dom';
import { fetchUsers } from "../users/usersSlice";

function Post({ post }) {
    const { location, caption, image, user, user_id, comments, created_at, id } = post
    // const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
      }, [])

    const users = useSelector((state) => state.users.entities);
    const post_owner = users.find((u) => u.id === post.user_id)

  return (
    <div class="post">
        <div class="post-header">
            <img class="profile-picture" src={post_owner.profile_picture} alt="Profile Picture"/>
            <a class="username" href={`/users/${post_owner.id}`}>{post_owner.username}</a>
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
            <a class="username" href="#">{post_owner.username}</a>
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
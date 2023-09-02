import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Post({ post }) {
    const { location, caption, image, user_id, user } = post
    console.log(post)

  return (
    <div class="post">
        <div class="post-header">
            <img class="profile-picture" src={user.profile_picture} alt="Profile Picture"/>
            <a class="username" href="#">{user.username}</a>
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
        {/* <div class="post-comments">
            <ul>
            <li>
                <a class="username" href="#">commenter1</a>
                <span class="comment-text">This is a comment.</span>
            </li>
            <li>
                <a class="username" href="#">commenter2</a>
                <span class="comment-text">Another comment here.</span>
            </li>
            </ul>
        </div>
        <div class="post-timestamp">
            <span>2 hours ago</span>
        </div> */}
    </div>
  );
}

export default Post;
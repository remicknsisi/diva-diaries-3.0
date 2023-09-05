import React, { useState } from "react";
import DisplayComments from '../comments/DisplayComments';
import CommentIcon from "../icons/CommentIcon";
import { useNavigate, useParams } from 'react-router-dom';
import DisplayLikes from "../likes/DisplayLikes";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "../icons/DeleteIcon";
import { removePost } from "./postsSlice";

function PostDetails() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { id } = useParams();

    return (
    <div className="post-details">
        <button className="button" onClick={() => navigate(`/users/${id}`)}>Back</button>
        {/* <div className="post-header">
            <img className="profile-picture" src={userOfPost.profile_picture} alt="user"/>
            <a className="username" href={`/users/${userOfPost.id}`}>{userOfPost.username}</a>
            {currentUser.user.id === user_id ? <button onClick={() => handleDeletePost()}><DeleteIcon/></button> : null}
            <p className="error-message">{error}</p>    
        </div>
        <div className="post-location">
            <i className="fas fa-map-marker"></i>
            <span>📍 {location}</span>
        </div>
        <div className="post-image">
            <img src={image} alt="post"/>
        </div>
        <div className="post-actions">
            <div className="like-button">
            <DisplayLikes selfLiked={selfLiked} id={id}/>
            </div>
            <div className="comment-button">
            <button onClick={() => navigate(`/posts/${id}/comments`)}><CommentIcon/> Comment</button>
            </div>
        </div>
        <div className="post-caption">
            <a className="username" href="/">{userOfPost.username}</a>
            <span className="caption-text"> {caption}</span>
        </div>
        <div className="post-comments">
            <DisplayComments id={id} />
        </div>
        <div className="post-timestamp">
            <span>{created_at}</span>
        </div> */}
    </div>
  )
}

export default PostDetails;
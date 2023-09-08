import React, { useState } from "react";
import DisplayComments from '../comments/DisplayComments';
import CommentIcon from "../icons/CommentIcon";
import { useNavigate } from 'react-router-dom';
import DisplayLikes from "../likes/DisplayLikes";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "../icons/DeleteIcon";
import { removePost } from "./postsSlice";

function Post({ post, inUserDetails, user }) {
    const { location, caption, image, user_id, created_at, id } = post
    const [error, setError] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const isoDate = created_at
    const date = new Date(isoDate);
    const options = { month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options);

    const currentUserJSON = useSelector(state => state.auth.currentUser)
    let currentUser = null;

    if (typeof currentUserJSON === 'string') {
      try {
        currentUser = JSON.parse(currentUserJSON);
      } catch (error) {
        console.error('Error parsing currentUserJSON:', error);
        // Handle the parsing error, e.g., set currentUser to null or a default value
      }
    } else if (typeof currentUserJSON === 'object') {
      currentUser = currentUserJSON;
    }
    // const currentUser = JSON.parse(currentUserJSON)

    function handleDeletePost(){
        fetch(`/posts/${id}`, {
            method: 'DELETE',
            headers: {"Content-Type": "application/json"},
          })
          .then(res => {
            if(res.ok){
                res.json().then((deletedPost) => {
                    dispatch(removePost(deletedPost.id));
                    navigate(`/users/${user.id}`)})
            } else {
                res.json().then((message) => {
                    const errorMessage = message.error
                    setError(errorMessage)
                })
            }
        })
    }

    console.log(user_id, currentUser)

  if(inUserDetails){
    return(
        <div className="post-on-user-page" onClick={() => navigate(`/users/${user.id}/posts/${post.id}`)}>
            <div className="post-on-user-page-img">
                <img src={image} alt="post"/>
            </div>
        </div> 
    )
  }else {
    if(currentUser){return (
    <div className="post">
        <div className="post-header">
            <img className="profile-picture" src={user.profile_picture} alt="user"/>
            <a className="username" href={`/users/${user.id}`}>{user.username}</a>
            {currentUser.user.id === user_id ? <button className="button" onClick={() => handleDeletePost()}>Delete Post <DeleteIcon/></button> : null}
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
            <DisplayLikes post={post}/>
            </div>
            <div className="comment-button">
            <button onClick={() => navigate(`/users/${user.id}/posts/${id}/comments`)}><CommentIcon/> Comment</button>
            </div>
        </div>
        <div className="post-caption">
            <a className="username" href={`/users/${user.id}`}>{user.username}</a>
            <span className="caption-text"> {caption}</span>
        </div>
        <div className="post-comments">
            <DisplayComments id={id} inPostDetails={false} />
        </div>
        <div className="post-timestamp">
            <span>{formattedDate}</span>
        </div>
    </div>
  )}else{
    <p>Loading...</p>
  }}
}

export default Post;
import React, { useState } from "react";
import DisplayComments from '../comments/DisplayComments';
import CommentIcon from "../icons/CommentIcon";
import { useNavigate, useParams } from 'react-router-dom';
import DisplayLikes from "../likes/DisplayLikes";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "../icons/DeleteIcon";
import { removePost } from "./postsSlice";
import PostDetails from "./PostDetails";

function Post({ post, inUserDetails }) {
    const { location, caption, image, user_id, created_at, id } = post
    const [error, setError] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const currentUserJSON = useSelector(state => state.auth.currentUser)
    const currentUser = JSON.parse(currentUserJSON)

    const likeExists = post.likes.find((l) => l.user_id === currentUser.user.id)
    const selfLiked = likeExists ? true : false

    const users = useSelector((state) => state.users.entities);
    const userOfPost = users.find((u) => u.id === user_id*1)
    console.log(userOfPost)

    function handleDeletePost(){
        fetch(`/posts/${id}`, {
            method: 'DELETE',
            headers: {"Content-Type": "application/json"},
          })
          .then(res => {
            if(res.ok){
                res.json().then((deletedPost) => {
                    dispatch(removePost(deletedPost.id));
                    navigate('/')})
            } else {
                res.json().then((message) => {
                    const errorMessage = message.error
                    setError(errorMessage)
                })
            }
        })
    }

  if(inUserDetails){
    return(
        <div className="post-on-user-page" onClick={() => navigate(`/users/${userOfPost.id}/posts/${post.id}`)}>
            <div className="post-on-user-page-img">
                <img src={image} alt="post"/>
            </div>
        </div> 
    )
  }else {return (
    <div className="post">
        <div className="post-header">
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
        </div>
    </div>
  )}
}

export default Post;
import React, { useState, useEffect } from "react";
import DisplayComments from '../comments/DisplayComments';
import CommentIcon from "../icons/CommentIcon";
import { useNavigate, useParams } from 'react-router-dom';
import DisplayLikes from "../likes/DisplayLikes";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "../icons/DeleteIcon";
import { removePost } from "./postsSlice";
import { fetchPosts } from './postsSlice';

function PostDetails() {
    const dispatch = useDispatch()
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { id, post_id } = useParams()

    const posts = useSelector((state) => state.posts.entities)
    const post = posts.find((p) => p.id === post_id*1)

    const currentUserJSON = useSelector(state => state.auth.currentUser)
    const currentUser = JSON.parse(currentUserJSON)

    const isoDate = post ? post.created_at : null
    const date = new Date(isoDate)
    const options = { month: 'long', day: 'numeric' }
    const formattedDate = date.toLocaleDateString(undefined, options)
  
    useEffect(() => {
      dispatch(fetchPosts());
    }, [dispatch])

    function handleDeletePost(){
        fetch(`/posts/${post_id}`, {
            method: 'DELETE',
            headers: {"Content-Type": "application/json"},
          })
          .then(res => {
            if(res.ok){
                res.json().then((deletedPost) => {
                    dispatch(removePost(deletedPost.id));
                    navigate(`/users/${id}`)})
            } else {
                res.json().then((message) => {
                    const errorMessage = message.error
                    setError(errorMessage)
                })
            }
        })
    }

    if(post) {return (
    <div className="post-details">
        <button className="button" onClick={() => navigate(`/users/${id}`)}>Back</button>
        <div className="post-header">
            <img className="profile-picture" src={post.user.profile_picture} alt="user"/>
            <a className="username" href={`/users/${post.user.id}`}>{post.user.username}</a>
            {currentUser.user.id === id*1 ? <button className="button" onClick={() => handleDeletePost()}>Delete Post <DeleteIcon/></button> : null}
            <p className="error-message">{error}</p>    
        </div>
        <div className="post-location">
            <i className="fas fa-map-marker"></i>
            <span>📍 {post.location}</span>
        </div>
        <div className="post-image">
            <img src={post.image} alt="post"/>
        </div>
        <div className="post-actions">
            <div className="like-button">
            <DisplayLikes post={post}/>
            </div>
            <div className="comment-button">
            <button onClick={() => navigate(`/users/${id}/posts/${post_id}/comments`)}><CommentIcon/> Comment</button>
            </div>
        </div>
        <div className="post-caption">
            <a className="username" href="/">{post.user.username}</a>
            <span className="caption-text"> {post.caption}</span>
        </div>
        <div className="post-comments">
            <DisplayComments id={post_id} inPostDetails={true} />
        </div>
        <div className="post-timestamp">
            <span>{formattedDate}</span>
        </div>
    </div>
  )} else {
    return(
        <p>Loading post details...</p>
    )
  }
}

export default PostDetails;
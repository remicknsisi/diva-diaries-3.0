import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from './postsSlice';
import Post from "./Post";

function DisplayPosts() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.entities);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [])

  if(posts){return (
    <div className="posts-container">
      {posts.map((p) => <Post key={p.id} post={p} user={p.user} inUserDetails={false}/>)}
    </div>
  );} else{
    return(<p>Loading...</p>)
  }
}

export default DisplayPosts;
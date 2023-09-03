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

//   console.log(posts)

  return (
    <div>
      {posts.map((p) => <Post key={p.id} post={p}/>)}
    </div>
  );
}

export default DisplayPosts;
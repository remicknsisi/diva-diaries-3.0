import './App.css';
import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Route, Routes } from "react-router-dom";
import Login from './features/Login';
import Signup from './features/Signup';
import DisplayPosts from './features/posts/DisplayPosts';
import UserDetails from './features/users/UserDetails';
import { loadUserFromStorage } from './features/auth/authActions';
import NewCommentForm from './features/comments/NewCommentForm';
import StickyMenu from './features/StickyMenu';
import NewPostForm from "./features/posts/NewPostForm";
import PostDetails from './features/posts/PostDetails';
import DisplayDMs from './features/direct_messages/DisplayDMs';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserFromStorage());
  }, [dispatch]);

  return (
    <div className="App">
      <StickyMenu/>
        <Routes>
          <Route path="/" element={<DisplayPosts/>}/>
          <Route path="/users/:id" element={<UserDetails/>}/>
          <Route path="/users/:id/posts/:post_id" element={<PostDetails/>}/>
          <Route path="/users/:id/posts" element={<NewPostForm/>}/>
          <Route path="/users/:id/posts/:post_id/comments" element={<NewCommentForm/>}/>
          <Route path="/users/:id/direct_messages" element={<DisplayDMs/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;

import './App.css';
import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { Route, Routes } from "react-router-dom";
import Login from './features/Login';
import Signup from './features/Signup';
import DisplayPosts from './features/posts/DisplayPosts';
import UserDetails from './features/users/UserDetails';
import { loadUserFromStorage } from './features/auth/authActions';
import NewCommentForm from './features/comments/NewCommentForm'

function App() {
  // useEffect(() => {
  //   // Dispatch the action to load user data from storage
  //   loadUserFromStorage();
  // }, [loadUserFromStorage]);
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the action to load user data from storage when the app initializes
    dispatch(loadUserFromStorage());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <a class="title" href={`/`}>DivaDiaries</a>
      </header>
        <Routes>
          <Route path="/" element={<DisplayPosts/>}/>
          <Route path="/users/:id" element={<UserDetails/>}/>
          <Route path="/posts/:post_id/comments" element={<NewCommentForm/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;

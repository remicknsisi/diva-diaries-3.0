import './App.css';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from "react-router-dom";
import Login from './features/Login';
import Signup from './features/Signup';
import DisplayPosts from './features/posts/DisplayPosts';
import UserDetails from './features/users/UserDetails';
import { loadUserFromStorage } from './features/auth/authActions';
import NewCommentForm from './features/comments/NewCommentForm';
import { logout } from './features/auth/authActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserFromStorage());
  }, [dispatch]);

  const currentUser = useSelector(state => state.auth.currentUser)

  return (
    <div className="App">
      <header className="App-header">
        <a class="title" href={`/`}>DivaDiaries</a>
        {currentUser !== 'null' ? <a class="title" href={`/login`} onClick={() => logout(currentUser)}>Logout</a> : <a class="title" href={`/login`}>Login</a>}
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

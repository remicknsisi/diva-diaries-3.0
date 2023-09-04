import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "./auth/authActions";
import { useDispatch } from "react-redux";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate()
    const dispatch = useDispatch();
  
    function handleSubmit(e) {
      e.preventDefault()
      const user = {
        username,
        password
      }

      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then(res => {
            if(res.ok){
                res.json().then((userData) => {
                    dispatch(login(userData))
                    setUsername('')
                    setPassword('')
                    setError('')
                    navigate('/')})
            } else {
                res.json().then((user) => setError(user.error.login))
            }
        })
    }
  
    return (
    <div className='form-container'>
      <form onSubmit={handleSubmit} className="form">
      <h1 className="form-header">Log In Below</h1>
      <p className='form-input'>Username: </p>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='form-input'
        />
        <br/>
        <br/>
        <p className='form-input'>Password:</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='form-input'
        />
        <br/><br/>
        <button className="button" type="submit">Login</button>
        <br/><br/>
        {Boolean(error) ? <p className="error-message">**{error}**</p> : null}
        <br/><br/><br/>
        <p className='form-prompt'>Don't have an account? <Link to={`/signup`}>Sign up</Link></p>
      </form>
    </div>
    );
  }

export default Login;
import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { addUser } from "./users/usersSlice";
import { login } from "./auth/authActions";
import { useDispatch } from "react-redux";

function Signup (){
    const [name, setName] = useState('')
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')
    const [errorsList, setErrorsList] = useState([])

    const dispatch = useDispatch();
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()

        fetch('/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                name,
                username,
                password,
                password_confirmation
            })
        })
        .then(res => {
            if(res.ok){
                res.json().then((newUser) => {
                    dispatch(addUser(newUser))
                    dispatch(login(newUser))
                    navigate('/')
                })
            } else {
                res.json().then((newUser) => {
                    setPassword('')
                    setPasswordConfirmation('')
                    setName('')
                    setUsername('')
                    const errorLis = newUser.errors.map(error => <li key={error}>{error}</li>)
                    setErrorsList(errorLis)
                })
            }
        })
    }

    return (
        <div className='login-container'>
            <form onSubmit={handleSubmit} className="form">
                <h1 className="signup-header">Sign Up Below</h1>
                <br/>
                <p className='login-input'>Name: </p>
                <input
                type="text"
                placeholder="E.g. Ru Paul"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='login-input'/>
                <br/><br/>
                <p className='login-input'>Username: </p>
                <input
                type="text"
                placeholder="E.g. rupaul"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='login-input'/>
                <br/><br/>
                <p className='login-input'>Password: </p>
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='login-input'/>
                <br/><br/>
                <p className='login-input'>Confirm Password: </p>
                <input
                type="password"
                value={password_confirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                className='login-input'/>
                <br/><br/>
                <button className="button" type="submit">Sign Up</button>
                <br/><br/>
                <p className="error-message">{errorsList}</p>
                <br/><br/><br/>
                <p className='signup-prompt'>Already have an account? <Link to={`/login`}>Login</Link></p>
            </form>
        </div>
    )
}

export default Signup;
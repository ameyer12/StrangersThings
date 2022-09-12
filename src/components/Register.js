import React, { createElement, useState } from "react";
import { registerUser } from '../api';
import { useHistory } from 'react-router-dom';
import FilledInput from '@mui/material/FilledInput';
import Button from '@mui/material/Button';
import "./Register.css";



const Register = ({ setToken, navigate }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        const results = await registerUser(username, password);
        if(results.success) {
            setToken(results.data.token)
            window.localStorage.setItem('token', results.data.token)
            navigate('/profile')
            
        } else {
            alert("User already exists. Please login instead.")
        }
    }
    return (
        <form className="register-form" onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
        }
        }>
            <h1 id="h1">Register</h1>
            <FilledInput
            type="text"
            placeholder="Enter Username"
            style={{height:"2.5rem", width:"25rem"}}
            onChange={(event) => setUsername(event.target.value)}
            />
            <FilledInput 
            type="password"
            placeholder="Enter Password"
            style={{height:"2.5rem", width:"25rem"}}
            onChange={(event) => setPassword(event.target.value)}
            />
            <Button 
            id="regiser-button"
            type="submit"
            variant="outlined"
            style={{height:"2.5rem", width:"25rem"}}
            >Submit</Button>
        </form>
    )
}

export default Register;
import React, { useState } from 'react'
import { loginUser } from '../api'
import FilledInput from '@mui/material/FilledInput';
import Button from '@mui/material/Button'
import './Login.css'
import swal from 'sweetalert';

const Login = ({ setToken, navigate }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
 
    const handleSubmit = async() => {
        const results = await loginUser(username, password);
        if(results.success) {
            setToken(results.data.token)
            window.localStorage.setItem('token', results.data.token)
            navigate('/profile')
        } else {
            swal("Invalid login credentials!", "Please try again or create an account.")
        }
    }


  return (
    <form className='login-form' onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
    }
    }>
        <h1>Login</h1>
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
        type="submit"
        variant="outlined"
        style={{height:"2.5rem", width:"25rem"}}
        >Submit</Button>
    </form>
)
}

export default Login
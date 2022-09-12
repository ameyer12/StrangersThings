import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Alert } from "@mui/material";


const NavigationBar = ( { logout }) => {
    return (
        <header>
            <nav className="nav-bar">
                <Link className="nav-links" to="/">Home</Link>
                <Link className="nav-links" to="/register">Register</Link>
                <Link className="nav-links" to="/posts">Posts</Link>
                <Link className="nav-links" to="/profile">Profile</Link>
                <Link className="nav-links" to="/login">Login</Link>
                <Link className="nav-links" to="/" onClick={() => logout()}>Logout</Link>
            </nav>
        </header>
    )
}

export default NavigationBar
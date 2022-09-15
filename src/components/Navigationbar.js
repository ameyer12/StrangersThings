import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "@mui/material";


const NavigationBar = ( { logout }) => {
    return (
        <header>
            <nav className="nav-bar">
                <Link className="title-link" to="/">STRANGER'S THINGS</Link>
                <Button 
                className="nav-links"
                variant="text"
                >
                    <Link className="nav-links" to="/">Home</Link>
                </Button>
                <Button 
                className="nav-links"
                variant="text"
                >
                    <Link className="nav-links" to="/register">Register</Link>
                </Button>
                <Button 
                className="nav-links"
                variant="text"
                >
                    <Link className="nav-links" to="/posts">Posts</Link>
                </Button>
                <Button 
                className="nav-links"
                variant="text"
                >
                    <Link className="nav-links" to="/profile">Profile</Link>
                </Button>
                <Button 
                className="nav-links"
                variant="text"
                >
                    <Link className="nav-links" to="/login">Login</Link>
                </Button>
                <Button 
                className="nav-links"
                variant="text"
                >
                    <Link className="nav-links" to="/" onClick={() => logout()}>Logout</Link>
                </Button>
            </nav>
        </header>
    )
}

export default NavigationBar
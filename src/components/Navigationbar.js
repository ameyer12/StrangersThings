import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "@mui/material";


const NavigationBar = ( { logout }) => {

    
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand title-link" to="/">STRANGER'S THINGS</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <Button 
                            className="nav-links"
                            variant="text"
                        >
                        <Link className="nav-links" to="/">Home</Link>
                        </Button>
                    </li>
                    <li class="nav-item">
                        <Button 
                            className="nav-links"
                            variant="text"
                        >
                        <Link className="nav-links" to="/posts">Posts</Link>
                        </Button>
                    </li>
                    <li class="nav-item">
                        <Button 
                            className="nav-links"
                            variant="text"
                        >
                        <Link className="nav-links" to="/profile">Profile</Link>
                        </Button>
                    </li>
                    <li class="nav-item">
                        <Button 
                            className="nav-links"
                            variant="text"
                        >
                        <Link className="nav-links" to="/login">Login</Link>
                        </Button>
                    </li>
                    <li class="nav-item">
                        <Button 
                            className="nav-links"
                            variant="text"
                        >
                        <Link className="nav-links" to="/register">Register</Link>
                        </Button>
                    </li>
                    </ul>
                </div>
            </nav>
            {/* <nav className="nav-bar">
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
            </nav> */}
        </header>
    )
}

export default NavigationBar
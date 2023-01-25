import React from "react";
import './home.css';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-body">
            <h1 className="home-h1">Welcome to Stranger's Things</h1>
            <p className="home-p">Our platform is a one-stop-shop for a wide range of auctions, items for sale, services, and everything in between.</p>
            <Button variant="text"><Link className="nav-links" to="/posts">Browse the Auction</Link></Button>
        </div>
    )
}

export default Home;
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {Route, BrowserRouter, Routes, useNavigate } from 'react-router-dom'
import "./App.css";
import {
    NavigationBar,
    Posts,
    Profile,
    Home,
    Register,
    Login,
    Createpost,
    SinglePost,
    EditPost,
} from "./components";
import {
    getPosts,
    getUserDetails,
} from './api';

const App = () => {
    const [posts, setPosts] = useState([]);
    const [token, setToken] = useState('');
    const [user, setUser] = useState({});

    const navigate = useNavigate();

    function logout() {
        window.localStorage.removeItem('token'); 
        setToken('');
        window.reload()
    }


    async function fetchPosts() {
        const results = await getPosts(token)
        setPosts(results.data.posts)
    }


    async function getMe() {
        const storedToken = window.localStorage.getItem('token');
        if(!token) {
            if(storedToken){
                setToken(storedToken);
            }
            return;
        }
        const results = await getUserDetails(token)
        if(results.success) {
            setUser(results.data);
        } else {
            console.log(results.error.message)
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [token])

    useEffect(() => {
        getMe()
    }, [token])


    return (
    <div>
        <NavigationBar logout={ logout }/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register 
            setToken={ setToken } 
            navigate={ navigate }/>} />
            <Route path="/posts" element={<Posts posts={ posts } fetchPosts={ fetchPosts } />} />
            <Route exact path="/posts/edit-post/:id" element={<EditPost token={ token } fetchPosts={ fetchPosts } posts={ posts } navigate={ navigate }/>} />
            <Route path="/posts/:id" element={<SinglePost posts={ posts }
            token={ token } navigate={ navigate } getMe={ getMe } />} />
            <Route path="/profile" element={<Profile user={ user } getMe={ getMe } navigate={ navigate } />} />
            <Route path="/login" element={<Login  setToken={ setToken } 
            navigate={ navigate }/>} />
            <Route path="/createpost" element={<Createpost  fetchPosts={ fetchPosts } navigate={ navigate } />} />
        </Routes>
    </div>
    )
}

const container = document.querySelector("#container")
const root = ReactDOM.createRoot(container)
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

/*
Login
Registration
Posts
Profile
NavigationBar
AddPost

*/
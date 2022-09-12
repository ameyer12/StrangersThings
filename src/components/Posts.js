import React, { Fragment, useState } from "react";
import { Paper, Button } from "@mui/material";
import { Link, Router } from "react-router-dom";
import Createpost from "./CreatePost";
import SinglePost from "./SinglePost";
import { deletePost } from '../api';
import { useNavigate } from 'react-router-dom';
import "./posts.css"


const postMatches = (post, searchTerm, setPosts) => {
    const searchTermLower = searchTerm.toLowerCase();
    const {
      description,
      location,
      title,
      author: { username },
    } = post;
  
    const toMatch = [description, location, title, username];
  
    for (let i = 0; i < toMatch.length; i++) {
      const field = toMatch[i];
      if (field.toLowerCase().includes(searchTermLower)) {
        return true;
      }
    }
  };

const Post = ({ posts, token, fetchPosts }) => {

    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    const postsToDisplay = posts.filter((post) => postMatches(post, searchTerm));

    return (
        <div>
          <div className="posts-header">
            <Button
                className="create-post-button"
                variant="outlined"
            >
            <Link className="create-post-link" to="/createpost" element={<Createpost />}>Create Post</Link>
            </Button>
            <input 
              type="text" 
              className="search-bar"
              placeholder="Search Posts"
              value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value)}}
            ></input>
            <Button
                variant="outlined"
            >Search</Button>
          </div>
        {
          postsToDisplay.map((post) => {
              const { description, location, price, title, _id, isAuthor } = post
              return(
              <Paper
                  style={{margin:"1rem"}}
                  elevation={5}
                  key={_id}
              >
              <Fragment>
                <h3>{title}</h3>
                <p>Description: {description}</p>
                <p>Price: {price}</p>
                <p>Location: {location}</p>
                {
                            isAuthor ? (
                                <Button
                                variant="outlined"
                                >
                                    <Link 
                                    className="edit-link"
                                    to={`/posts/edit-post/${_id}`}
                                    >Edit</Link>
                                </Button>
                            ) : (
                                <Button
                                variant="outlined"
                                >
                                <Link className="view-link" to={`/posts/${_id}`}>View</Link>
                                </Button>
                            )
                }
                         {
                            isAuthor ? (
                                <Button
                                    color="error"
                                    variant="outlined"
                                    onClick={() => {
                                        deletePost(_id, token)
                                        fetchPosts()
                                    }}
                                >Delete</Button>
                            ) : (
                                <p></p>
                            )
                        }
              </Fragment>
              </Paper>)}
          )
      }
      </div>
    )
}

export default Post


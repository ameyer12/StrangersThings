import React, { Fragment, useState, useEffect } from "react";
import { Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Createpost from "./CreatePost";
import { deletePost } from '../api';
import "./posts.css"
import { padding } from "@mui/system";
      
const Post = ({ posts, token, fetchPosts }) => {

  const [searchTerm, setSearchTerm] = useState("");

  function postMatches(post, string) {
            const { title, description } = post;
            if (
              title.toLowerCase().includes(string.toLowerCase()) ||
              description.toLowerCase().includes(string.toLowerCase())
            ) {
              return post;
            }
          }
        const filteredPosts = posts.filter((post) => postMatches(post, searchTerm));
        
        const postsToDisplay = posts.filter((post) => postMatches(post, searchTerm));

    useEffect(() => {
      fetchPosts()
    }, [posts]) 


    return (
        <div>
          <div className="posts-header">
            <Button
                className="create-post-button"
                variant="outlined"
            >
            <Link className="create-post-link" to="/createpost" element={<Createpost />}>Create Post</Link>
            </Button>
            <div>
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
          </div>
        {
          postsToDisplay.map((post) => {
              const { description, location, price, title, _id, isAuthor } = post
              return(
              <Paper
                  style={{
                    marginBottom:"1rem",
                    marginLeft:"5rem",
                    marginRight:"5rem",
                    paddingBottom:"0.01rem",
                    borderRadius:"10px"
            
                }}
                  elevation={5}
                  key={_id}
              >
              <Fragment>
                <h3 className="post-title">{title}</h3>
                <p className="post-description">Description: {description}</p>
                <p className="post-price">Price: {price}</p>
                <p className="post-location">Location: {location}</p>
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
                                className="view-button"
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


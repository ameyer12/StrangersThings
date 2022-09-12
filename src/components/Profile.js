import React, {useState} from "react";
import { Paper } from "@mui/material";
import './profile.css'

const Profile = ( { user } ) => {
    const { username } = user;
    const messages = user.messages;
    const userID = user._id;

    return (
        <div>
            <h1 className="welcome-message">Welcome {username}</h1>
            <h2>Received Messages:</h2>
            {
            messages && messages.map(message => {
              const fromUserID = message.fromUser._id;
              const {username} = message.fromUser;
              const {title} = message.post;
              
              if (userID !== fromUserID) {
                return (
                  <Paper
                  style={{margin:"0.5rem"}}
                  elevation= {3}
                  >
                  <div key={message._id}>
                    <p>From User: {username} </p>
                    <p>Message: {message.content}</p>
                    <p>Post Reference: {title}</p>
                  </div>
                  </Paper>
                )
              }
            })    
          }
          <h2>Sent Messages:</h2>
          {
            messages && messages.map(message => {
              const fromUserID = message.fromUser._id;
              
              if (userID === fromUserID) {
                return (
                  <Paper
                  style={{margin:"0.5rem"}}
                  elevation= {3}
                  >
                  <div key={message._id}>{message.content}</div>
                  </Paper>
                )
              }
            })    
          }
        </div>
        )
}

export default Profile


import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./createpost.css";
import { createPost} from '../api';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';
import swal from 'sweetalert';


 
const Createpost = ({ navigate, fetchPosts }) => {

const token = window.localStorage.token

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [willDeliver, setWillDeliver] = useState(false);

  const handleCreate = async() => {
    const results = await createPost(token, title, description, price, location, willDeliver);
      if(results.success){
        fetchPosts();
        navigate('/posts')
      } else {
        swal("Please register or login to create a post!")
      }
  }

  return (
    <Box  
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    onSubmit={(event) => {
        event.preventDefault();
        handleCreate();
    }}
    >
    <div className='create-post-form'>
        <h1>Create Post</h1>
        <TextField
            style={{width:"30rem"}}
            required
            label="Title"
            onChange={(event) => setTitle(event.target.value)}
        />
        <TextField
            style={{width:"30rem"}}
            required
            label="Description"
            onChange={(event) => setDescription(event.target.value)}
        />
        <TextField
            style={{width:"30rem"}}
            required
            label="Price"
            onChange={(event) => setPrice(event.target.value)}
        />
        <TextField
            style={{width:"30rem"}}
            required
            label="Location"
            onChange={(event) => setLocation(event.target.value)}
        />
        <FormControlLabel
        label="Will you deliver?"
        control={<Checkbox onClick={(event) => {
          if(willDeliver === true) {
            setWillDeliver(false)
          } else {
            setWillDeliver(true)
            }
          }
        }
        />}
      />
        <Button
        type="submit"
        variant="outlined"
        style={{width:"30rem"}}
        >Create</Button>
    </div>
    </Box>
  )
}

export default Createpost;


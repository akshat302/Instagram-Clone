import React, { Component, useState, useEffect } from 'react';
import './App.css';
import Header from './Components/HeaderComponent';
import Post from './Components/PostComponent';
import db from './firebase';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);

  // useEffect runs a piece of code based on a specific condition

  useEffect(() => {
    //this is where the code runs
    db.collection('posts').onSnapshot(snapshot => {
      //every time a new post is added, this code fires.
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    })
  },[]);
   

  return (
    <div className="App">

      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >

        <div style={modalStyle} className={classes.paper}>
          <h2>I am a modal.</h2>
        </div>
      </Modal>
      
      <Header />
      <h1>This is an Instagram Clone </h1> 

      <Button onClick={() => setOpen(true)}>Sign Up</Button>
      
      {
      posts.map(({id, post}) => {
        return(
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        )
        })
      }

    </div>
  );
}

export default App;

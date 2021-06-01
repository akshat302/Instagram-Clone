import react, { Component, useState, useEffect } from 'react';
import './App.css';
import Header from './Components/HeaderComponent';
import Post from './Components/PostComponent';
import db from './firebase';

function App() {

  const [posts, setPosts] = useState([]);
    // {
    //   username:"akshatguptamac", 
    //   caption:"Yayyay!! It Works",
    //   imageUrl:"https://wallpaperaccess.com/full/48071.jpg"
    // },
    // {
    //   username:"avr8", 
    //   caption:"Nature is beautiful",
    //   imageUrl:"https://media.cntraveler.com/photos/60596b398f4452dac88c59f8/3:2/w_3999,h_2666,c_limit/MtFuji-GettyImages-959111140.jpg"
    // },
    // {
    //   username:"ravicii", 
    //   caption:"Abstract Art",
    //   imageUrl:"https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg"
    // }



  // useEffect runs a piece of code based on a specific condition

  useEffect(() => {
    //this is where the code runs
    db.collection('posts').onSnapshot(snapshot => {
      //every time a new post is added, this code fires.
      setPosts(snapshot.docs.map(doc => doc.data())); 
    })
  },[]);
   

  return (
    <div className="App">  
        <Header />
        <h1>This is an Instagram Clone </h1> 

        {
        posts.map((post) => {
          return(
            <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
          )
          })
        }

    </div>
  );
}

export default App;

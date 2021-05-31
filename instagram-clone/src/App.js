import { Component } from 'react';
import './App.css';
import Header from './Components/HeaderComponent';
import Post from './Components/PostComponent';

function App() {
  return (
    <div className="App">  
        <Header />
        <h1>This is an Instagram Clone </h1> 

        <Post />
        <Post />
        <Post />
        <Post />
    </div>
  );
}

export default App;

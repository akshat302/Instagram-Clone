import react, { Component } from 'react';
import './App.css';
import Header from './Components/HeaderComponent';
import Post from './Components/PostComponent';

function App() {
  return (
    <div className="App">  
        <Header />
        <h1>This is an Instagram Clone </h1> 

        <Post username="akshatguptamac" caption="Yayyay!! It Works" imageUrl="https://wallpaperaccess.com/full/48071.jpg"/>
        <Post username="avr8" caption="Nature is beautiful" imageUrl="https://media.cntraveler.com/photos/60596b398f4452dac88c59f8/3:2/w_3999,h_2666,c_limit/MtFuji-GettyImages-959111140.jpg"/>
        <Post username="ravicii" caption="Abstract Art" imageUrl="https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg"/>
    </div>
  );
}

export default App;

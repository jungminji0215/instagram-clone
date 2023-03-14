import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db } from './firebase';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()));
    })
  }, []);
  

  return (
    <div className="App">
    

      <div className="app__header">
        <img
            className="app__headerImage"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt=""
          />
      </div>
      <h1>Hello! this is instagram</h1>
      
      {
        posts.map(posts => (
          <Post username={posts.username} caption={posts.caption} imageUrl={posts.imageUrl}/>
        ))
      }
         

    </div>
  );
}

export default App;

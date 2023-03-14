import logo from './logo.svg';
import './App.css';
import Post from './Post';
import { useState, useEffect } from 'react';
import { db } from './firebase';

function App() {
  const [posts, setPosts] = useState([
    // {
    //   username: "minji",
    //   caption: "Wow!!!",
    //   imageUrl: "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
    // },
    // {
    //   username: "minji",
    //   caption: "dsfdsfsdfdsf!!!",
    //   imageUrl: "https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
    // }
  ]);

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

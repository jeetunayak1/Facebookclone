import React, { useEffect, useState } from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';
import db from './firebase';

function Feed() {

    const [posts,setPosts]=useState([]);
    console.log(posts);
    useEffect(() => {
      
            db.collection('Posts').orderBy('timestamp', 'desc').onSnapshot(snapshot=>{
                setPosts(snapshot.docs.map(doc=>
                    ({id: doc.id, data: doc.data()})

                ))
                
            })
        
    }, [])

    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender />
            {posts.map(post=> <Post
                key={post.id}
                profilePic={post.data.profilePic}
                messages={post.data.message}
                timestamp={new Date().toUTCString()}
                username={post.data.username}
                image={post.data.image}
            />)}
           
        </div>
    )
}

export default Feed

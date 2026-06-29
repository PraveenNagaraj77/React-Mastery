import React, { useEffect, useState } from 'react'

const FetchPosts = () => {
    const[posts,setPosts]=useState([]);

    useEffect(()=>{
        async function fetchPosts() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setPosts(data);
            console.log(data);
        }
        fetchPosts();
    },[])

  return (
    <div>
        <h1>Posts</h1>
        <br />
        {
            posts.map(post=>(
                <ul key={post.id}>
                    <li>{post.userId}</li>
                    <li>{post.title}</li>
                    <br />
                    <hr />
                </ul>
            ))
        }
    </div>
  )
}

export default FetchPosts
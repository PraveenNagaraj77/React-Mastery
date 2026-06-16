import React, { useState } from 'react'

const LikeButton = () => {
    const [likes,setLikes] = useState(0);
  return (
    <div>
        <h2>Likes: {likes}</h2>
        <button onClick={()=>setLikes(prev=>prev+1)}>
            ❤️ Like
        </button>
    </div>
  )
}

export default LikeButton
import React, { useEffect } from 'react'

const WelcomeMessage = () => {
    useEffect(()=>{
        console.log("Component Loaded Successfully");
    },[])
  return (
    <div>
        <h1>Welcome to React Mastery</h1>
    </div>
  )
}

export default WelcomeMessage
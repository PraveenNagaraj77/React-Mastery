import React, { useEffect, useState } from 'react'

const AutoCounter = () => {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        const timer = setInterval(()=>{
            setCount(prev=>prev+1);
            console.log("Component Mounted");
        },1000)

        return ()=>{
            clearInterval(timer);
            console.log("Timer Stopped");
        }
    },[]);
  return (
    <div>
        <h1>AutoCounter</h1>
        <h2>{count}</h2>
    </div>
  )
}

export default AutoCounter
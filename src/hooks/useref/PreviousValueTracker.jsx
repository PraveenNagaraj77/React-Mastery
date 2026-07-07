import React, { useEffect, useRef, useState } from 'react'

const PreviousValueTracker = () => {
    const [count,setCount] = useState(0);
    const previousCount = useRef(null);

    useEffect(()=>{
        previousCount.current = count;
    },[count])
  return (
    <div>
        <h1>PreviousValueTracker</h1>
        <h2>Current : {count}</h2>
        <h2>Previous : {previousCount.current}</h2>

        <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
    </div>
  )
}

export default PreviousValueTracker
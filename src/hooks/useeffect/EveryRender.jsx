import React, { useEffect, useState } from 'react'

const EveryRender = () => {
    const [count , setCount] = useState(0);
    useEffect(()=>{
        console.log("Rendered");
    })
  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default EveryRender
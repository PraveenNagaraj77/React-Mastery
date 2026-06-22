import React, { useState } from 'react'

const Counter2 = () => {
    function increment(){
        setCount(prev=>prev+1);
    }
    const [count,setCount] = useState(0);
  return (
    <div>
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter2
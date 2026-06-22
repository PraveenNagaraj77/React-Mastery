import React, { useRef, useState } from 'react'

const RenderCounter = () => {
    const [count,setCount] = useState("");
    const renderCount = useRef(0);
    renderCount.current++;
  return (
    <div>
        <h2>Count:{count}</h2>
        <h2>
            Render Count : {renderCount.current} 
        </h2>

        <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
    </div>
  )
}

export default RenderCounter
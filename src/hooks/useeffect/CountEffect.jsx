import React, { useEffect, useState } from 'react'

const CountEffect = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log(`Count changed to ${count}`);
    },[count])
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={()=>setCount(count+1)}>
            Increment
        </button>
    </div>
  )
}

export default CountEffect
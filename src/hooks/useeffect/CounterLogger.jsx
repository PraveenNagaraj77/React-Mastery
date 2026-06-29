import React, { useEffect, useState } from 'react'

const CounterLogger = () => {
    const [count,setCount] = useState(0);

    useEffect(()=>{
        console.log(`Current Count ${count}`);
    },[count])
  return (
    <div>
        <h1>Counter</h1>
        <h2>Count : {count}</h2>
        <button onClick={()=>setCount(count+1)}>
            Increment
        </button>
    </div>
  )
}

export default CounterLogger
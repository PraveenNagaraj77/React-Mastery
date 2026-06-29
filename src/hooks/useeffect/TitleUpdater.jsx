import React, { useEffect, useState } from 'react'

const TitleUpdater = () => {
    const [count,setCount] = useState(0);

    useEffect(()=>{
        document.title = `Count: ${count}`;
    },[count]);
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={()=>setCount(count+1)} >Increment</button>
    </div>
  )
}

export default TitleUpdater
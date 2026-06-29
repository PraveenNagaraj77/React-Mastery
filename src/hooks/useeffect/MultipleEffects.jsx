import React, { useEffect, useState } from 'react'

const MultipleEffects = () => {
    const [count,setCount] = useState(0);
    const [width,setWidth] = useState(window.innerWidth);

    useEffect(()=>{
        console.log("Component Mounted");
    },[]);

    useEffect(()=>{
        document.title = `Count:${count}`;
    },[count]);

    useEffect(()=>{
        function handleResize(){
            setWidth(window.innerWidth);
        }

        window.addEventListener("click",handleResize);

        return ()=>{
            window.removeEventListener("click",handleResize);
        };
    },[]);

  return (
    <div>
        <h1>Multiple useEffects</h1>
        <h2>Count:{count}</h2>
        
        <button onClick={()=>setCount(prev=>prev+1)}>
            Increment
        </button>
        <hr />
        <h2>Width: {width}</h2>
    </div>
  )
}

export default MultipleEffects
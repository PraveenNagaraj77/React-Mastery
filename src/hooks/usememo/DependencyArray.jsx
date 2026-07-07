import React, { useMemo, useState } from 'react'

const DependencyArray = () => {
    const [count,setCount] = useState(0);
    const[theme,setTheme] = useState(false);

    function squareNum(num){
        console.log("Calculating square...");
        return num*num;
    }

    const square = useMemo(()=>{
        return squareNum(count);
    },[count]);

  return (
    <div>
        <h1>DependencyArray</h1>
        <h2>Count : {count}</h2>
        <h2>Square : {square}</h2>

        <button onClick={()=>setCount(prev=>prev+1)} >Increment Count</button>
        <br /><br />
        <button onClick={()=>setTheme(!theme)}>Toggle theme</button>
        <h3>Theme : {theme?"Dark":"Light"}</h3>
    </div>

  )
}

export default DependencyArray
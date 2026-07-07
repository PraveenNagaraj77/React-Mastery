import React, { useState } from 'react'

const UsememoIntro = () => {
    console.log("Component Rendered");
    const[count,setCount] = useState(0);
    const[name,setName] = useState("");



    function expensiveCalculation(num){
         console.log("🔥 Expensive Calculation Started");
        console.log("Calculating..");
        let result =0;
        for(let i=0;i<100000000;i++){
            result+=num;
        }
         console.log("✅ Expensive Calculation Finished");
         console.log("📦 Returning JSX");
        return result;
    }

    const total = expensiveCalculation(count);

  return (
    <div>
        <h1>UseMemo</h1>
        <h2>Count : {count}</h2>
        <button onClick={()=>setCount(prev=>prev+1)}>
            Increment Count
        </button>
        <br />
        <br />
        <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)} />

        <h2>Name: {name}</h2>
        <h2>Total : {total}</h2>

    </div>
  )
}

export default UsememoIntro
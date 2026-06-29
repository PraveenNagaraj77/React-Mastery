import React, { useEffect } from 'react'

const RunOnce = () => {

    useEffect(()=>{
         console.log("Component Mounted");
    },[]);

   
  return (
    <div>
        <h1>Run Once Example</h1>
    </div>
  )
}

export default RunOnce
import React, { useEffect, useState } from 'react'

const CleanupDemo = () => {
    const [show,setShow] = useState(true);
  return (
    <div>
        <button onClick={()=>setShow(!show)}>
            Toggle Component
        </button>
        <hr />
        {show && <Message/> }
    </div>
  )
}

function Message(){
    useEffect(()=>{
        console.log("Component Mounted");
        return ()=>{
            console.log("Component UnMounted");
        }
    },[])
    return <h2>Hello react</h2>
}

export default CleanupDemo
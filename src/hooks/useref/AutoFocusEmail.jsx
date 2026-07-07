import React, { useEffect, useRef } from 'react'

const AutoFocusEmail = () => {
    const inputRef = useRef(0);
    
    useEffect(()=>{
        inputRef.current.focus();
    },[])

  return (
    <div>
        <h1>AutoFocusEmail</h1>
        <h2>Email : </h2>
        <br />
        <input type="email" ref={inputRef} placeholder='Enter Email'/>
    </div>
  )
}

export default AutoFocusEmail
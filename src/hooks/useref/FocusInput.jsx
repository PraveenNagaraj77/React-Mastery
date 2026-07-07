import React, { useEffect, useRef } from 'react'

const FocusInput = () => {
    const inputRef = useRef();
    // function handleFocus(){
    //   inputRef.current.focus();
    // }
    useEffect(()=>{
      inputRef.current.focus();
    },[])
  return (
    <div>
        <h1>UseRef Demo</h1>
        <h2>Autofocus</h2>
        <input type="text" ref={inputRef}  />
        <br /><br />
        {/* <button onClick={handleFocus}>Focus Input</button> */}
    </div>
  )
}

export default FocusInput
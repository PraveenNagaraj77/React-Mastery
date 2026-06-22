import React, { useRef } from 'react'

const FocusInput = () => {
    const inputRef = useRef();

    function focusInput(){
        inputRef.current.focus();
    }
  return (
    <div>
        <h1>UseRef Demo</h1>
        <input type="text" ref={inputRef}  />
        <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default FocusInput
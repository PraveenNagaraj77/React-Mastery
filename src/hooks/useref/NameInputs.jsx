import React, { useRef } from 'react'

const NameInputs = () => {
    const inputRef = useRef(null);
    function handleRef(){
        inputRef.current.focus();
    }
  return (
    <div>
        <h1>Name Input</h1>

        <input type="text" ref={inputRef} />
        <button onClick={handleRef} >Click to Focus</button>
    </div>
  )
}

export default NameInputs
import React, { useRef, useState } from 'react'

const ClickHistory = () => {
    const clickRef = useRef(0);
    const [clicked,setClicked] = useState("");
    function handleClick(){
        setClicked(clickRef.current)
        console.log(clickRef.current);
    }
  return (
    <div>
        <h1>Click History</h1>
        <br />
        <h2>Click the Buttons</h2>
        <button onClick={handleClick} ref={clickRef}>Save</button>
        <button onClick={handleClick} ref={clickRef}>Delete</button>
        <button onClick={handleClick} ref={clickRef}>Update</button>
        <br />
        <hr />
        <h2>Last Action : {clicked}</h2>
    </div>
  )
}

export default ClickHistory
import React, { useState } from 'react'

const InputDemo = () => {

    const[name,setName] = useState("")

    function handleClick(event){
        console.log(event);
    }

  return (
    <div>
        <h1>Input Demo</h1>
        <input type="text" placeholder='Enter Name'
        onChange={(event)=>setName(event.target.value)}
        />
        <h2>Name:{name}</h2>
        <button onClick={handleClick} >Click Me</button>
    </div>
  )
}

export default InputDemo
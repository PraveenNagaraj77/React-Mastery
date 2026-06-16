import React, { useState } from 'react'

const TextChange = () => {

    const [role,setRole] = useState("Java Developer")

    const name ="Praveen";


    function promote(){
        setRole("Senior Java Developer");
    }

  return (
    <div>
        <h1>Employee Promotion</h1>
        <h2>Name:{name}</h2>
        <h2>Role:{role}</h2>
        <button onClick={promote} disabled={role==="Senior Java Developer"}
        >Promote</button>
    </div>
  )
}

export default TextChange
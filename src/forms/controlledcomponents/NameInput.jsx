import React, { useState } from 'react'

const NameInput = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
  return (
    <div>
        <h1>Controlled Components</h1>
        <input 
        type="text"
        value={name}
        onChange={(e)=>setName(e.target.value)} />
        <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} />
        <h2>Name :  {name}</h2>
        <h2>Email : {email}</h2>
    </div>
  )
}

export default NameInput
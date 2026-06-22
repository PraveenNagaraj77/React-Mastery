import React, { useState } from 'react'

const FormSubmission = () => {
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");

    function handleSubmit(){
        event.preventDefault();
        alert(`Welcome ${userName}`)
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='username' value={userName} onChange={(e)=>setUserName(e.target.value)} />
            <input type="password" placeholder='password' value={setPassword} onChange={(e)=>setPassword(e.target.value)} />

            <button type='submit'>Login</button>

        </form>
        
    </div>
  )
}

export default FormSubmission
import React, { useState } from 'react'

const PasswordToggle = () => {

    const [showPassword,setShowPassword] = useState(false);


  return (
    <div>
        <input type= {showPassword?"text":"password"} placeholder='Enter Password' />

        <button onClick={()=>setShowPassword(prev=>!prev)}>{showPassword?"Hide":"Show"}</button>
    </div>
  )
}

export default PasswordToggle
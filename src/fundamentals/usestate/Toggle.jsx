import React, { useState } from 'react'

const Toggle = () => {
    const [isDark,setIsDark] = useState(false)

    function toggleButton(){
        setIsDark(prev=>!prev);
    }

  return (
    <div>
        <h1>Toggle Functionality</h1>
        <h2>{isDark?"Dark Mode":"Light Mode"}</h2>
        <button onClick={toggleButton}>Toggle</button>
    </div>
  )
}

export default Toggle
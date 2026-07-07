import React from 'react'
import useToggle from './useToggle'

const ThemeToggle = () => {
    const { value:darMode,toggle:toggleTheme } = useToggle();
  return (
    <div>
        <h1>Theme Toggle</h1>
        <h2>Theme:{darMode?"Dark":"Light"} 
        </h2>
        <button onClick={toggleTheme}>Toggle</button>
    </div>
  )
}

export default ThemeToggle
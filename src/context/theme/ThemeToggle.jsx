import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

const ThemeToggle = () => {
    const { isDark ,toggleTheme } = useContext(ThemeContext)
  return (
    <div>
        <h1>ThemeToggle</h1>
        <h2>Theme : {isDark?"Dark":"Light"}</h2>
        <button onClick={toggleTheme}>Toggle</button>
    </div>

  )
}

export default ThemeToggle
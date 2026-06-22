import React from 'react'

const ClickDemo = () => {

    function handleClick(){
        alert("Button Clicked");
    }
  return (
    <div>
        <h1>Event Handling</h1>
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default ClickDemo
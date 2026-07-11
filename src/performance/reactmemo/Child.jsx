import React, { memo } from 'react'

const Child = () => {
   console.log("Child Rendered");
  return (
    <div>
       <h2>I am Child Component</h2>
    </div>
  )
}

export default memo(Child) ;
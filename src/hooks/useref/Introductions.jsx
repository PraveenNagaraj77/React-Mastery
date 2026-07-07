import React, { useRef } from 'react'

const Introductions = () => {
    const countRef = useRef(0);

    function increaseRef(){
      countRef.current++;
      console.log(countRef.current);
    }

  return (
    <div>
        <h1>UseRef Concepts</h1>
        <h2>Ref Value : {countRef.current}</h2>
        <button onClick={increaseRef}>Increase Ref</button>


    </div>
  )
}

export default Introductions


import React, { useRef } from 'react'

const ClickCounter = () => {
    const ref = useRef(0);

    function handleRef(){
        ref.current++;
        console.log(ref.current);
    }

  return (
    <div>
        <h1>ClickCounter</h1>
        <h2>Ref Value : {ref.current}</h2>
        <button onClick={handleRef}>Increase Ref </button>

    </div>
  )
}

export default ClickCounter
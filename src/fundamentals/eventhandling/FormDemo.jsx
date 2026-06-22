import React, { useState } from 'react'

const FormDemo = () => {
    const[name,setName] = useState("");
    function handleSubmit(event){
        event.preventDefault();
        console.log(name);
    }

    function showMessage(name){
        alert(`Welcome ${name}`)
    }

  return (
    <div>
        <h1>FormDemo</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  />
            <button type='submit' onClick={()=>showMessage(name)}>Submit</button>
        </form>
    </div>
  )
}

export default FormDemo
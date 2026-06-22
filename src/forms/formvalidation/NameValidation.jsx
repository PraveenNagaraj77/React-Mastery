import React, { useState } from 'react'

const NameValidation = () => {
    const [name,setName] = useState("");
    const [error,setError] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        if(name.trim()===""){
            setError("Name is Required");
            return;
        }
        setError("");
        alert(`Welcome ${name}`)

    }

  return (
    <div>
        <h1>Name Validation</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />

            <button type='submit'>
                Submit
            </button>
        </form>
        <p>{error}</p>
    </div>
  )
}

export default NameValidation
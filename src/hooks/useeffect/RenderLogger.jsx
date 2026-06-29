import React, { useEffect, useState } from 'react'

const RenderLogger = () => {
    const [name,setName] = useState("");

    useEffect(()=>{
        console.log("Componenr Rendered");
    })

  return (
    <div>
        <h1>Render Logger</h1>
        <input type="text" value={name} onChange={(event)=>{
            setName(event.target.value)
        }}/>
    </div>
  )
}

export default RenderLogger
import React, { useEffect, useState } from 'react'

const WindowWidth = () => {
    const [width,setWidth] = useState(window.innerWidth);
    useEffect(()=>{
        function handleResize(){
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize",handleResize);


        return ()=>{
            window.removeEventListener("resize",handleResize);
            console.log("Event Listener Removed");
        }

    },[])
  return (
    <div>
        <h1>Window Width</h1>
        <h2>{width}px</h2>
    </div>

  )
}

export default WindowWidth
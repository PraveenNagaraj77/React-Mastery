import React, { useRef, useState } from 'react'

const UsersProfiles = () => {
    const [name,setName] = useState(null);
    const lastLoginRef = useRef(0);
    function handleClick(){
        lastLoginRef.current = new Date();
        console.log(lastLoginRef.current.toLocaleString());
        setName("Praveen");
    }
  return (
    <div>
        <h2>UserName : {name}</h2>
        <button onClick={handleClick}>Last Login</button>
    </div>
  )
}

export default UsersProfiles
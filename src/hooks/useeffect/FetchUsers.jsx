import React, { useEffect, useState } from 'react'

const FetchUsers = () => {
    const [users,setUsers] = useState([]);

    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(response=>response.json())
    //     .then(data=>{
    //         setUsers(data);
    //     });
    // },[])

    useEffect(()=>{
        async function getUsers() {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            console.log(data);
            setUsers(data);
        }
        getUsers();
    },[])

  return (
    <div>
        <h1>Users</h1>
        {
            users.map(user=>(
                <ul key={user.id}>
                    <li>{user.name}</li>
                    <li>{user.email}</li>
                    <li>{user.website}</li>
                    <br />
                    <hr />
                </ul>
            ))
        }
    </div>
  )
}

export default FetchUsers
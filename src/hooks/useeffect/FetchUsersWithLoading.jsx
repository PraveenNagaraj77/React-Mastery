import React, { useEffect, useState } from 'react'

const FetchUsersWithLoading = () => {
        const [users,setUsers] = useState([]);
        const [loading,setLoading] = useState(true);
        const [error,setError] = useState("");

        useEffect(()=>{
            async function fetchUsers() {
                try {
                    const response = await fetch("https://jsonplaceholder.typicode.com/users");
                    if (!response.ok) {
                        throw new Error("Failed to Fetch Users");
                    }

                    const data = await response.json();
                    setUsers(data);
                    console.log(data);
                } catch (err) {
                    setError(err.message);
                }finally{
                    setLoading(false);
                }
            }
            fetchUsers();
        },[]);
        if(loading){
            return <h2>Loading...</h2>
        }

        if(error){
            return <h2>Error : {error}</h2>
        }
  return (
    <div>
        <h1>Users</h1>
        {
            users.map(user=>(
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    <hr />
                </div>
            ))
        }
    </div>
  )
}

export default FetchUsersWithLoading
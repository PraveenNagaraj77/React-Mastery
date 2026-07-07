import React from "react";
import useFetch from "./useFetch";

const Users = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h1>Users</h1>
      {data.map((data) => (
        <div key={data.id}>
          <p>{data.name}</p>
          <p>{data.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;

import React, { useEffect, useState } from "react";

const UserDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const totalUsers = users.length;

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        if (!response.ok) {
          throw new Error("Failed to Fetch Users");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err?.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  useEffect(() => {
    document.title = `Users : ${totalUsers}`;
  }, [totalUsers]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h1>User Dashboard</h1>

      <h2>Users</h2>
      <br />
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <br />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default UserDashboard;

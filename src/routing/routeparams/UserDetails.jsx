import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();

  const users = [
    { id: 1, name: "Praveen" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Kiran" },
  ];

  const user = users.find((user) => user.id === Number(id));
  if (!user) {
    return <h2>User Not Found</h2>;
  }
  return (
    <div>
      <h1>User Details</h1>
      <h2>Name : {user.name}</h2>
      <h2>User Id : {user.id}</h2>
    </div>
  );
};

export default UserDetails;

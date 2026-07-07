import React, { useEffect, useState } from "react";
import useFetchUsers from "./useFetchUsers";

const Profile = () => {
 
    const {users,loading,error}  = useFetchUsers(); 
  return (
    <div>
      <h1>Profile</h1>
      <h2>Users</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
        </div>
      ))}
      <h2>{error}</h2>
    </div>
  );
};

export default Profile;

import React, { useContext } from "react";
import AuthContext from "./AuthContext";

const Login = () => {
  const { user, isLoggedIn, login, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>{isLoggedIn ? "Logged In" : "Logged Out"}</h2>

      {user && (
        <>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </>
      )}

      <button onClick={isLoggedIn ? logout : login}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Login;
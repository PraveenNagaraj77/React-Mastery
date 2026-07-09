import React, { useContext } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import AuthContext from '../../context/auth/AuthContext'

const Dashboard = () => {
  const {logout,user} = useContext(AuthContext);

  const navigate = useNavigate();

  function handleLogout(){
    logout();
    navigate("/login")
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <h3>Welcome {user.name}</h3>
      <button onClick={handleLogout}>logout</button>
      <nav>
        <NavLink to={"profile"}>Profile</NavLink>
        <NavLink to={"settings"}>Settings</NavLink>
      </nav>
      <hr />
      <Outlet/>
    </div>
  )
}

export default Dashboard
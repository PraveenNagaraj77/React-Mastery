import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <h1>Student Portal</h1>
      <Navbar/>
      <Outlet/>
      <hr />
      <h4>@React Router Demo</h4>
    </div>
  )
}

export default Layout
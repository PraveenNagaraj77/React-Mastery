import React, { useState } from 'react'

const LoginStatus = () => {
    const[isLogin,setIsLogin] = useState(false);

    function LoginLogout(){
        setIsLogin(prev=>!prev)
    }

  return (
    <div>
        <h1>Login Status</h1>
        <h2>Status:{isLogin?"LoggedIn":"LoggedOut"}</h2>
        <button onClick={LoginLogout}>{isLogin?"LogOut":"Login"}</button>
    </div>
  )
}

export default LoginStatus
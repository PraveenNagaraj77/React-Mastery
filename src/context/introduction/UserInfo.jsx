import React, { useContext } from 'react'
import UserContext from './UserContext';

const UserInfo = () => {
    const userName  = useContext(UserContext);
  return (
    <div>
        <h2>UserName : {userName}</h2>
    </div>
  )
}

export default UserInfo
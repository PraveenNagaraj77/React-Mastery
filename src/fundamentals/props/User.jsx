import React from 'react'

const User = (props) => {
  return (
    <div>
        <h2>Name:{props.name}</h2>
        <h3>Role: {props.role}</h3>
    </div>
  )
}

export default User
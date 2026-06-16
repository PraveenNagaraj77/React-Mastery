import React from 'react'

const Employee = ({name,designation,experience}) => {
  return (
    <div>
        <h1>Employee Details</h1>
        <h3>Employee Name: {name}</h3>
        <h3>Designation:{designation}</h3>
        <h3>Experience:{experience}</h3>
    </div>
  )
}

export default Employee
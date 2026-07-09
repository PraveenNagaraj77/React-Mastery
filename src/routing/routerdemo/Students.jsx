import React from "react";
import { Link } from "react-router-dom";

const Students = () => {
  console.log("Component rendered");
  const students = [
    { id: 1, name: "Praveen" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Kiran" },
  ];
  return (
    <div>
      <h2>Students</h2>
      {
        students.map((student)=>(
          <div key={student.id}>
            <Link to={`/students/${student.id}`}>{student.name}</Link>
          </div>
        ))
      }
    </div>
  );
};

export default Students;

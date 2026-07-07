import React, { useMemo, useState } from "react";

const StudentProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [course, setCourse] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const profile = useMemo(()=>{
    console.log("Generating of Profile");
    return `${firstName} ${lastName} - ${course}`;
  },[firstName,lastName,course]);

  return <div>
    <h1>Student Profile</h1>
    <input type="text" placeholder="Enter Firstname" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
    <br /><br />
    <input type="text" placeholder="Enter Lastname" value={lastName} onChange={(e)=>setLastName(e.target.value)} />
    <br /><br />
    <input type="text" placeholder="Enter Course" value={course} onChange={(e)=>setCourse(e.target.value)} />
    <br /><br />
    <button onClick={()=>setDarkMode(!darkMode)}>Toggle Theme</button>
    <br /><br />

    <h2>Profile</h2>
    <p>{profile}</p>
    <h3>
        Theme : {darkMode ? "Dark" : "Light"}
    </h3>
  </div>;
};

export default StudentProfile;

import React, { useMemo, useState } from "react";

const FullName = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  function createFullName() {
    console.log("Creating a FullName");
    return `${firstName} ${lastName}`;
  }

  const fullName = useMemo(() => {
    return createFullName();
  }, [firstName, lastName]);

  return (
    <div>
      <h1>Multiple Dependencies</h1>

      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <br />
      <br />

      <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>

      <h3>Theme : {darkMode ? "Dark" : "Light"}</h3>

      <hr />

      <h2>Full Name : {fullName}</h2>
    </div>
  );
};

export default FullName;

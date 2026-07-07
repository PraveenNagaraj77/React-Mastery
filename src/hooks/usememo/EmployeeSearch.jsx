import React, { useMemo, useState } from "react";

const EmployeeSearch = () => {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const employees = [
    {
      id: 1,
      name: "Praveen",
      role: "Java Developer",
    },
    {
      id: 2,
      name: "Karthick",
      role: "React Developer",
    },
    {
      id: 3,
      name: "Arun",
      role: "Full Stack Developer",
    },
    {
      id: 4,
      name: "Vignesh",
      role: "Python Developer",
    },
    {
      id: 5,
      name: "Rahul",
      role: "UI Developer",
    },
    {
      id: 6,
      name: "Anitha",
      role: "QA Engineer",
    },
    {
      id: 7,
      name: "Meena",
      role: "DevOps Engineer",
    },
    {
      id: 8,
      name: "John",
      role: "Backend Developer",
    },
    {
      id: 9,
      name: "Sneha",
      role: "Frontend Developer",
    },
    {
      id: 10,
      name: "Ajay",
      role: "Software Engineer",
    },
  ];

  function filterEmployees() {
    return employees.filter((employee) => {
      return (
        employee.name.toLowerCase().includes(search.toLowerCase()) ||
        employee.role.toLowerCase().includes(search.toLowerCase())
      );
    });
  }

  const filteredEmployees = useMemo(() => {
    console.log("Filtering Employees");
    return filterEmployees();
  }, [search]);

  const employeeCount = filteredEmployees.length;

  return (
    <div>
      <h1>EmployeeSearch</h1>
      <input
        type="text"
        placeholder="Search Employee"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={() => setDarkMode((prev) => !prev)}>Toggle Theme</button>

      <h3>Theme : {darkMode ? "Dark" : "Light"}</h3>
      <h3>Employees : {employeeCount}</h3>

      <hr />

      {employeeCount === 0
        ? "No Employees Found"
        : filteredEmployees.map((employee) => (
            <div key={employee.id}>
              <h3>{employee.name}</h3>
              <p>{employee.role}</p>
              <hr />
            </div>
          ))}
    </div>
  );
};

export default EmployeeSearch;

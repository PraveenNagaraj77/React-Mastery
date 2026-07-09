import { useParams } from "react-router-dom";

const StudentDetails = () => {
  console.log("Component Rendered");
  const { id } = useParams();

  const students = [
    { id: 1, name: "Praveen", course: "React" },
    { id: 2, name: "Rahul", course: "Java" },
    { id: 3, name: "Kiran", course: "Node.js" },
  ];

  const student = students.find(
    (student) => student.id === Number(id)
  );

  if (!student) {
    return <h2>Student Not Found</h2>;
  }

  return (
    <div>
      <h2>Student Details</h2>

      <p>ID : {student.id}</p>

      <p>Name : {student.name}</p>

      <p>Course : {student.course}</p>
    </div>
  );
};

export default StudentDetails;
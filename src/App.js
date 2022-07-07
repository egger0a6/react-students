import './App.css';
import { studentList } from "./data";
import { useState } from "react";
import EnrollmentList from './EnrollmentList';


function App() {
  const [students, setStudents] = useState(studentList);

  return (
    <div className="student-container">
      <EnrollmentList students={students}/>
    </div>
  );
}

export default App;

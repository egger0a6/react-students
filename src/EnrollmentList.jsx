import { useState } from "react";
import Student from "./Student";

const EnrollmentList = ({students}) => {
  return (
    <>
      {students.map((student) => 
        <Student
          key={student.name}
          student={student}
        />
      )}
    </>
  );
}

export default EnrollmentList;
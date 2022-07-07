import { useState } from "react";
import Score from "./Score";

const Student = ({student}) => {
  const[showBio, setShowBio] = useState(false);

  function handleShowBio() {
    setShowBio(!showBio);
  }

  return (
    <div className="student-card">
      <h2>{student.name}</h2>
      <button onClick={handleShowBio}>
        {showBio ? "Hide" : "Show"} bio
      </button>
      {showBio && 
        <p>{student.bio}</p>
      }
      <Score scores={student.scores}/>
    </div>
  );
}

export default Student;
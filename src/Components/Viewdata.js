import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function StudentData() {
  const { id } = useParams();
  const [studentData, setStudentData] = useState({});

  useEffect(() => {
    axios
      .get(`https://65773163197926adf62d9e6b.mockapi.io/Results/${id}`)
      .then((res) => {
        setStudentData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  const calculateTotal = () => {
    const subjects = ['maths', 'physics', 'chemistry', 'enggraphics'];
    return subjects.reduce((acc, subject) => acc + (parseInt(studentData[subject]) || 0), 0);
  };
  

  return (
    <div className="w-50 m-auto bg-success-subtle text-center">
      <h2>Student Details:</h2>
      <p>Name: {studentData.Name}</p>
      <p>Maths: {studentData.maths}</p>
      <p>Physics: {studentData.physics}</p>
      <p>Chemistry: {studentData.chemistry}</p>
      <p>E-Graphics: {studentData.enggraphics}</p>
      <p>Total: {calculateTotal()}</p>
    </div>
  );
}

export default StudentData;

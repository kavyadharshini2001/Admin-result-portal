import React from "react";
import toast from "react-hot-toast";
import axios from "axios";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";

function Studentsdata() {
    const navigate = useNavigate();
     const [newStudent, setNewStudent] = useState({
    Name: "",
    maths: "",
    physics: "",
    chemistry: "",
    enggraphics: "",
    total: "",
  });
  const [studentList, setStudentList] = useState([]);
  const handleChange = (e) => {
    // console.log(e.target.name,e.target.value)
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if (newStudent.Name === "") {
       
      return toast.error("firstName required");
    }
    if (newStudent.Name.length < 3) {
      return toast.error("firstName should not be less than three letters");
    }
    if (newStudent.lastName === "") {
      return toast.error("LastName required");
    }
    if (newStudent.email === "") {
      return toast.error("Email required");
    }
    if (newStudent.password === "") {
      return toast.error("password required");
    }
    toast.success("Form Submitted");
    console.log(newStudent);
    axios
      .post("https://65773163197926adf62d9e6b.mockapi.io/Results", newStudent)
      .then((res) => {
        console.log(res);
        toast.success("Created Successfully")
      })
      .catch((err) => console.log(err));
    setStudentList([...studentList, newStudent]);
    setNewStudent({
      Name: "",
      maths: "",
      physics: "",
      chemistry: "",
      enggraphics: "",
      total:"",
    });
  };
  const deleteStudent = (indx) => {
    studentList.splice(indx, 1);
    setStudentList([...studentList]);
    toast.success("Removed Successfully");
    navigate("/studentlist")
  };
  console.log(newStudent.Name);

  return (
    <>
      <div className="container w-50 m-auto ">
        <h3>Create Student</h3>

        <div className="row">
          <div className="col-6">
            <label class="form-label">First Name</label>
            <input
              type="text"
              class="form-control"
              name="Name"
              value={newStudent.Name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-6">
            <label class="form-label">Maths</label>
            <input
              type="number"
              class="form-control"
              name="maths"
              value={newStudent.maths}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-6">
            <label class="form-label">Physics</label>
            <input
              type="number"
              class="form-control"
              name="physics"
              value={newStudent.physics}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-6">
            <label class="form-label">Chemistry</label>
            <input
              type="number"
              class="form-control"
              name="chemistry"
              value={newStudent.chemistry}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-6">
            <label class="form-label">E-graphics</label>
            <input
              type="number"
              class="form-control"
              name="enggraphics"
              value={newStudent.enggraphics}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-6">
            <label class="form-label">Total</label>
            <input
              type="number"
              class="form-control"
              name="total"
              value={newStudent.total}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="text-end mt-5">
          <button
            className="btn btn-sm btn-outline-success"
            onClick={() => onSubmit()}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="container w-75 m-auto mt-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Roll Number</th>
              <th scope="col">Name</th>
              <th scope="col">Maths</th>
              <th scope="col">Physics</th>
              <th scope="col">Chemistry</th>
              <th scope="col">E-graphics</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((list, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{list.Name}</td>
                  <td>{list.maths}</td>
                  <td>{list.physics}</td>
                  <td>{list.chemistry}</td>
                  <td>{list.enggraphics}</td>
                  <td>{list.total}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-danger rounded-pill"
                      onClick={() => deleteStudent(index)}
                    >
                      x
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Studentsdata;

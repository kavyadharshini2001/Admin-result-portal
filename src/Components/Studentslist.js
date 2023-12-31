import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import'./Media-query-stulist.css';


import {
  Popover,
  PopoverHeader,
  PopoverBody,
  Modal,
  ModalHeader,
  ModalFooter,
} from "reactstrap" ;

function Studentlist() {
  
  const [studentList, setStudentList] = useState([]);
  const [deleteId, setDeleteID] = useState("");
  const [editModal, setEditModal] = useState(false);
  const [editData, setEditData] = useState({});
  const navigate = useNavigate();

  const fetchStudentList = () => {
    axios
      .get("https://65773163197926adf62d9e6b.mockapi.io/Results")
      .then((res) => {
        setStudentList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchStudentList();
  }, []);
  const toggleDelete = (id) => {
    setDeleteID(id);
  };
  const toggleEdit = (data) => {
    setEditModal(!editModal);
    setEditData(data);
  };

  const deleteStudent = (id) => {
    console.log(id);
    axios
      .delete(`https://65773163197926adf62d9e6b.mockapi.io/Results/${id}`)
      .then((res) => {
        console.log(res);
        toast.success("Student Delete");
        fetchStudentList();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log(editData);
  const handleChange = (e) => {
    // console.log(e.target.name,e.target.value)
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };
  const handleUpdate = () => {
    console.log(editData);
    axios
      .put(
        `https://65773163197926adf62d9e6b.mockapi.io/Results/${editData.id}`,
        editData
      )
      .then((res) => {console.log(res)
        toast.success("updated successfully")
        setEditModal(!editModal)
        fetchStudentList()
      })
      .catch((err) => console.log(err));
  };
  return (<>
    <div className='container w-75 m-auto d-flex justify-content-center resultedit'>
        <div>Result for April/May Examination,2024</div>
      </div>
    <div className="container w-80  mt-5">
      <h2>Student List</h2>
      <div className="text-end">
        <button
          className="btn btn-sm btn-outline-primary"
          onClick={() => navigate("/studentsdata")}
        >
          + Add Student
        </button>
      </div>
      <div className="w-80 m-auto table-container">
      <table class="table">
        <thead>
          <tr className="table-warning ">
            <th scope="col" >Roll Number</th>
            <th scope="col" >Name</th>
            <th scope="col" >Maths</th>
            <th scope="col">Physics</th>
            <th scope="col">Chemistry</th>
            <th scope="col">E-graphics</th>
            <th scope="col">Total</th>
            <th scope="col" className="d-flex justify-content-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((list, index) => {
            return (
              <tr className="table-success">
                <th scope="row" className="p-3">{index + 1}</th>
                <td >{list.Name}</td>
                <td >{list.maths}</td>
                <td >{list.physics}</td>
                <td >{list.chemistry}</td>
                <td >{list.enggraphics}</td>
                <td >{list.total}</td>
                <td className="d-flex justify-content-center">
                  <button
                    class="btn btn-sm btn-primary m-3"
                    onClick={() => navigate(`/studentslist/${list.id}`)}
                  >
                    View
                  </button>
                  <button
                    class="btn btn-sm btn-warning m-3"
                    onClick={() => toggleEdit(list)}
                  >
                    Edit
                  </button>
                  <button
                    class="btn btn-sm btn-danger m-3"
                    id={`delete-std-${index}`}
                    onClick={() => toggleDelete(list.id)}
                    
                  >
                    Delete
                  </button>
                </td>
                <Popover
                  target={`delete-std-${index}`}
                  isOpen={list.id === deleteId}
                  placement="top"
                >
                  <PopoverHeader>Confirmation</PopoverHeader>
                  <PopoverBody>
                    <div>Are you sure, want to delete?</div>
                    <div>
                      <button onClick={() => deleteStudent(list.id)}>
                        yes
                      </button>
                      <button onClick={() => setDeleteID("")}>no</button>
                    </div>
                  </PopoverBody>
                </Popover>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
      <Modal
        isOpen={editModal}
        toggle={() => setEditModal(!editModal)}
        size="lg"
        centered
      >
        <ModalHeader toggle={() => setEditModal(!editModal)}>
          Edit Student
        </ModalHeader>
        <modalBody>
          {" "}
          <div className="container ">
            <div className="row">
              <div className="col-6">
                <label class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="Name"
                  value={editData.Name}
                  // onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="col-6">
                <label class="form-label">Maths</label>
                <input
                  type="text"
                  class="form-control"
                  name="maths"
                  value={editData.maths}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="col-6">
                <label class="form-label">Physics</label>
                <input
                  type="number"
                  class="form-control"
                  name="physics"
                  value={editData.physics}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="col-6">
                <label class="form-label">Chemistry</label>
                {
                  <input
                    type="number"
                    class="form-control"
                    name="chemistry"
                    value={editData.chemistry}
                    onChange={(e) => handleChange(e)}
                  />
                }
              </div>
              <div className="col-6">
                <label class="form-label">E-graphics</label>
                {
                  <input
                  type="number"
                  class="form-control"
                  name="enggraphics"
                  value={editData.enggraphics}
                  onChange={(e) => handleChange(e)}
                />
                }
              </div>
              <div className="col-6">
                <label class="form-label">Total</label>
                <input
                    type="number"
                    class="form-control"
                    name="total"
                    value={editData.total}
                    onChange={(e) => handleChange(e)}
                  />
              </div>
            </div>
          </div>
        </modalBody>
        <ModalFooter>
          <div>
            <button onClick={() => setEditModal(!editModal)}>Cancel</button>
            <button onClick={() => handleUpdate()}>Update</button>
          </div>
        </ModalFooter>
      </Modal>
    </div></>
  );
}

export default Studentlist;

import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary design">
        <div className="container-fluid">
          <Link to={"/"}>
            <a className="navbar-brand" href="#"><i className="fa fa-university fa-2x" aria-hidden="true"></i></a>
          </Link>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <Link to={'/login'} style={{ textDecoration: 'none' }}>
                <li className="nav-item">
                  <a className="nav-link fs-5" href="#">Login</a>
                </li>
              </Link>
              <Link to={'/studentsdata'} style={{ textDecoration: 'none' }}>
                <li className="nav-item">
                  <a className="nav-link fs-5">StudentsData</a>
                </li>
              </Link>
              <Link to={'/studentslist'} style={{ textDecoration: 'none' }}>
                <li className="nav-item">
                  <a className="nav-link fs-5" href="#">StudentsList</a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container w-75 m-auto">
        <div className='text-center fw-semibold fs-5 topedit'>Anna University, Chennai<br />Office of the Controller of Examinations</div>
      </div>
      <div className='container w-80 p-5'>
        <div className='d-flex justify-content-center navedit'>Welcome to the Office of the Controller of Examinations</div>
      </div>
    </>
  );
}

export default Navbar;

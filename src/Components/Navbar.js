import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import './Media-query.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
function Navbar() {
  return (
    <>
      <nav className="navbar col-sm-4 col-md-12 col-lg-12 design topbar">
        <div className="container-fluid">
          <Link to={'/'}>
            <a className="navbar-brand" href="#">
              <i className="fa fa-university fa-2x" aria-hidden="true"></i>
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={'/login'} style={{ textDecoration: 'none' }}>
                  <a className="nav-link fs-5 fw-semibold" aria-current="page" href="#">
                    Login
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link to={'/studentsdata'} style={{ textDecoration: 'none' }}>
                  <a className="nav-link fs-5 fw-semibold" aria-current="page" href="#">
                    studentsdata
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/studentslist'} style={{ textDecoration: 'none' }}>
                  <a className="nav-link fs-5 fw-semibold" aria-current="page" href="#">
                    Studentslist
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/viewdata'} style={{ textDecoration: 'none' }}>
                  <a className="nav-link fs-5 fw-semibold" aria-current="page" href="#">
                    Viewdata
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container w-75 m-auto topedit">
        <div className="text-center fw-semibold ">
          Anna University, Chennai
          <br />
          Office of the Controller of Examinations
        </div>
      </div>
      <div className="container text-center w-80 p-5 ">
        <div className="d-flex justify-content-center  navedit ">
          Welcome to the Office of the Controller of Examinations
        </div>
      </div>
    </>
  );
}

export default Navbar;

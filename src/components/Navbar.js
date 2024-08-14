import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assests/logo_main.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate=useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark nav_main">
        <div className="container">
          <a className="logo" href="#">
            <img src={logo} className="img-fluid" />
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                 <Link to="about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
              <Link to="/membership" className="nav-link">MemberShip</Link>
              </li>
              <li className="nav-item">
              <Link to="/plan" className="nav-link">Plan</Link>
              </li>
              <li className="nav-item">
              <Link to="/testimonial" className="nav-link">Testimonial</Link>
              </li>
            </ul>
            <form className="d-flex ms-md-4" role="search">
              <button onClick={()=>navigate("/login")} className="btn1" type="submit">Login</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar;
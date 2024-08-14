import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
     <div className="signup-main">   
   <section className="container w-50 text-light p-2">
    <form className="row g-3 p-3 signup-form">
    <h4 className="text-center text-white">Sign Up</h4>
        <div className="col-md-4">
            <label for="validationDefault01" className="form-label text-white">First name</label>
            <input type="text" className="form-control" id="validationDefault01" required/>
          </div>
          <div className="col-md-4">
            <label for="validationDefault02" className="form-label text-white">Last name</label>
            <input type="text" className="form-control" id="validationDefault02" required/>
          </div>
          <div className="col-md-4">
            <label for="validationDefaultUsername" className="form-label text-white">Username</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2">@</span>
              <input type="text" className="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
            </div>
          </div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label text-white">Email</label>
          <input type="email" className="form-control" id="inputEmail4"/>
        </div>
        <div className="col-md-6">
          <label for="inputPassword" className="form-label text-white">Password</label>
          <input type="password" className="form-control" id="inputPassword"/>
        </div>
        <div className="col-md-6">
          <label for="inputPhone" className="form-label text-white">PhoneNo</label>
          <input type="tel" className="form-control" id="inputPhone"/>
        </div>
        <div className="col-md-6">
          <label for="inputAge" className="form-label text-white">Age</label>
          <input type="number" className="form-control" id="inputAge"/>
        </div>
        
        <div className="col-12">
          <label for="inputAddress2" className="form-label text-white">Address</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
        </div>
        <div className="col-md-4">
          <label for="inputState" className="form-label text-white">Role</label>
          <select id="inputState" className="form-select">
            <option selected>User</option>
            <option>Admin</option>
            <option>Trainer</option>
          </select>
        </div>
        <div className="col-md-4">
          <label for="inputState" className="form-label text-white">Gym</label>
          <select id="inputState" className="form-select">
            <option selected>Kothrud(Pune)</option>
            <option selected>Kharadi(Pune)</option>
            <option>Mumbai</option>
          </select>
        </div>
        <div className="col-md-4 mt-5">
        <label htmlFor="username" className="text-white px-1">Gender:</label>
          <input type="radio" id="male" name="gender" value="male"/>
          <label for="html" className="text-white px-2">Male</label>
          <input type="radio" id="female" name="gender" value="female"/>
          <label for="css" className="text-white px-2">Female</label>
        </div>
        <div className="col-12 mt-2">
          <div className="form-check">
            <input type="checkbox" className="form-check" id="gridCheck"/>
            {/* <label className="form-check" for="gridCheck"> */}
              <span className="text-white">Check me out</span>
            {/* </label> */}
          </div>
        </div>
        <div className="col-12 mt-2">
          <button type="submit" className="btn btn-primary register">Register</button>
        </div>
        <div className="col-12 text-center">
        <span className="text-white">Already have an Account? </span>
        <Link to="/login" className="login-link text-white">
          Login
        </Link>
        </div>
        
      </form>
   </section>
   </div>
  );
};

export default Signup;
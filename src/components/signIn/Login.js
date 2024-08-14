import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {

const[email,setEmail]=useState("");
const [password,setPassword]=useState("");
const handleSubmit=(e)=>{
  e.preventDefault();
  setEmail("");
  setPassword("");

  localStorage.setItem("email",email)
  localStorage.setItem("password",password);
}
  return (
    <>
    <div className="container-fluid signIn-main">
      <div className="row">
        <div className="col-md-12">
    <div className="addUser text-white">
      <h3>Sign in</h3>
      <form className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="email" className="text-white">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Enter your Email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
          />
          <label htmlFor="Password" className="text-white">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Enter your Password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
          />
          <button type="submit" class="btn btn-primary mt-4 w-50 login_btn" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </form>
      <div className="login text-center mt-1">
        <span className="text-white">Don't have Account? </span>
        <Link to="/signup" className="login-link text-white">
          Sign Up
        </Link>
        {/* <Link to="/signup" type="submit" class="btn btn-success">
          Sign Up
        </Link> */}
      </div>
    </div>
    </div>
    </div>
    </div>
       </>
  );
};

export default Login;
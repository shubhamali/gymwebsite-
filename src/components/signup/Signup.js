import React, { useEffect, useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
const Signup = () => {
  var ucourses=[{id:1,description:"Customer"},
    {id:2,description:"Trainer"}]
    const[gym,setGym]=useState([]);
    const navigate=useNavigate();
  const [item, setItem] = useState({
    fullname: " ",
    userName: " ",
    email:"",
    password:" ",
    phone: " ",
    address:" ",
    age:0,
    gender:0,
    roleId: 0,
    gymId:0,
  });
  const inputChangeHandler=(e)=>{
    const{type,name,value}=e.target;
    setItem({...item,[name]:value});
  }
  useEffect(()=>{
    axios.get(`http://localhost:8080/gymservices/users/gym`).then((res)=>{
      setGym(res.data);
      console.log(res.data);
    }).catch((err)=>{
      console.log(err);
    },[])
  })
  const addUser=(e)=>{
    e.preventDefault();
    console.log(item);
    axios.post(`http://localhost:8080/gymservices/users/add`, item).then(()=>{
    window.alert("Details added successfully!!");
    navigate("/login");
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
     <div className="signup-main" >   
   <section className="container w-50 text-light p-2">
    <form className="row g-3 p-3 signup-form" >
    <h4 className="text-center text-white">Sign Up</h4>
        <div className="col-md-6">
            <label htmlFor="fullname" className="form-label text-white">Full Name</label>
            <input type="text" className="form-control" name="fullname" id="fullname" value={item.fullname} onChange={inputChangeHandler} required/>
          </div>
          
          <div className="col-md-6">
            <label htmlFor="userName" className="form-label text-white">Username</label>
            <div className="input-group">
              <span className="input-group-text" id="userName">@</span>
              <input type="text" className="form-control" id="userName" value={item.userName} name="userName" onChange={inputChangeHandler}  aria-describedby="inputGroupPrepend2" required/>
            </div>
          </div>
          <div className="col-md-6">
          <label htmlFor="password" className="form-label text-white">Password</label>
          <input type="password" className="form-control" value={item.password} onChange={inputChangeHandler}  id="password" name="password"/>
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label text-white">Email</label>
          <input type="email" className="form-control" value={item.email} onChange={inputChangeHandler}  id="email" name="email"/>
        </div>
        
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label text-white">PhoneNo</label>
          <input type="tel" className="form-control" id="phone" onChange={inputChangeHandler}  value={item.phone} name="phone"/>
        </div>
        <div className="col-md-6">
          <label htmlFor="age" className="form-label text-white">Age</label>
          <input type="number" className="form-control" id="age" value={item.age} onChange={inputChangeHandler}  name="age"/>
        </div>
        
        <div className="col-12">
          <label htmlFor="address" className="form-label text-white">Address</label>
          <input type="text" className="form-control" id="address" name="address" onChange={inputChangeHandler}  value={item.address} placeholder="Apartment, studio, or floor"/>
        </div>
        <div className="col-md-4">
          <label htmlFor="roleId" className="form-label text-white">Role</label>
          <select id="roleId" className="form-select" name="roleId" onChange={inputChangeHandler} >
            <option>select your role</option>
            {
              ucourses.map((val,index)=>{
                return <option key={index} value={val.id}>{val.description}</option>

              })
            }
            {/* <option>Admin</option>
            <option>Trainer</option> */}
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="gymname" className="form-label text-white">Gym</label>
          <select id="gymname" className="form-select" name="gymname" onChange={inputChangeHandler} >
            <option>select your gym</option>
            {
              gym.map((val,index)=>{
              return <option key={index} value={val.id}>{val.name}</option>
              })
            }
          </select>
        </div>
        <div className="col-md-4 mt-5">
        <label htmlFor="gender" className="text-white px-1">Gender:</label>
          <input type="radio" id="male" name="gender" onChange={inputChangeHandler}  value="male"/>
          <label htmlFor="html" className="text-white px-2">Male</label>
          <input type="radio" id="female" name="gender" onChange={inputChangeHandler}  value="female"/>
          <label htmlFor="css" className="text-white px-2">Female</label>
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
          <button type="submit" className="btn btn-primary register" onClick={addUser}>Register</button>
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
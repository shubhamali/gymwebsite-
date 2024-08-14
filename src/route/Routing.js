import React from "react";
import {  Routes,Route } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Membership from "../pages/membership/Membership";
import Login from "../components/signIn/Login";
import Signup from "../components/signup/Signup";
import Testimonial from "../pages/testimonal/Testimonial";
import Services from "../pages/services/Services";
import Plan from "../pages/plan/Plan";

const Routing=()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/membership" element={<Membership/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/plan"   element={<Plan/>}/>
            <Route path="/testimonial" element={<Testimonial/>}/>
            <Route path="/services" element={<Services/>}/>
        </Routes>
        
        </>
    )
}
export default Routing;
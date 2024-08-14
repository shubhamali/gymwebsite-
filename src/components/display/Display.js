import React from "react";
import axios from 'axios';
import { useState,useEffect } from "react";
const Display=()=>{
    const [todos, setTodos] = useState([]);
    
useEffect(() => {
        setTimeout(() => {
           
 function getTodos () {
    axios.get('http://localhost:4000/todos')
    .then(function (response) {
      setTodos(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
    });
  }

          }, 2000);

        });  
    
    return (
        <>

      <div className="container">
        <div className="row">
            <div className="col-md-12">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Gender</th>
      <th scope="col">Address</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>

  <tbody id="tableBody">
    <tr> 
      {
          todos.map((item) => (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>{item.address}</td>
                <td>{item.phone}</td>
            </tr>
          ))
        }
    </tr>
    
  </tbody>
</table>
</div>
</div>
</div>




























        {/* <tbody id="tableBody">
        {
          todos.map((item) => (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>{item.address}</td>
                <td>{item.phone}</td>
            </tr>
          ))
        }
        </tbody> */}
        
        </>
    )
}
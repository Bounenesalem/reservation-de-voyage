// import { useState ,useEffect } from "react";
// // import http from "./Admins/pages/http";

// export default function User(){
//     const [users,setUsers]=useState([]);

//     useEffect(()=>{
//         fetch(" http://127.0.0.1:8000/api/register ")
//         .then((res)=>res.json())
//         .then((data)=>console.log(data))
//     },[]);

    
    

//     return (
//         <div>
//             <h2>users listing</h2>
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>id</th>
//                         <th>Name</th>
//                         <th>email</th>
//                         <th>Password</th>
                       
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user,index)=>(

//                         <tr key={user.id}>
//                         <td>{index}</td>
//                         <td>{user.name}</td>
//                         <td>{user.email}</td>
//                         <td>{user.password}</td>
                    
//                         <td>edit</td>
//                         </tr>

//                     ))}
                   
//                 </tbody>
//             </table>
//         </div>
//     )
// }


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="my-4">Users</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/users/${user.id}`} className="btn btn-info btn-sm">View</Link>
                <Link to={`/update-user/${user.id}`} className="btn btn-warning btn-sm mx-2">Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="create-user" className="btn btn-primary mt-3">Create User</Link>
    </div>
  );
};

export default UserList;

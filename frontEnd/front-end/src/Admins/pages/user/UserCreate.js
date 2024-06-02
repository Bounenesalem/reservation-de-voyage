// import axios from "axios";
// import { useState } from "react"
// import { useNavigate } from "react-router-dom";

// export default function CreateUser(){

//     const navigate=useNavigate();
//     const [inputs,setInputs]=useState({});
//     const handleChange=(event)=>{
//         const name=event.target.name;
//         const value=event.target.value;

//         setInputs(values => ({...values,[name]:value}))

//     }

//     const submitForm=()=>{
//         axios.post('/users',inputs).then((res)=>{
//             navigate('/user');
//         })
//     }
//     return(
//         <div>
//             <h2>New User</h2>
//             <div className="row">
//                 <div className="col-sm-6 ">
//                 <div className="card p-4">

//                     <label>Name</label>
//                     <input type="text" name="name" className="form-control mb-2"
//                        value={ inputs.name || ''}
//                        onChange={handleChange}

//                     />

//                     <label>Email</label>
//                     <input type="email" name="email" className="form-control mb-2"
//                                            value={ inputs.email || ''}
//                                            onChange={handleChange}
//                     />

//                     <label>password</label>
//                     <input type="password" name="password" className="form-control mb-2"
//                                            value={ inputs.password|| ''}
//                                            onChange={handleChange}
//                     />

//                     <button type="button" onClick={submitForm} className="btn btn-info mt-2">create</button>

//                 </div>

//             </div>
//         </div>
//         </div>
//     )
// }




import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

const CreateUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/user', formData)
      .then(response => {
        console.log('User created successfully:', response.data);
        navigate('/dashboard/users');
      })
      .catch(error => {
        console.error('There was an error creating the user!', error);
      });
  };

  return (
    <div className="container">
      <h2 className="my-4">Create User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    </div>
  );
};

export default CreateUser;

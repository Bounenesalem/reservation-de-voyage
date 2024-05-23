// import {  useState } from "react"
// import { useNavigate } from "react-router-dom";
// import Header from "../../component/Header";
// import axios from "axios";

// function Login()
// {
// const navigate=useNavigate();
//     const [email,setEmail]=useState("");
//     const [password,setPassword]=useState("");
//     const [accept,setAccept]=useState(false);
//     const [emailError,setEmailError]=useState("");

//     async function Submit(e){
//         let flag=true
//         e.preventDefault();
//         setAccept(true);
//         if(password.length<8){
//             flag=false
//         }else flag=true;
//         try{
//         if(flag){
//         await  axios.post("http://127.0.0.1:8000/api/login",{
            
//             email:email,
//             password:password,
            
    
//           }).then((b)=>console.log(b));
//         //   if(res.status === 201){
//             window.localStorage.setItem("email",email)
//             window.location.pathname="/";
//         //   }
//         navigate('/')
//         }
//         }catch(err){
//             setEmailError(err.response.status);
//         }
//     }

//     return(
//         <div>   
//             <Header/>
//             <h1> login page</h1>
//             <form onSubmit={Submit}>
//             <div className="col-sm-6 offset-sm-3">
                
//             <input type="text" placeholder="Email " value={email}
//              onChange={(e)=>setEmail(e.target.value)} className="form-control"/>{accept && emailError ===500 && <p>email is not correct</p>}<br/>

//             <input type="password" placeholder="password " value={password}
//            onChange={(e)=>setPassword(e.target.value)} className="form-control"/>{password.length<8 &&accept &&(<p>password must be more than 8 char</p>)}<br/>

//             <button className="btn btn-primary">Login</button>

//         </div>
//         </form>
//         </div>
//     ) 
// }

// export default Login



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/login', formData)
      .then(response => {
        localStorage.setItem('token', response.data.access_token);
        navigate('/select');
      })
      .catch(error => {
        setError('Invalid email or password.');
      });
  };

  return (
    <div className="container">
      <h2 className="my-4">Login</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}
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
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' ,address:''});
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/register', formData)
      .then(response => {
        navigate('/login');
      })
      .catch(error => {
        setError('Registration failed. Please try again.');
      });
  };

  return (
    <div className="container">
      <h2 className="my-4">Register</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}
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
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;





// import axios from "axios"
// import React,{ useState} from "react"
// import Header from "../../component/Header";
// // import { useNavigate } from "react-router-dom"
// // import {useHistory} from 'react-router-dom'

// function Register()
// {
// //     useEffect(()=>{
// //         if(localStorage.getItem('user-info')){
// //             navigate('/')

// //         }

// // })


//     const [name,setName]=useState("")  ; 
//     const [email,setEmail]=useState("");
//     const [password,setPassword]=useState("");
//     const [address,setAddress]=useState("");
//     const [nni,setNni]=useState("");
//     const [dateOfBirth,setDateOfBirth]=useState("");
//     const [placeOfBirth,setPlaceOfBirth]=useState("");
//     const [gender,setGender]=useState("");
//     const [accept,setAccept]=useState(false);
//     const [emailError,setEmailError]=useState("");
//     // const [flag,setFlag]=useState(false);
// // console.log(flag);
//    async function Submit(e){
//     let flag=true
//     e.preventDefault();
//     setAccept(true);
//     if(name===''||password.length<8){
//         flag=false
//     }else flag=true;
//     try{
//     if(flag){
//     let res=await  axios.post("http://127.0.0.1:8000/api/register",{
//         name:name,
//         email:email,
//         password:password,
//         address:address,
//         nni:nni,
//         dateOfBirth:dateOfBirth,
//         placeOfBirth:placeOfBirth,
//         gender:gender,

//       }).then((b)=>console.log(b));
//     //   if(res.status === 201){
//         window.localStorage.setItem("email",email)
//         window.location.pathname="/login";
//     //   }
//     }
//     }catch(err){
//         setEmailError(err.response.status);
//     }

//    }
   


//     return(
//         <div className="col-sm-6 offset-sm-3"> 
//         <Header/>
//             <h1>Register page</h1>
//             <form onSubmit={Submit}>
//             <input  type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Name" />{name === '' && accept && <p>user name is required</p>}<br/>            
//             <input  type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Email" />{accept && emailError ===500 && <p>email is already been taken</p>}<br/>
//             <input  type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password" />{password.length<8 &&accept &&(<p>password must be more than 8 char</p>)}<br/>
//             <input  type="text" value={address} onChange={(e)=>setAddress(e.target.value)} className="form-control" placeholder="Address" /><br/>
//             <input  type="number" value={nni} onChange={(e)=>setNni(e.target.value)} className="form-control" placeholder="NNI" /><br/>
//             <input  type="date" value={dateOfBirth} onChange={(e)=>setDateOfBirth(e.target.value)} className="form-control" placeholder="dateOfBirth" /><br/>
//             <input  type="text" value={placeOfBirth} onChange={(e)=>setPlaceOfBirth(e.target.value)} className="form-control" placeholder="placeOfBirth" /><br/>
//             <input  type="text" value={gender} onChange={(e)=>setGender(e.target.value)} className="form-control" placeholder="Gender" /><br/>
//             <button  className="btn btn-primary">Sign Up</button>
//             </form>
//         </div>
//     ) 
// }
// export default Register
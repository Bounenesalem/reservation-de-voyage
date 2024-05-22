import axios from "axios"
import React,{ useState} from "react"
import Header from "../../component/Header";
// import { useNavigate } from "react-router-dom"
// import {useHistory} from 'react-router-dom'

function Register()
{
//     useEffect(()=>{
//         if(localStorage.getItem('user-info')){
//             navigate('/')

//         }

// })


    const [name,setName]=useState("")  ; 
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [address,setAddress]=useState("");
    const [nni,setNni]=useState("");
    const [dateOfBirth,setDateOfBirth]=useState("");
    const [placeOfBirth,setPlaceOfBirth]=useState("");
    const [gender,setGender]=useState("");
    const [accept,setAccept]=useState(false);
    const [emailError,setEmailError]=useState("");
    // const [flag,setFlag]=useState(false);
// console.log(flag);
   async function Submit(e){
    let flag=true
    e.preventDefault();
    setAccept(true);
    if(name===''||password.length<8){
        flag=false
    }else flag=true;
    try{
    if(flag){
    let res=await  axios.post("http://127.0.0.1:8000/api/register",{
        name:name,
        email:email,
        password:password,
        address:address,
        nni:nni,
        dateOfBirth:dateOfBirth,
        placeOfBirth:placeOfBirth,
        gender:gender,

      }).then((b)=>console.log(b));
    //   if(res.status === 201){
        window.localStorage.setItem("email",email)
        window.location.pathname="/login";
    //   }
    }
    }catch(err){
        setEmailError(err.response.status);
    }

   }
   


    return(
        <div className="col-sm-6 offset-sm-3"> 
        <Header/>
            <h1>Register page</h1>
            <form onSubmit={Submit}>
            <input  type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Name" />{name === '' && accept && <p>user name is required</p>}<br/>            
            <input  type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Email" />{accept && emailError ===500 && <p>email is already been taken</p>}<br/>
            <input  type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password" />{password.length<8 &&accept &&(<p>password must be more than 8 char</p>)}<br/>
            <input  type="text" value={address} onChange={(e)=>setAddress(e.target.value)} className="form-control" placeholder="Address" /><br/>
            <input  type="number" value={nni} onChange={(e)=>setNni(e.target.value)} className="form-control" placeholder="NNI" /><br/>
            <input  type="date" value={dateOfBirth} onChange={(e)=>setDateOfBirth(e.target.value)} className="form-control" placeholder="dateOfBirth" /><br/>
            <input  type="text" value={placeOfBirth} onChange={(e)=>setPlaceOfBirth(e.target.value)} className="form-control" placeholder="placeOfBirth" /><br/>
            <input  type="text" value={gender} onChange={(e)=>setGender(e.target.value)} className="form-control" placeholder="Gender" /><br/>
            <button  className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    ) 
}
export default Register
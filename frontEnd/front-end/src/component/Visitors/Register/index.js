import React,{useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
// import {useHistory} from 'react-router-dom'

function Register()
{
    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate('/')

        }

})


    const [name,setName]=useState("")   
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [address,setAddress]=useState("")
    const [nni,setNni]=useState("")
    const [dateOfBirth,setDateOfBirth]=useState("")
    const [placeOfBirth,setPlaceOfBirth]=useState("")
    const [gender,setGender]=useState("")

    const navigate=useNavigate();
    // const history=useHistory

    async function SignUp(){
        let item={name,email,password,address,nni,dateOfBirth,placeOfBirth,gender}
        console.warn(item)
      let result=await  fetch("http://localhost:8000/api/register",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })

        result=await result.json()
        // console.warn("result",result)
        localStorage.setItem("user-info",JSON.stringify(result))
        navigate("/about")
        
    }

    return(
        <div className="col-sm-6 offset-sm-3"> 
            <h1>Register page</h1>
            <input  type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Name"/><br/>            
            <input  type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Email"/><br/>
            <input  type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password"/><br/>
            <input  type="text" value={address} onChange={(e)=>setAddress(e.target.value)} className="form-control" placeholder="Address"/><br/>
            <input  type="number" value={nni} onChange={(e)=>setNni(e.target.value)} className="form-control" placeholder="NNI"/><br/>
            <input  type="date" value={dateOfBirth} onChange={(e)=>setDateOfBirth(e.target.value)} className="form-control" placeholder="dateOfBirth"/><br/>
            <input  type="text" value={placeOfBirth} onChange={(e)=>setPlaceOfBirth(e.target.value)} className="form-control" placeholder="placeOfBirth"/><br/>
            <input  type="text" value={gender} onChange={(e)=>setGender(e.target.value)} className="form-control" placeholder="Gender"/><br/>
            <button onClick={SignUp} className="btn btn-primary">Sign Up</button>
        </div>
    ) 
}
export default Register
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

function Login()
{

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const navigate=useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('user-info')){
        navigate("/Home")
        }
    })

   async function Login(){
        let item={email,password}
        console.warn(item)
        let result= await  fetch("http://localhost:8000/api/login",{
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
        // history.push("login")
        navigate("/")

    }

    return(
        <div>  
            <h1> login page</h1>
            <div className="col-sm-6 offset-sm-3">
                
            <input type="text" placeholder="Email " value={email}
             onChange={(e)=>setEmail(e.target.value)} className="form-control"/><br/>

            <input type="password" placeholder="password " value={password}
           onChange={(e)=>setPassword(e.target.value)} className="form-control"/><br/>

            <button onClick={Login} className="btn btn-primary">Login</button>

        </div>
        </div>
    ) 
}
export default Login
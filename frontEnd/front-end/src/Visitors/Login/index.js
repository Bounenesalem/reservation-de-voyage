import {  useState } from "react"
import { useNavigate } from "react-router-dom";
import Header from "../../component/Header";
import axios from "axios";

function Login()
{
const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [accept,setAccept]=useState(false);
    const [emailError,setEmailError]=useState("");

    async function Submit(e){
        let flag=true
        e.preventDefault();
        setAccept(true);
        if(password.length<8){
            flag=false
        }else flag=true;
        try{
        if(flag){
        await  axios.post("http://127.0.0.1:8000/api/login",{
            
            email:email,
            password:password,
            
    
          }).then((b)=>console.log(b));
        //   if(res.status === 201){
            window.localStorage.setItem("email",email)
            window.location.pathname="/";
        //   }
        navigate('/')
        }
        }catch(err){
            setEmailError(err.response.status);
        }
    }

    return(
        <div>   
            <Header/>
            <h1> login page</h1>
            <form onSubmit={Submit}>
            <div className="col-sm-6 offset-sm-3">
                
            <input type="text" placeholder="Email " value={email}
             onChange={(e)=>setEmail(e.target.value)} className="form-control"/>{accept && emailError ===500 && <p>email is not correct</p>}<br/>

            <input type="password" placeholder="password " value={password}
           onChange={(e)=>setPassword(e.target.value)} className="form-control"/>{password.length<8 &&accept &&(<p>password must be more than 8 char</p>)}<br/>

            <button className="btn btn-primary">Login</button>

        </div>
        </form>
        </div>
    ) 
}

export default Login
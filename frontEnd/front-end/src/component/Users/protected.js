import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
// import Header from "../Visitors/Header";
function Protected(props){
    let Cmp=props.Cmp

    const navigate=useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('user-info')){
        navigate("/login")
        }
    })
    return (
        <div>
            <Cmp/>
        </div>
    )
}

export default Protected
import axios from "axios";
import { useState ,useEffect } from "react";

import { Link } from "react-router-dom";
// import http from "./Admins/pages/http";

export default function Agencies(){
    const [agencies,setAgencies]=useState([]);
    const [runAgencies,setRunAgencies]=useState(0);

    useEffect(()=>{
        fetch(" http://127.0.0.1:8000/api/agency ")
        .then((res)=>res.json())
        .then((data)=>setAgencies(data))
    },[runAgencies]);

    async function deleteAgencies(id){
       try{ 
      const res=await  axios.delete( `http://127.0.0.1:8000/api/agency/${id}`);
        if(res.status===200){
            setRunAgencies((prev)=> prev+1)
        }
    
        }catch{
            console.log("none");
        }
    }

    const showAgencies=agencies.map((agency,index)=>(
        <tr key={index}>
            <td>{index +1}</td>
            <td>{agency.name}</td>
            <td>{agency.description }</td>
            <td>{agency.location }</td>
            <td>{agency.email }</td>
            <td>{agency.phone }</td>
            <td>
                <button onClick={()=>deleteAgencies(agency.id)} className="btn btn-danger">delete</button> 
                 <Link to={`${agency.id}`} className="btn btn-success">update</Link>
                 <Link to={`agency-details/${agency.id}`} className="btn btn-info">Details</Link>
            </td>
        </tr>
    ));
    

    return (
        <>
        <div > 
            <Link to={"create"} className="btn btn-success"  >create agency</Link>
        </div>
        <div>
             
            
            <h2>agency listing</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Location</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {showAgencies}
                </tbody>
            </table>
        </div>
        </>
    )
}
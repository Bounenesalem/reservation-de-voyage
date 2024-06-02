import axios from "axios";
import { useState ,useEffect } from "react";

import { Link } from "react-router-dom";

export default function DestinationList(){
    const [destinations,setDestinations]=useState([]);
    const [runAgencies,setRunAgencies]=useState(0);

    useEffect(()=>{
        fetch(" http://127.0.0.1:8000/api/destination ")
        .then((res)=>res.json())
        .then((data)=>setDestinations(data))
    },[runAgencies]);

    async function deleteAgencies(id){
       try{ 
      const res=await  axios.delete( `http://127.0.0.1:8000/api/destination/${id}`);
        if(res.status===200){
            setRunAgencies((prev)=> prev+1)
        }
    
        }catch{
            console.log("none");
        }
    }

    const showDestinations=destinations.map((destination,index)=>(
        <tr key={index}>
            <td>{index +1}</td>
            <td>{destination.name}</td>
            <td>{destination.description }</td>
            <td>{destination.date }</td>
            <td>{destination.budget }</td>
            
            <td>
                <button onClick={()=>deleteAgencies(destination.id)} className="btn btn-danger">delete</button> 
                 <Link to={`${destination.id}`} className="btn btn-success">update</Link>
                 <Link to={`details/${destination.id}`} className="btn btn-info">Details</Link>
            </td>
        </tr>
    ));
    

    return (
        <>
        <div > 
            <Link to={"create"} className="btn btn-success"  >create Destination</Link>
        </div>
        <div>
             
            
            <h2>Destination listing</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Budget</th>                    
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {showDestinations}
                </tbody>
            </table>
        </div>
        </>
    )
}
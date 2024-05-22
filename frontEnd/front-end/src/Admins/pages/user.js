import { useState ,useEffect } from "react";
// import http from "./Admins/pages/http";

export default function User(){
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        fetch(" http://127.0.0.1:8000/api/register ")
        .then((res)=>res.json())
        .then((data)=>console.log(data))
    },[]);

    
    

    return (
        <div>
            <h2>users listing</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>Password</th>
                       
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index)=>(

                        <tr key={user.id}>
                        <td>{index}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                    
                        <td>edit</td>
                        </tr>

                    ))}
                   
                </tbody>
            </table>
        </div>
    )
}
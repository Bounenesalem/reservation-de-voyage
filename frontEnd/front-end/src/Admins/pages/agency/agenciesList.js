// import axios from "axios";
// import { useState ,useEffect } from "react";

// import { Link } from "react-router-dom";
// // import http from "./Admins/pages/http";

// export default function Agencies(){
//     const [agencies,setAgencies]=useState([]);
//     const [runAgencies,setRunAgencies]=useState(0);

//     useEffect(()=>{
//         fetch(" http://127.0.0.1:8000/api/agency ")
//         .then((res)=>res.json())
//         .then((data)=>setAgencies(data))
//     },[runAgencies]);

//     async function deleteAgencies(id){
//        try{ 
//       const res=await  axios.delete( `http://127.0.0.1:8000/api/agency/${id}`);
//         if(res.status===200){
//             setRunAgencies((prev)=> prev+1)
//         }
    
//         }catch{
//             console.log("none");
//         }
//     }

//     const showAgencies=agencies.map((agency,index)=>(
//         <tr key={index}>
//             <td>{index +1}</td>
//             <td>{agency.name}</td>
//             <td>{agency.description }</td>
//             <td>{agency.location }</td>
//             <td>{agency.email }</td>
//             <td>{agency.phone }</td>
//             <td>
//                 <button onClick={()=>deleteAgencies(agency.id)} className="btn btn-danger">delete</button> 
//                  <Link to={`${agency.id}`} className="btn btn-success">update</Link>
//                  <Link to={`agency-details/${agency.id}`} className="btn btn-info">Details</Link>
//             </td>
//         </tr>
//     ));
    

//     return (
//         <>
//         <div > 
//             <Link to={"create"} className="btn btn-success"  >create agency</Link>
//         </div>
//         <div>
             
            
//             <h2>agency listing</h2>
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>id</th>
//                         <th>Name</th>
//                         <th>Description</th>
//                         <th>Location</th>
//                         <th>Email</th>
//                         <th>Phone</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                    {showAgencies}
//                 </tbody>
//             </table>
//         </div>
//         </>
//     )
// }


// src/pages/Agencies.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,  Typography, Box, IconButton } from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon, Edit as EditIcon, Info as InfoIcon } from '@mui/icons-material';
import SideBar from '../../../component/SideBar';

const Agencies = () => {
  <SideBar></SideBar>
  const [agencies, setAgencies] = useState([]);
  const [runAgencies, setRunAgencies] = useState(0);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/agency")
      .then((res) => res.json())
      .then((data) => setAgencies(data));
  }, [runAgencies]);

  async function deleteAgencies(id) {
    try {
      const res = await axios.delete(`http://127.0.0.1:8000/api/agency/${id}`);
      if (res.status === 200) {
        setRunAgencies((prev) => prev + 1);
      }
    } catch {
      console.log("none");
    }
  }

  return (
    <SideBar>
    <Box mt={4}>
        <Typography variant="h4" gutterBottom>
        Agency Listing
      </Typography>
      <Box mb={2} display="flex" alignItems="center">
        <IconButton color="primary" component={Link} to="create">
          <AddIcon />
        </IconButton>
        <Typography variant="h6" ml={1}>
          Create Agency
        </Typography>
      </Box>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {agencies.map((agency, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{agency.name}</TableCell>
                <TableCell>{agency.description}</TableCell>
                <TableCell>{agency.location}</TableCell>
                <TableCell>{agency.email}</TableCell>
                <TableCell>{agency.phone}</TableCell>
                <TableCell>
                  <IconButton color="secondary" onClick={() => deleteAgencies(agency.id)}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton color="primary" component={Link} to={`${agency.id}`}>
                    <EditIcon />
                  </IconButton>
                  <IconButton component={Link} to={`agency-details/${agency.id}`}>
                    <InfoIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    </SideBar>
  );
};

export default Agencies;

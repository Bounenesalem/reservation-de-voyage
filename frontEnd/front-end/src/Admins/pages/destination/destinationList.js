// import axios from "axios";
// import { useState ,useEffect } from "react";

// import { Link } from "react-router-dom";

// export default function DestinationList(){
//     const [destinations,setDestinations]=useState([]);
//     const [runAgencies,setRunAgencies]=useState(0);

//     useEffect(()=>{
//         fetch(" http://127.0.0.1:8000/api/destination ")
//         .then((res)=>res.json())
//         .then((data)=>setDestinations(data))
//     },[runAgencies]);

//     async function deleteAgencies(id){
//        try{ 
//       const res=await  axios.delete( `http://127.0.0.1:8000/api/destination/${id}`);
//         if(res.status===200){
//             setRunAgencies((prev)=> prev+1)
//         }
    
//         }catch{
//             console.log("none");
//         }
//     }

//     const showDestinations=destinations.map((destination,index)=>(
//         <tr key={index}>
//             <td>{index +1}</td>
//             <td>{destination.name}</td>
//             <td>{destination.description }</td>
//             <td>{destination.date }</td>
//             <td>{destination.budget }</td>
            
//             <td>
//                 <button onClick={()=>deleteAgencies(destination.id)} className="btn btn-danger">delete</button> 
//                  <Link to={`${destination.id}`} className="btn btn-success">update</Link>
//                  <Link to={`details/${destination.id}`} className="btn btn-info">Details</Link>
//             </td>
//         </tr>
//     ));
    

//     return (
//         <>
//         <div > 
//             <Link to={"create"} className="btn btn-success"  >create Destination</Link>
//         </div>
//         <div>
             
            
//             <h2>Destination listing</h2>
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>id</th>
//                         <th>Name</th>
//                         <th>Description</th>
//                         <th>Date</th>
//                         <th>Budget</th>                    
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                    {showDestinations}
//                 </tbody>
//             </table>
//         </div>
//         </>
//     )
// }



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, IconButton } from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon, Edit as EditIcon, Info as InfoIcon } from '@mui/icons-material';
import SideBar from '../../../component/SideBar';

const DestinationList = () => {
  const [destinations, setDestinations] = useState([]);
  const [runDestinations, setRunDestinations] = useState(0);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/destination")
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, [runDestinations]);

  async function deleteDestination(id) {
    try {
      const res = await axios.delete(`http://127.0.0.1:8000/api/destination/${id}`);
      if (res.status === 200) {
        setRunDestinations((prev) => prev + 1);
      }
    } catch {
      console.log("Error deleting destination.");
    }
  }

  return (
    <SideBar>
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>
        Destination Listing
      </Typography>
      <Box mb={2} display="flex" alignItems="center">
        <IconButton color="primary" component={Link} to="create">
          <AddIcon />
        </IconButton>
        <Typography variant="h6" ml={1}>
          Add Destination
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Budget</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {destinations.map((destination, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{destination.name}</TableCell>
                <TableCell>{destination.description}</TableCell>
                <TableCell>{destination.date}</TableCell>
                <TableCell>{destination.budget}</TableCell>
                <TableCell>
                  <IconButton color="secondary" onClick={() => deleteDestination(destination.id)}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton color="primary" component={Link} to={`${destination.id}`}>
                    <EditIcon />
                  </IconButton>
                  <IconButton component={Link} to={`details/${destination.id}`}>
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

export default DestinationList;

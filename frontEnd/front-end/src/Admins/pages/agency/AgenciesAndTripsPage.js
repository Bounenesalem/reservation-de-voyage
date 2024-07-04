// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const PageAgencies = () => {
//   const [agencies, setAgencies] = useState([]);
  



//     useEffect(() => {
        
//         axios.get('http://127.0.0.1:8000/api/agency')
//         .then(response => {
//           setAgencies(response.data);
//         })
//         .catch(error => {
//           console.error('There was an error fetching the agencies!', error);
//         });
       
//     }, []);

   
  

  
//   return (
//     <div className="container">
//     <h2 className="my-4">Agencies And Their Trips</h2>
//     {agencies.map(agency => (
//       <div key={agency.id} className="mb-5">
//         <h3>{agency.name}</h3>
        
<<<<<<< HEAD
        <h4>Trips:</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Destination Name</th>
              <th> Ville de depart</th>
              <th>Time de voyage</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Price</th>
              {/* <th>Availability</th> */}
            </tr>
          </thead>
          <tbody>
            {agency.trips.map(trip => (
              <tr key={trip.id}>
                 <td>{trip.destination.name}</td>
                 <td>{trip. Ville_de_depart}</td>
                 <td>{trip.Time}</td>
                <td>{trip.start_date}</td>
                <td>{trip.end_date}</td>
                <td>{trip.price}</td>
=======
//         <h4>Trips:</h4>
//         <table className="table table-striped">
//           <thead>
//             <tr>
//               <th>Destination Name</th>
//               <th>Start Date</th>
//               <th>End Date</th>
//               <th>Price</th>
//               {/* <th>Availability</th> */}
//             </tr>
//           </thead>
//           <tbody>
//             {agency.trips.map(trip => (
//               <tr key={trip.id}>
//                  <td>{trip.destination.name}</td>
//                 <td>{trip.start_date}</td>
//                 <td>{trip.end_date}</td>
//                 <td>{trip.price}</td>
>>>>>>> 82dd2afc408d126c1edf0aba09e6b7e95635a212
              
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     ))}
//   </div>
// );

// };

// export default PageAgencies;




// src/pages/PageAgencies.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';
import SideBar from '../../../component/SideBar';

const PageAgencies = () => {
  const [agencies, setAgencies] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/agency')
      .then(response => {
        setAgencies(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the agencies!', error);
      });
  }, []);

  return (
    <SideBar>
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>
        Agencies And Their Trips
      </Typography>
      {agencies.map(agency => (
        <Box mb={5} key={agency.id}>
          <Typography variant="h5" gutterBottom>
            {agency.name}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Trips:
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Destination Name</TableCell>
                  <TableCell>Start Date</TableCell>
                  <TableCell>End Date</TableCell>
                  <TableCell>Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {agency.trips.map(trip => (
                  <TableRow key={trip.id}>
                    <TableCell>{trip.destination.name}</TableCell>
                    <TableCell>{trip.start_date}</TableCell>
                    <TableCell>{trip.end_date}</TableCell>
                    <TableCell>{trip.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ))}
    </Box>
    </SideBar>
  );
};

export default PageAgencies;

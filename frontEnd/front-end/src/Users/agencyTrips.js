// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const AgencyTrips = ({ selectedAgency, setSelectedTrip, setView }) => {
//   const [agencyTrips, setAgencyTrips] = useState([]);

//   useEffect(() => {
//     if (selectedAgency) {
//       axios.get(`http://127.0.0.1:8000/api/agency/${selectedAgency.id}/trip`)
//         .then(response => {
//           setAgencyTrips(response.data);
//         })
//         .catch(error => {
//           console.error(`Error fetching trips for agency ${selectedAgency.id}!`, error);
//         });
//     }
//   }, [selectedAgency]);

//   const handleTripSelect = (trip) => {
//     setSelectedTrip(trip);
//     setView('tripDetails');
//   };

//   return (
//     <div className="container">
//       <h3>Trips for {selectedAgency.name}</h3>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Destination Name</th>
//             <th>Start Date</th>
//             <th>End Date</th>
//             <th>Price</th>
//             <th>Select</th>
//           </tr>
//         </thead>
//         <tbody>
//           {agencyTrips.map(trip => (
//             <tr key={trip.id}>
//               <td>{trip.destination ? trip.destination.name : 'No destination'}</td>
//               <td>{trip.start_date}</td>
//               <td>{trip.end_date}</td>
//               <td>{trip.price}</td>
//               <td>
//                 <button className="btn btn-primary" onClick={() => handleTripSelect(trip)}>Select</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AgencyTrips;





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography } from '@mui/material';

const AgencyTrips = ({ selectedAgency, setSelectedTrip, setView }) => {
  const [trips, setTrips] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (selectedAgency) {
      axios.get(`http://127.0.0.1:8000/api/agency/${selectedAgency.id}/trip`)
        .then(response => {
          setTrips(response.data);
        })
        .catch(error => {
          console.error(`Error fetching trips for agency ${selectedAgency.id}!`, error);
        });
    }
  }, [selectedAgency]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredTrips = trips.filter(trip =>
    trip.destination.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleTripSelect = (trip) => {
    setSelectedTrip(trip);
    setView('tripDetails');
  };

  return (
    <Container>
      <h3>Trips for {selectedAgency ? selectedAgency.name : 'No agency selected'}</h3>
      <TextField 
        label="Search Trip" 
        variant="outlined" 
        value={searchQuery}
        onChange={handleSearch}
        fullWidth
        margin="normal"
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Destination Name</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Select</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTrips.length > 0 ? (
              filteredTrips.map(trip => (
                <TableRow key={trip.id}>
                  <TableCell>{trip.destination ? trip.destination.name : 'No destination'}</TableCell>
                  <TableCell>{trip.start_date}</TableCell>
                  <TableCell>{trip.end_date}</TableCell>
                  <TableCell>{trip.price}</TableCell>
                  <TableCell>
                    <Button variant="contained" onClick={() => handleTripSelect(trip)}>Select</Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5}>
                  <Typography align="center">البحث غير موجود</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={() => setView('selectAgency')}>عودة</Button>

    </Container>
  );
};

export default AgencyTrips;




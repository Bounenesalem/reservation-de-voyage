// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const SelectAgency = ({ setSelectedAgency, setView }) => {
//   const [agencies, setAgencies] = useState([]);

//   useEffect(() => {
//     axios.get('http://127.0.0.1:8000/api/agency')
//       .then(response => {
//         setAgencies(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the agencies!', error);
//       });
//   }, []);

//   const handleAgencySelect = (event) => {
//     const agencyId = event.target.value;
//     const agency = agencies.find(a => a.id === parseInt(agencyId));
//     setSelectedAgency(agency);
//     setView('agencyTrips');
//   };

//   return (
//     <div className="container">
//       <h2 className="my-4">Select Agency</h2>
//       <div className="mb-3">
//         <label htmlFor="agencySelect" className="form-label">Select Agency:</label>
//         <select id="agencySelect" className="form-select" onChange={handleAgencySelect}>
//           <option value="">Select an agency</option>
//           {agencies.map(agency => (
//             <option key={agency.id} value={agency.id}>{agency.name}</option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

// export default SelectAgency;


// without search

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const SelectAgency = ({ setSelectedAgency, setView }) => {
//   const [agencies, setAgencies] = useState([]);

//   useEffect(() => {
//     axios.get('http://127.0.0.1:8000/api/agency')
//       .then(response => {
//         setAgencies(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the agencies!', error);
//       });
//   }, []);

//   const handleAgencySelect = (agency) => {
//     setSelectedAgency(agency);
//     setView('agencyTrips');
//   };

//   return (
//     <div className="container">
//       <h2 className="my-4">Select Agency</h2>
//       <div className="list-group">
//         {agencies.map(agency => (
//           <button
//             key={agency.id}
//             className="list-group-item list-group-item-action"
//             onClick={() => handleAgencySelect(agency)}
//           >
//             {agency.name}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SelectAgency;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography } from '@mui/material';

const SelectAgency = ({ setSelectedAgency, setView }) => {
  const [agencies, setAgencies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/agency')
      .then(response => {
        setAgencies(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the agencies!', error);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredAgencies = agencies.filter(agency =>
    agency.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAgencySelect = (agency) => {
    setSelectedAgency(agency);
    setView('agencyTrips');
  };

  return (
    <Container>
      <h3>Select Agency</h3>
      <TextField 
        label="Search Agency" 
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
              <TableCell>Agency Name</TableCell>
              <TableCell align="right">Select</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredAgencies.length > 0 ? (
              filteredAgencies.map(agency => (
                <TableRow key={agency.id}>
                  <TableCell>{agency.name}</TableCell>
                  <TableCell align="right">
                    <Button  variant="contained"  onClick={() => handleAgencySelect(agency)}>Select</Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={2}>
                  <Typography align="center">البحث غير موجود</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default SelectAgency;



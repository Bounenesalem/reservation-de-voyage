// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const AgencyDetailsPage = () => {
//     const { agencyId } = useParams();
//     const [agency, setAgency] = useState([]);

//     useEffect(() => {
//         const fetchAgencyDetails = async () => {
//             try {
//                 const response = await axios.get(`http://127.0.0.1:8000/api/agency/${agencyId}`);
//                 setAgency(response.data);
//             } catch (error) {
//                 console.error('Error fetching trip details:', error);
//             }
//         };

//         fetchAgencyDetails();
//     }, [agencyId]);

//     // if (!agency) {
//     //     return <div>Loading...</div>;
//     // }

//     return (
//         <div>
//             <h1>Agency Details</h1>
//             <p>Name: {agency.name}</p>
//             <p>Description: {agency.description}</p>
//             <p>Location: {agency.location}</p>
//             <p>Email: {agency.email}</p>
//             <p>Phone: {agency.phone}</p>
//             {/* Display other trip details */}
//         </div>
//     );
// };

// export default AgencyDetailsPage;



// src/pages/AgencyDetailsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Box, Typography, Paper,  } from '@mui/material';
import SideBar from '../../../component/SideBar';

const AgencyDetailsPage = () => {
  const { agencyId } = useParams();
  const [agency, setAgency] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/agency/${agencyId}`)
      .then(response => {
        setAgency(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the agency details!', error);
      });
  }, [agencyId]);

  if (!agency) return <Typography>Loading...</Typography>;

  return (
    <SideBar>
    <Box mt={4}>
      <Paper>
        <Box p={4}>
          <Typography variant="h4" gutterBottom>
            Agency Details
          </Typography>
          <Typography variant="h5" gutterBottom>
            Name: {agency.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Description: {agency.description}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Location: {agency.location}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Email: {agency.email}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Phone: {agency.phone}
          </Typography>
          
        </Box>
      </Paper>
    </Box>
    </SideBar>
  );
};

export default AgencyDetailsPage;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const DestinationDetails = () => {
//     const { destinationId } = useParams();
//     const [destination, setDestination] = useState([]);

//     useEffect(() => {
//         const fetchAgencyDetails = async () => {
//             try {
//                 const response = await axios.get(`http://127.0.0.1:8000/api/destination/${destinationId}`);
//                 setDestination(response.data);
//             } catch (error) {
//                 console.error('Error fetching trip details:', error);
//             }
//         };

//         fetchAgencyDetails();
//     }, [destinationId]);

//     // if (!agency) {
//     //     return <div>Loading...</div>;
//     // }

//     return (
//         <div>
//             <h1>Destination Details</h1>
//             <p>Name: {destination.name}</p>
//             <p>Description: {destination.description}</p>
//             <p>Date: {destination.date}</p>
//             <p>Budget: {destination.budget}</p>
//             {/* Display other trip details */}
//         </div>
//     );
// };

// export default DestinationDetails;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Box, Typography, Paper } from '@mui/material';
import SideBar from '../../../component/SideBar';

const DestinationDetails = () => {
  const { destinationId } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    const fetchDestinationDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/destination/${destinationId}`);
        setDestination(response.data);
      } catch (error) {
        console.error('Error fetching destination details:', error);
      }
    };

    fetchDestinationDetails();
  }, [destinationId]);

  if (!destination) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  return (
    <SideBar>
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>
        Destination Details
      </Typography>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h6">Name: {destination.name}</Typography>
        <Typography variant="body1">Description: {destination.description}</Typography>
        <Typography variant="body1">Date: {destination.date}</Typography>
        <Typography variant="body1">Budget: {destination.budget}</Typography>
      </Paper>
    </Box>
    </SideBar>
  );
};

export default DestinationDetails;

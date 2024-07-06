// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Grid, Paper, Typography, CircularProgress } from '@mui/material';

// const TripInformation = ({ tripId, numPeople }) => {
//   const [trip, setTrip] = useState(null);

//   useEffect(() => {
//     axios.get(`http://127.0.0.1:8000/api/trip/${tripId}`)
//       .then(response => {
//         setTrip(response.data);
//       })
//       .catch(error => {
//         console.error(`Error fetching trip ${tripId}!`, error);
//       });
//   }, [tripId]);

//   const totalCost=trip?(parseFloat(trip.price)*parseInt(numPeople,10)):0;

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//       Trip Information
//       </Typography>
//       {trip ? (
//         <Paper elevation={3} style={{ padding: '20px' }}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <Typography variant="h6"><strong>Destination:</strong></Typography>
//               <Typography variant="body1">{trip.destination ? trip.destination.name : 'لا توجد وجهة'}</Typography>
//             </Grid>
//             <Grid item xs={12}>
//               <Typography variant="h6"><strong>Agency:</strong></Typography>
//               <Typography variant="body1">{trip.agency ? trip.agency.name : 'لا توجد وكالة'}</Typography>
//             </Grid>
//             <Grid item xs={12}>
//               <Typography variant="h6"><strong> Start Date:</strong></Typography>
//               <Typography variant="body1">{trip.start_date}</Typography>
//             </Grid>
//             <Grid item xs={12}>
//               <Typography variant="h6"><strong> End Date:</strong></Typography>
//               <Typography variant="body1">{trip.end_date}</Typography>
//             </Grid>
//             <Grid item xs={12}>
//               <Typography variant="h6"><strong> Price Per Person:</strong></Typography>
//               <Typography variant="body1">{trip.price}</Typography>
//             </Grid>
//             <Grid item xs={12}>
//               <Typography variant="h6"><strong> Total Cost:</strong></Typography>
//               <Typography variant="body1">{totalCost}</Typography>
//             </Grid>
//           </Grid>
//         </Paper>
//       ) : (
//         <CircularProgress />
//       )}
//     </Container>
//   );
// };

// export default TripInformation;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Paper, Typography, CircularProgress, Button } from '@mui/material';
import html2canvas from 'html2canvas';

const TripInformation = ({ tripId, numPeople }) => {
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/trip/${tripId}`)
      .then(response => {
        setTrip(response.data);
      })
      .catch(error => {
        console.error(`Error fetching trip ${tripId}!`, error);
      });
  }, [tripId]);

  const totalCost = trip ? (parseFloat(trip.price) * parseInt(numPeople, 10)) : 0;

  const handleScreenshot = () => {
    html2canvas(document.querySelector("#trip-information")).then(canvas => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "trip-information.png";
      link.click();
    });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Trip Information
      </Typography>
      {trip ? (
        <Paper elevation={3} style={{ padding: '20px' }} id="trip-information">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6"><strong>Destination:</strong></Typography>
              <Typography variant="body1">{trip.destination ? trip.destination.name : 'لا توجد وجهة'}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6"><strong>Agency:</strong></Typography>
              <Typography variant="body1">{trip.agency ? trip.agency.name : 'لا توجد وكالة'}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6"><strong>Start Date:</strong></Typography>
              <Typography variant="body1">{trip.start_date}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6"><strong>End Date:</strong></Typography>
              <Typography variant="body1">{trip.end_date}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6"><strong>Price Per Person:</strong></Typography>
              <Typography variant="body1">{trip.price}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6"><strong>Total Cost:</strong></Typography>
              <Typography variant="body1">{totalCost}</Typography>
            </Grid>
          </Grid>
        </Paper>
      ) : (
        <CircularProgress />
      )}
      {trip && (
        <Button variant="contained" color="primary" onClick={handleScreenshot} style={{ marginTop: '20px' }}>
          Capture Screenshot
        </Button>
      )}
    </Container>
  );
};

export default TripInformation;

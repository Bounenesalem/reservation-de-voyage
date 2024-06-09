// // TripDetails.js
// import React from 'react';

// const TripDetails = ({ trip, onBookingClick }) => {
//   return (
//     <div className="container">
//       <h2>تفاصيل الرحلة</h2>
//       <p><strong>الوجهة:</strong> {trip.destination ? trip.destination.name : 'لا توجد وجهة'}</p>
//       <p><strong>تاريخ البداية:</strong> {trip.start_date}</p>
//       <p><strong>تاريخ النهاية:</strong> {trip.end_date}</p>
//       <p><strong>السعر:</strong> {trip.price}</p>
//       <p><strong>الوصف:</strong> {trip.description}</p>
//       <button className="btn btn-primary" onClick={onBookingClick}>حجز</button>
//     </div>
//   );
// };

// export default TripDetails;



// ### TripDetails.js

// ```javascript
import React from 'react';
import { Container, Button } from '@mui/material';

const TripDetails = ({ trip, onBookingClick }) => {
  return (
    <Container>
      <h2>Trip Details</h2>
      {trip ? (
        <div>
          <p><strong>Destination:</strong> {trip.destination ? trip.destination.name : 'No destination'}</p>
          <p><strong>Ville de depart:</strong> {trip.Ville_de_depart}</p>
          <p><strong>Agency:</strong> {trip.agency ? trip.agency.name : 'No agency'}</p>
          <p><strong>Time de depart:</strong> {trip.Time}</p>
          <p><strong>Start Date:</strong> {trip.start_date}</p>
          <p><strong>End Date:</strong> {trip.end_date}</p>
          <p><strong>Price:</strong> {trip.price}</p>
          <Button variant="contained" onClick={onBookingClick}>Book Now</Button>
        </div>
      ) : (
        <p>No trip selected</p>
      )}
    </Container>
  );
};

export default TripDetails;



// import React from 'react';
// import { Container, Paper, Typography, Grid } from '@mui/material';
// import BookingForm from './bookingForm';

// const TripDetails = ({ selectedTrip }) => {
//   return (
//     <Container>
//       <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
//         <Typography variant="h4" gutterBottom>
//           تفاصيل الرحلة
//         </Typography>
//         <Typography variant="body1"><strong>الوجهة:</strong> {selectedTrip.destination ? selectedTrip.destination.name : 'لا يوجد وجهة'}</Typography>
//         <Typography variant="body1"><strong>تاريخ البدء:</strong> {selectedTrip.start_date}</Typography>
//         <Typography variant="body1"><strong>تاريخ الانتهاء:</strong> {selectedTrip.end_date}</Typography>
//         <Typography variant="body1"><strong>السعر:</strong> {selectedTrip.price}</Typography>
//         <Typography variant="body1"><strong>الوصف:</strong> {selectedTrip.description}</Typography>
//         <Typography variant="body1"><strong>الوكالة:</strong> {selectedTrip.agency ? selectedTrip.agency.name : 'لا يوجد وكالة'}</Typography>
//       </Paper>
//       <BookingForm trip={selectedTrip} />
//     </Container>
//   );
// };

// export default TripDetails;


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
          <p><strong>Agency:</strong> {trip.agency ? trip.agency.name : 'No agency'}</p>
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


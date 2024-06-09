// // TripInformation.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const TripInformation = ({ tripId, numPeople }) => {
//   const [tripInfo, setTripInfo] = useState(null);
//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
//     axios.get(`http://127.0.0.1:8000/api/trip/${tripId}`)
//       .then(response => {
//         const tripData = response.data;
//         setTripInfo(tripData);
//         setTotalPrice(tripData.price * numPeople);
//       })
//       .catch(error => {
//         console.error('Error fetching trip information:', error);
//       });
//   }, [tripId, numPeople]);

//   return (
//     <div className="container">
//       <h2>معلومات الرحلة</h2>
//       {tripInfo && (
//         <div>
//           <p><strong>الوجهة:</strong> {tripInfo.destination ? tripInfo.destination.name : 'لا توجد وجهة'}</p>
//           <p><strong>تاريخ البداية:</strong> {tripInfo.start_date}</p>
//           <p><strong>تاريخ النهاية:</strong> {tripInfo.end_date}</p>
//           <p><strong>السعر للشخص الواحد:</strong> {tripInfo.price}</p>
//           <p><strong>السعر الإجمالي:</strong> {totalPrice}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TripInformation;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container  } from '@mui/material';

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

  return (
    <Container>
      <h2>Trip Information</h2>
      {trip ? (
        <div>
          <p><strong>Destination:</strong> {trip.destination ? trip.destination.name : 'No destination'}</p>
          <p><strong>Ville de depart:</strong> {trip.Ville_de_depart}</p>
          <p><strong>Agency:</strong> {trip.agency ? trip.agency.name : 'No agency'}</p>
          <p><strong>Time de depart:</strong> {trip.Time}</p>
          <p><strong>Start Date:</strong> {trip.start_date}</p>
          <p><strong>End Date:</strong> {trip.end_date}</p>
          <p><strong>Price per Person:</strong> {trip.price}</p>
          <p><strong>Total Price:</strong> {trip.price * numPeople}</p>
        </div>
      ) : (
        <p>Loading trip information...</p>
      )}
      
    </Container>
  );
};

export default TripInformation;

// // BookingForm.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const BookingForm = ({ tripId, onBookingComplete }) => {
//   const [name, setName] = useState('');
//   const [numPeople, setNumPeople] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleBooking = async (event) => {
//     event.preventDefault();
//     const token = localStorage.getItem('token');

//     try {
//       const response = await axios.post(`http://127.0.0.1:8000/api/trip/${tripId}/reserve`, 
//         { name, num_people: numPeople },
//         {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//           },
//         }
//       );

//       setSuccess('تم الحجز بنجاح!');
//       setError('');
//       onBookingComplete(numPeople);
//     } catch (error) {
//       setError('حدث خطأ أثناء الحجز!');
//       setSuccess('');
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container">
//       <h2 className="my-4">نموذج الحجز</h2>
//       {error && <p className="text-danger">{error}</p>}
//       {success && <p className="text-success">{success}</p>}
//       <form onSubmit={handleBooking}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">الاسم</label>
//           <input
//             type="text"
//             id="name"
//             className="form-control"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="numPeople" className="form-label">عدد الأشخاص</label>
//           <input
//             type="number"
//             id="numPeople"
//             className="form-control"
//             value={numPeople}
//             onChange={(e) => setNumPeople(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">احجز الآن</button>
//       </form>
//     </div>
//   );
// };

// export default BookingForm;



import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography } from '@mui/material';

const BookingForm = ({ tripId, onBookingComplete }) => {
  const [name, setName] = useState('');
  const [numPeople, setNumPeople] = useState(0);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleBooking = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
    
        try {
          const response = await axios.post(`http://127.0.0.1:8000/api/trip/${tripId}/reserve`, 
            { name, num_people: numPeople },
            {
              headers: {
                'Authorization': `Bearer ${token}`,
              },
            }
          );
      setSuccess('Booking successful!');
      onBookingComplete(numPeople);
    } catch (error) {
      setError('There was an error making the reservation!');
      console.error(error);
    }
  };

  return (
    <Container>
      <h2 className="my-4">Book Trip</h2>
      {error && <Typography color="error">{error}</Typography>}
      {success && <Typography color="success">{success}</Typography>}
      <form onSubmit={handleBooking}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Number of People"
          variant="outlined"
          type="number"
          value={numPeople}
          onChange={(e) => setNumPeople(parseInt(e.target.value))}
          required
        />
        <Button type="submit" variant="contained">Book Now</Button>
      </form>
    </Container>
  );
};

export default BookingForm;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { Container, TextField, Button, Typography } from '@mui/material';

// const BookingForm = ({ tripId, onBookingComplete }) => {
//   const [name, setName] = useState('');
//   const [numPeople, setNumPeople] = useState(0);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleBooking = async (event) => {
//         event.preventDefault();
//         const token = localStorage.getItem('token');
    
//         try {
//           const response = await axios.post(`http://127.0.0.1:8000/api/trip/${tripId}/reserve`, 
//             { name, num_people: numPeople },
//             {
//               headers: {
//                 'Authorization': `Bearer ${token}`,
//               },
//             }
//           );
//       setSuccess('Booking successful!');
//       onBookingComplete(numPeople);
//     } catch (error) {
//       setError('There was an error making the reservation!');
//       console.error(error);
//     }
//   };

//   return (
//     <Container>
//       <h2 className="my-4">Book Trip</h2>
//       {error && <Typography color="error">{error}</Typography>}
//       {success && <Typography color="success">{success}</Typography>}
//       <form onSubmit={handleBooking}>
//         <TextField
//           label="Name"
//           variant="outlined"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <TextField
//           label="Number of People"
//           variant="outlined"
//           type="number"
//           value={numPeople}
//           onChange={(e) => setNumPeople(parseInt(e.target.value))}
//           required
//         />
//         <Button type="submit" variant="contained">Book Now</Button>
//       </form>
//     </Container>
//   );
// };

// export default BookingForm;







import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Grid, Paper } from '@mui/material';

const BookingForm = ({ tripId, onBookingComplete }) => {
  const [name, setName] = useState('');
  const [numPeople, setNumPeople] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [bookingDetails, setBookingDetails] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/trip/${tripId}`)
      .then(response => {
        setTrip(response.data);
      })
      .catch(error => {
        console.error('Error fetching trip details:', error);
      });
  }, [tripId]);

  const handleBooking = async (event) => {
    event.preventDefault();
    setShowPayment(true);
  };

  const confirmPayment = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`http://127.0.0.1:8000/api/trip/${trip.id}/reserve`, 
        { name, num_people: numPeople },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );
      setSuccess('تم الحجز بنجاح!');
      setError('');
      setShowPayment(false);
      setBookingDetails(response.data);
      onBookingComplete();
    } catch (error) {
      setError('حدث خطأ أثناء الحجز!');
      setSuccess('');
      console.error(error);
    }
  };

  if (!trip) {
    return <Typography variant="h6">الرحلة غير موجودة</Typography>;
  }

  const totalCost = trip.price * (numPeople || 0);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
              تفاصيل الرحلة
            </Typography>
            <Typography variant="body1"><strong>الوجهة:</strong> {trip.destination ? trip.destination.name : 'لا يوجد وجهة'}</Typography>
            <Typography variant="body1"><strong>تاريخ البدء:</strong> {trip.start_date}</Typography>
            <Typography variant="body1"><strong>تاريخ الانتهاء:</strong> {trip.end_date}</Typography>
            <Typography variant="body1"><strong>السعر للفرد:</strong> {trip.price}</Typography>
            <Typography variant="body1"><strong>الوصف:</strong> {trip.description}</Typography>
            <Typography variant="body1"><strong>الوكالة:</strong> {trip.agency ? trip.agency.name : 'لا يوجد وكالة'}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
              حجز الرحلة
            </Typography>
            {error && <Typography color="error">{error}</Typography>}
            {success && <Typography color="primary">{success}</Typography>}
            <form onSubmit={handleBooking}>
              <TextField 
                label="الاسم" 
                variant="outlined" 
                fullWidth 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                margin="normal"
              />
              <TextField 
                label="عدد الأشخاص" 
                variant="outlined" 
                type="number" 
                fullWidth 
                value={numPeople}
                onChange={(e) => setNumPeople(e.target.value)}
                required
                margin="normal"
              />
              <Typography variant="body1" style={{ marginTop: '20px' }}>
                <strong>التكلفة الإجمالية:</strong> {totalCost}
              </Typography>
              <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
                احجز الآن
              </Button>
            </form>
            {showPayment && (
              <div>
                <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
                  تفاصيل الدفع
                </Typography>
                <Typography variant="body1">رقم الوكالة: {trip.agency ? trip.agency.phone : 'لا يوجد رقم وكالة'}</Typography>
                <Button variant="contained" color="secondary" fullWidth onClick={confirmPayment} style={{ marginTop: '20px' }}>
                  تأكيد الدفع
                </Button>
              </div>
            )}
          </Paper>
        </Grid>
      </Grid>

      {bookingDetails && (
        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
          <Typography variant="h5" gutterBottom>
            تفاصيل الحجز
          </Typography>
          <Typography variant="body1"><strong>الاسم:</strong> {bookingDetails.name}</Typography>
          <Typography variant="body1"><strong>عدد الأشخاص:</strong> {bookingDetails.num_people}</Typography>
          <Typography variant="body1"><strong>الحالة:</strong> {bookingDetails.status}</Typography>
          <Typography variant="body1"><strong>الرحلة:</strong> {trip.destination ? trip.destination.name : 'لا يوجد وجهة'}</Typography>
          <Typography variant="body1"><strong>الوكالة:</strong> {trip.agency ? trip.agency.name : 'لا يوجد وكالة'}</Typography>
        </Paper>
      )}
    </Container>
  );
};

export default BookingForm;



// import React, { useState } from 'react';
// import axios from 'axios';

// const BookingForm = ({ trip, onBookingComplete }) => {
//   const [name, setName] = useState('');
//   const [numPeople, setNumPeople] = useState(1);
//   const [paymentCode, setPaymentCode] = useState('');
//   const [success, setSuccess] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token');

//     try {
//       const response = await axios.post(`http://127.0.0.1:8000/api/trip/${trip.id}/reserve`, 
//         { name, num_people: numPeople },
//         {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//           },
//         }
//       );

//       const bookingId = response.data.booking.id;
      
//       const paymentResponse = await axios.post(`http://127.0.0.1:8000/api/booking/${bookingId}/verify-payment`, 
//         { payment_code: paymentCode },
//         {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//           },
//         }
//       );

//       if (paymentResponse.data.message === 'Payment verified and booking confirmed') {
//         setSuccess('Booking successful and payment verified!');
//         setError('');
//         onBookingComplete();
//       } else {
//         setError('Payment verification failed.');
//         setSuccess('');
//       }

//     } catch (error) {
//       setError('There was an error making the reservation!');
//       setSuccess('');
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Book Your Trip</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">Name</label>
//           <input 
//             type="text" 
//             className="form-control" 
//             id="name" 
//             value={name} 
//             onChange={(e) => setName(e.target.value)} 
//             required 
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="numPeople" className="form-label">Number of People</label>
//           <input 
//             type="number" 
//             className="form-control" 
//             id="numPeople" 
//             value={numPeople} 
//             onChange={(e) => setNumPeople(parseInt(e.target.value))} 
//             required 
//             min="1" 
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="paymentCode" className="form-label">Payment Code</label>
//           <input 
//             type="text" 
//             className="form-control" 
//             id="paymentCode" 
//             value={paymentCode} 
//             onChange={(e) => setPaymentCode(e.target.value)} 
//             required 
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">Reserve</button>
//       </form>
//       {success && <div className="alert alert-success mt-3">{success}</div>}
//       {error && <div className="alert alert-danger mt-3">{error}</div>}
//     </div>
//   );
// };

// export default BookingForm;

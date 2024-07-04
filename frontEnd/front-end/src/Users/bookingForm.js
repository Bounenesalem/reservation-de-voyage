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
import Select from 'react-select';

const BookingForm = ({ tripId, onBookingComplete }) => {
  const [name, setName] = useState('');
  const [numPeople, setNumPeople] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [bookingDetails, setBookingDetails] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [trip, setTrip] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [screenshot, setScreenshot] = useState(null);

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
    if (!paymentMethod || !screenshot) {
      setError('الرجاء اختيار طريقة دفع ورفع لقطة الشاشة.');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('name', name);
      formData.append('num_people', numPeople);
      formData.append('payment_method', paymentMethod.value);
      formData.append('screenshot', screenshot);

      const response = await axios.post(`http://127.0.0.1:8000/api/trip/${trip.id}/reserve`, 
        formData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setSuccess('تم إرسال الحجز للمراجعة!');
      setError('');
      setShowPayment(false);
      setBookingDetails(response.data);
      onBookingComplete();
    } catch (error) {
      setError('حدث خطأ أثناء إرسال الحجز للمراجعة!');
      setSuccess('');
      console.error(error);
    }
  };

  if (!trip) {
    return <Typography variant="h6">الرحلة غير موجودة</Typography>;
  }

  const totalCost = trip.price * (numPeople || 0);

  const paymentOptions = [
    { value: 'بنكيلي', label: 'بنكيلي', imageUrl: '/images/bankily.jpeg' },
    { value: 'مصرفي', label: 'مصرفي', imageUrl: '/images/masrivi.jpeg' },
    { value: 'سداد', label: 'سداد', imageUrl: '/images/sedad.jpeg' }
  ];

  const formatOptionLabel = ({ label, imageUrl }) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={imageUrl} alt={label} style={{ width: 30, marginRight: 10 }} />
      {label}
    </div>
  );

  return (
    <Container>
           <Grid container spacing={3}>
             <Grid item xs={12} md={6}>
               <Paper elevation={3} style={{ padding: '20px' }}>
                 <Typography variant="h5" gutterBottom>
                    Trip Details
                 </Typography>
                 <Typography variant="body1"><strong>Destination:</strong> {trip.destination ? trip.destination.name : '  there is no destination'}</Typography>
                 <Typography variant="body1"><strong> Start Date:</strong> {trip.start_date}</Typography>
                 <Typography variant="body1"><strong> End Date:</strong> {trip.end_date}</Typography>
                 <Typography variant="body1"><strong> price per person:</strong> {trip.price}</Typography>
                 <Typography variant="body1"><strong>Description:</strong> {trip.description}</Typography>
                 <Typography variant="body1"><strong>Agency:</strong> {trip.agency ? trip.agency.name : '   there is no agency'}</Typography>
               </Paper>
             </Grid>
             <Grid item xs={12} md={6}>
               <Paper elevation={3} style={{ padding: '20px' }}>
                 <Typography variant="h5" gutterBottom>
                    Book A Trip
                 </Typography>
                 {error && <Typography color="error">{error}</Typography>}
                 {success && <Typography color="primary">{success}</Typography>}
                 <form onSubmit={handleBooking}>
              <TextField 
                    label="Name" 
                    variant="outlined" 
                    fullWidth 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    margin="normal"
                  />
                  <TextField 
                    label=" number person" 
                    variant="outlined" 
                    type="number" 
                    fullWidth 
                    value={numPeople}
                    onChange={(e) => setNumPeople(e.target.value)}
                    required
                    margin="normal"
                  />
                  <Typography variant="body1" style={{ marginTop: '20px' }}>
                    <strong> total Cost:</strong> {totalCost}
                  </Typography>
                  {trip.agency && (
                    <Typography variant="body1">
                      <strong> Agency Phone:</strong> {trip.agency.phone}
                    </Typography>
                  )}
                  <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
                     Book Now
                  </Button>
                </form>
                {showPayment && (
                  <div>
                    <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
                       Payment Details 
                    </Typography>
                    <Select
                      value={paymentMethod}
                      onChange={(option) => setPaymentMethod(option)}
                      options={paymentOptions}
                      formatOptionLabel={formatOptionLabel}
                      placeholder="  Choose Payment Method"
                      styles={{
                        option: (styles) => ({ ...styles, display: 'flex', alignItems: 'center' }),
                        singleValue: (styles) => ({ ...styles, display: 'flex', alignItems: 'center' })
                      }}
                    />
                    <TextField 
                      type="file" 
                      fullWidth 
                      onChange={(e) => setScreenshot(e.target.files[0])}
                    />
                    <Button variant="contained" color="secondary" fullWidth onClick={confirmPayment} style={{ marginTop: '20px' }}>
                       Payment Confirmation
                    </Button>
                  </div>
                )}
              </Paper>
            </Grid>
          </Grid>
    
          {bookingDetails && (
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
              <Typography variant="h5" gutterBottom>
                Trip  Details 
              </Typography>
              <Typography variant="body1"><strong>Name:</strong> {bookingDetails.name}</Typography>
              <Typography variant="body1"><strong>Number Person :</strong> {bookingDetails.num_people}</Typography>
              <Typography variant="body1"><strong>Status:</strong> {bookingDetails.status}</Typography>
              <Typography variant="body1"><strong>Trip:</strong> {trip.destination ? trip.destination.name : 'لا يوجد وجهة'}</Typography>
              <Typography variant="body1"><strong>Agency:</strong> {trip.agency ? trip.agency.name : 'لا يوجد وكالة'}</Typography>
            </Paper>
          )}
        </Container>
      );
    };
    export default BookingForm;


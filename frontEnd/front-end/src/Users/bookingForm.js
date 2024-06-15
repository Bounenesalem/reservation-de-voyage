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







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, TextField, Button, Typography, Grid, Paper } from '@mui/material';

// const BookingForm = ({ tripId, onBookingComplete }) => {
//   const [name, setName] = useState('');
//   const [numPeople, setNumPeople] = useState('');
//   const [status, setStatus] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [bookingDetails, setBookingDetails] = useState(null);
//   const [showPayment, setShowPayment] = useState(false);
//   const [trip, setTrip] = useState(null);
//   const [paymentScreenshot, setPaymentScreenshot] = useState(null);

//   useEffect(() => {
//     axios.get(`http://127.0.0.1:8000/api/trip/${tripId}`)
//       .then(response => {
//         setTrip(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching trip details:', error);
//       });
//   }, [tripId]);

//   const handleBooking = async (event) => {
//     event.preventDefault();
//     setShowPayment(true);
//   };

//   const handleScreenshotUpload = (event) => {
//     setPaymentScreenshot(event.target.files[0]);
//   };

//   const confirmPayment = async () => {
//     if (!paymentScreenshot) {
//       setError('يرجى تحميل صورة إثبات الدفع!');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('num_people', numPeople);
//     formData.append('payment_screenshot', paymentScreenshot);

//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.post(`http://127.0.0.1:8000/api/trip/${trip.id}/reserve`, 
//         formData,
//         {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'multipart/form-data',
//           },
//         }
//       );
//       setSuccess('تم الحجز بنجاح!');
//       setError('');
//       setShowPayment(false);
//       setBookingDetails(response.data);
//       onBookingComplete();
//     } catch (error) {
//       setError('حدث خطأ أثناء الحجز!');
//       setSuccess('');
//       console.error(error);
//     }
//   };

//   if (!trip) {
//     return <Typography variant="h6">الرحلة غير موجودة</Typography>;
//   }

//   const totalCost = trip.price * (numPeople || 0);

//   return (
//     <Container>
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={6}>
//           <Paper elevation={3} style={{ padding: '20px' }}>
//             <Typography variant="h5" gutterBottom>
//               تفاصيل الرحلة
//             </Typography>
//             <Typography variant="body1"><strong>الوجهة:</strong> {trip.destination ? trip.destination.name : 'لا يوجد وجهة'}</Typography>
//             <Typography variant="body1"><strong>تاريخ البدء:</strong> {trip.start_date}</Typography>
//             <Typography variant="body1"><strong>تاريخ الانتهاء:</strong> {trip.end_date}</Typography>
//             <Typography variant="body1"><strong>السعر للفرد:</strong> {trip.price}</Typography>
//             <Typography variant="body1"><strong>الوصف:</strong> {trip.description}</Typography>
//             <Typography variant="body1"><strong>الوكالة:</strong> {trip.agency ? trip.agency.name : 'لا يوجد وكالة'}</Typography>
//           </Paper>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Paper elevation={3} style={{ padding: '20px' }}>
//             <Typography variant="h5" gutterBottom>
//               حجز الرحلة
//             </Typography>
//             {error && <Typography color="error">{error}</Typography>}
//             {success && <Typography color="primary">{success}</Typography>}
//             <form onSubmit={handleBooking}>
//               <TextField 
//                 label="الاسم" 
//                 variant="outlined" 
//                 fullWidth 
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//                 margin="normal"
//               />
//               <TextField 
//                 label="عدد الأشخاص" 
//                 variant="outlined" 
//                 type="number" 
//                 fullWidth 
//                 value={numPeople}
//                 onChange={(e) => setNumPeople(e.target.value)}
//                 required
//                 margin="normal"
//               />
//               <Typography variant="body1" style={{ marginTop: '20px' }}>
//                 <strong>التكلفة الإجمالية:</strong> {totalCost}
//               </Typography>
//               <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
//                 احجز الآن
//               </Button>
//             </form>
//             {showPayment && (
//               <div>
//                 <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
//                   تفاصيل الدفع
//                 </Typography>
//                 <Typography variant="body1">رقم الوكالة: {trip.agency ? trip.agency.payment_number : 'لا يوجد رقم وكالة'}</Typography>
//                 <input
//                   accept="image/*"
//                   type="file"
//                   onChange={handleScreenshotUpload}
//                   style={{ marginTop: '20px' }}
//                 />
//                 <Button variant="contained" color="secondary" fullWidth onClick={confirmPayment} style={{ marginTop: '20px' }}>
//                   تأكيد الدفع
//                 </Button>
//               </div>
//             )}
//           </Paper>
//         </Grid>
//       </Grid>

//       {bookingDetails && (
//         <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
//           <Typography variant="h5" gutterBottom>
//             تفاصيل الحجز
//           </Typography>
//           <Typography variant="body1"><strong>الاسم:</strong> {bookingDetails.name}</Typography>
//           <Typography variant="body1"><strong>عدد الأشخاص:</strong> {bookingDetails.num_people}</Typography>
//           <Typography variant="body1"><strong>الحالة:</strong> {bookingDetails.status}</Typography>
//           <Typography variant="body1"><strong>الرحلة:</strong> {trip.destination ? trip.destination.name : 'لا يوجد وجهة'}</Typography>
//           <Typography variant="body1"><strong>الوكالة:</strong> {trip.agency ? trip.agency.name : 'لا يوجد وكالة'}</Typography>
//         </Paper>
//       )}
//     </Container>
//   );
// };

// export default BookingForm;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Grid, Paper, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

const BookingForm = ({ tripId, onBookingComplete }) => {
  const [name, setName] = useState('');
  const [numPeople, setNumPeople] = useState('');
  const [status, setStatus] = useState('');
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
      formData.append('payment_method', paymentMethod);
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
                <FormControl component="fieldset" style={{ marginBottom: '20px' }}>
                  <FormLabel component="legend">اختر طريقة الدفع</FormLabel>
                  <RadioGroup 
                    value={paymentMethod} 
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  >
                    <FormControlLabel value="بنكيلي" control={<Radio />} label="بنكيلي" />
                    <FormControlLabel value="مصرفي" control={<Radio />} label="مصرفي" />
                    <FormControlLabel value="سداد" control={<Radio />} label="سداد" />
                  </RadioGroup>
                </FormControl>
                <TextField 
                  type="file" 
                  fullWidth 
                  onChange={(e) => setScreenshot(e.target.files[0])}
                />
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

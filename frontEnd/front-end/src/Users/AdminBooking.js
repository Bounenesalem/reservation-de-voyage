import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Paper, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, Card, CardMedia } from '@mui/material';

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://127.0.0.1:8000/api/admin/bookings', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };
    
  }, []);

  const handleApprove = async (bookingId) => {
    try {
      await axios.post(`http://127.0.0.1:8000/api/admin/bookings/${bookingId}/approve`);
      setBookings(bookings.filter(booking => booking.id !== bookingId));
      setOpen(false);
    } catch (error) {
      console.error('Error approving booking:', error);
    }
  };

  const handleReject = async (bookingId) => {
    try {
      await axios.post(`http://127.0.0.1:8000/api/admin/bookings/${bookingId}/reject`);
      setBookings(bookings.filter(booking => booking.id !== bookingId));
      setOpen(false);
    } catch (error) {
      console.error('Error rejecting booking:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        مراجعة الحجوزات
      </Typography>
      <Grid container spacing={3}>
        {bookings.map((booking) => (
          <Grid item xs={12} sm={6} md={4} key={booking.id}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h6">
                {booking.name}
              </Typography>
              <Typography variant="body1">
                {booking.trip.destination.name}
              </Typography>
              <Typography variant="body1">
                {booking.num_people} أشخاص
              </Typography>
              <Typography variant="body1">
                طريقة الدفع: {booking.payment_method}
              </Typography>
              <Button variant="contained" color="primary" onClick={() => { setSelectedBooking(booking); setOpen(true); }}>
                عرض التفاصيل
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {selectedBooking && (
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>تفاصيل الحجز</DialogTitle>
          <DialogContent>
            <Typography variant="h6">
              {selectedBooking.name}
            </Typography>
            <Typography variant="body1">
              الرحلة: {selectedBooking.trip.destination.name}
            </Typography>
            <Typography variant="body1">
              {selectedBooking.num_people} أشخاص
            </Typography>
            <Typography variant="body1">
              طريقة الدفع: {selectedBooking.payment_method}
            </Typography>
            {selectedBooking.screenshot && (
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={`http://127.0.0.1:8000/storage/${selectedBooking.screenshot}`}
                  alt="Screenshot"
                />
              </Card>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleReject(selectedBooking.id)} color="secondary">
              رفض
            </Button>
            <Button onClick={() => handleApprove(selectedBooking.id)} color="primary">
              موافقة
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Container>
  );
};

export default AdminBookings;

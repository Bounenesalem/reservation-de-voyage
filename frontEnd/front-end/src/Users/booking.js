
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Bookings = ({ currentUser }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (currentUser) {
      axios.get(`http://127.0.0.1:8000/api/user/${currentUser.id}/bookings`, {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(response => {
        setBookings(response.data);
      })
      .catch(error => {
        console.error('Error fetching user bookings:', error);
      });
    }
  }, [currentUser]);

  const handleCancel = (reservationId) => {
    axios.delete(`http://127.0.0.1:8000/api/reservation/${reservationId}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => {
      setBookings(bookings.map(booking => 
        booking.id === reservationId ? { ...booking, status: 'Cancelled' } : booking
      ));
    })
    .catch(error => {
      console.error('Error cancelling reservation:', error);
    });
  };

  return (
    <div>
      <h2>My Reservations</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number of People</th>
            <th>Trip</th>
            <th>Price</th>
            <th>Agency</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking.id}>
              <td>{booking.name}</td>
              <td>{booking.num_people}</td>
              <td>{booking.trip.destination.name}</td>
              <td>{booking.trip.price*booking.num_people}</td>
              <td>{booking.trip.agency.name}</td>
              <td>{booking.status}</td>
              <td>
                {booking.status !== 'Cancelled' && (
                  <button className="btn btn-danger" onClick={() => handleCancel(booking.id)}>Cancel</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;

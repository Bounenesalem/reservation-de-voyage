import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import html2canvas from 'html2canvas';

const BookingDetails = ({ currentUser }) => {
  const { bookingId } = useParams();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (currentUser && bookingId) {
      axios.get(`http://127.0.0.1:8000/api/reservation/${bookingId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(response => {
        setBooking(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching booking details:', error);
        setError('Failed to fetch booking details.');
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [currentUser, bookingId]);

  const handleCancel = () => {
    const token = localStorage.getItem('token');
    axios.delete(`http://127.0.0.1:8000/api/reservation/${bookingId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      setBooking({ ...booking, status: 'Cancelled' });
    })
    .catch(error => {
      console.error('Error cancelling reservation:', error);
    });
  };

//   const handleScreenshot = () => {
//     html2canvas(document.querySelector("#booking-details")).then(canvas => {
//       const link = document.createElement("a");
//       link.href = canvas.toDataURL("image/png");
//       link.download = "booking-details.png";
//       link.click();
//     });
//   };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  if (!booking) return <div>No booking details available.</div>;

  return (
    <div>
      <h2>Booking Details</h2>
      <div id="booking-details">
        <table className="table table-striped">
          <tbody>
            <tr>
              <th>Name</th>
              <td>{booking.name}</td>
            </tr>
            <tr>
              <th>Number of People</th>
              <td>{booking.num_people}</td>
            </tr>
            <tr>
              <th>Trip</th>
              <td>{booking.trip.destination.name}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>{booking.trip.price * booking.num_people}</td>
            </tr>
            <tr>
              <th>Agency</th>
              <td>{booking.trip.agency.name}</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>{booking.status}</td>
            </tr>
          </tbody>
        </table>
        {booking.status !== 'Cancelled' && (
          <button className="btn btn-danger" onClick={handleCancel}>Cancel</button>
        )}
      </div>
      {/* <button className="btn btn-primary" onClick={handleScreenshot}>Capture Screenshot</button> */}
    </div>
  );
};

export default BookingDetails;

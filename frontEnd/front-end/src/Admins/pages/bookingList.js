import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookingList = () => {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/booking')
      .then(response => {
        setReservations(response.data);
      })
      .catch(error => {
        setError('There was an error fetching the reservations.');
      });
  }, []);

  return (
    <div className="container">
      <h2 className="my-4">Reservations</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Trip</th>
            <th>Booking Date</th>
            <th>Num People</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map(reservation => (
            <tr key={reservation.id}>
              <td>{reservation.id}</td>
              <td>{reservation.user.name}</td>
              <td>{reservation.trip.destination.name}</td>              
              <td>{reservation.user.booking_date}</td>
              <td>{reservation.user.num_people}</td>
              <td>{reservation.status}</td>
              <td>
                <Link to={`/reservations/${reservation.id}`} className="btn btn-info">Details</Link>
                <Link to={`/update-reservation/${reservation.id}`} className="btn btn-warning mx-2">Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingList;

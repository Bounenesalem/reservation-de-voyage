// BookingList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/bookings')
      .then(response => {
        setBookings(response.data);
      })
      .catch(error => {
        setError('هناك خطأ في استرداد الحجوزات!');
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="my-4">إدارة الحجوزات</h2>
      {error && <p className="text-danger">{error}</p>}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>User Name </th>
            <th>Destination </th>
            <th>Ville de depart </th>
            <th>Agency </th>
            <th>Time </th>
            <th>Start Date </th>
            <th>End Date </th>
            <th>Number People </th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            // <tr key={booking.id}>
            //   <td>{booking.user ? booking.user:'unknown user'}</td>
            //   <td>{booking.trip.destination.name}</td>
            //   <td>{booking.trip.agency.name}</td>
            //   <td>{booking.trip.start_date}</td>
            //   <td>{booking.trip.end_date}</td>
            //   <td>{booking.num_people}</td>
            //   <td>{booking.status}</td>
            // </tr>

            <tr key={booking.id}>
              <td>{booking.user ? booking.user.name : '  unknown user'}</td>
              <td>{booking.trip && booking.trip.destination ? booking.trip.destination.name : 'there is no destination  '}</td>
              <td>{booking.trip ? booking.trip.Ville_de_depart : '  there is no date'}</td>
              <td>{booking.trip && booking.trip.agency ? booking.trip.agency.name : '  there is no agency'}</td>
              <td>{booking.trip ? booking.trip.Time : '  there is no date'}</td>
              <td>{booking.trip ? booking.trip.start_date : '  there is no date'}</td>
              <td>{booking.trip ? booking.trip.end_date : 'there is no date'}</td>
              <td>{booking.num_people}</td>
              <td>{booking.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AgencyBookings = ({ agency }) => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const agencyId = agency ? agency.id : '';
    axios.get(`http://127.0.0.1:8000/api/bookings?agency_id=${agencyId}`)
      .then(response => {
        setBookings(response.data);
      })
      .catch(error => {
        setError('هناك خطأ في استرداد الحجوزات!');
        console.error(error);
      });
  }, [agency]);

  return (
    <div className="container">
      <h2 className="my-4">{agency ? `حجوزات وكالة ${agency.name}` : 'جميع الحجوزات'}</h2>
      {error && <p className="text-danger">{error}</p>}
      
      <table className="table table-striped">
        <thead>
          <tr>
            <th>User Name </th>
            <th>Destination Name </th>
            <th>Agency Name </th>
            <th> Start Date</th>
            <th> End Date </th>
            <th> Number People </th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking.id}>
              <td>{booking.user ? booking.user.name : 'مستخدم غير معروف'}</td>
              <td>{booking.trip && booking.trip.destination ? booking.trip.destination.name : 'لا توجد وجهة'}</td>
              <td>{booking.trip && booking.trip.agency ? booking.trip.agency_id : '  there is no agency'}</td>
              <td>{booking.trip ? booking.trip.start_date : 'لا يوجد تاريخ'}</td>
              <td>{booking.trip ? booking.trip.end_date : 'لا يوجد تاريخ'}</td>
              <td>{booking.num_people}</td>
              <td>{booking.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AgencyBookings;

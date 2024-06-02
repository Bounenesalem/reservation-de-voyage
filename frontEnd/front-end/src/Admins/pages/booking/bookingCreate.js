import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookingCreate = () => {
  const [formData, setFormData] = useState({ user_id: '', trip_id: '', status: '' ,name:'',num_people:''});
  const [users, setUsers] = useState([]);
  const [trips, setTrips] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        setError('There was an error fetching the users.');
      });

    axios.get('http://127.0.0.1:8000/api/trip')
      .then(response => {
        setTrips(response.data);
      })
      .catch(error => {
        setError('There was an error fetching the trips.');
      });
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/booking', formData)
      .then(response => {
        navigate('/dashboard/bookings');
      })
      .catch(error => {
        setError('There was an error creating the reservation.');
      });
  };

  return (
    <div className="container">
      <h2 className="my-4">Create Reservation</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          </div>
          <div className="mb-3">
          <label htmlFor="num_people" className="form-label">Num People</label>
          <input
            type="text"
            className="form-control"
            id="num_people"
            name="num_people"
            value={formData.num_people}
            onChange={handleInputChange}
            required
          />
          </div>
        <div className="mb-3">
          <label htmlFor="user_id" className="form-label">User</label>
          <select
            className="form-select"
            id="user_id"
            name="user_id"
            value={formData.user_id}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a user</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="trip_id" className="form-label">Trip</label>
          <select
            className="form-select"
            id="trip_id"
            name="trip_id"
            value={formData.trip_id}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a trip</option>
            {trips.map(trip => (
              <option key={trip.id} value={trip.id}>{trip.destination.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <input
            type="text"
            className="form-control"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Reservation</button>
      </form>
    </div>
  );
};

export default BookingCreate;

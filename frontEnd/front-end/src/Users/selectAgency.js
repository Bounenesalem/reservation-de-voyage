import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AgenciesPage = () => {
    const [agencies, setAgencies] = useState([]);
    const [selectedAgency, setSelectedAgency] = useState(null);
    const [agencyTrips, setAgencyTrips] = useState([]);
    const [selectedTrip, setSelectedTrip] = useState(null);
  
    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/agency')
        .then(response => {
          setAgencies(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the agencies!', error);
        });
    }, []);
  
    useEffect(() => {
      if (selectedAgency) {
        axios.get(`http://127.0.0.1:8000/api/agency/${selectedAgency.id}/trip`)
          .then(response => {
            setAgencyTrips(response.data);
          })
          .catch(error => {
            console.error(`Error fetching trips for agency ${selectedAgency.id}!`, error);
          });
      }
    }, [selectedAgency]);
  
    const handleAgencySelect = (event) => {
      const agencyId = event.target.value;
      const agency = agencies.find(a => a.id === parseInt(agencyId));
      setSelectedAgency(agency);
      setSelectedTrip(null);
    };
  
    const handleTripSelect = (trip) => {
      setSelectedTrip(trip);
    };
  
    return (
      <div className="container">
        <h2 className="my-4">Select Agency and Trip</h2>
        
        <div className="mb-3">
          <label htmlFor="agencySelect" className="form-label">Select Agency:</label>
          <select id="agencySelect" className="form-select" onChange={handleAgencySelect}>
            <option value="">Select an agency</option>
            {agencies.map(agency => (
              <option key={agency.id} value={agency.id}>{agency.name}</option>
            ))}
          </select>
        </div>
  
        {selectedAgency && (
          <div>
            <h3>Trips for {selectedAgency.name}</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Destination Name</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Price</th>
                  <th>Select</th>
                </tr>
              </thead>
              <tbody>
                {agencyTrips.map(trip => (
                  <tr key={trip.id}>
                    <td>{trip.destination ? trip.destination.name : 'No destination'}</td>
                    <td>{trip.start_date}</td>
                    <td>{trip.end_date}</td>
                    <td>{trip.price}</td>
                    <td>
                      <button className="btn btn-primary" onClick={() => handleTripSelect(trip)}>Select</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
  
        {selectedTrip && (
          <div className="mt-4">
            <h3>Trip Details</h3>
            <p><strong>Destination:</strong> {selectedTrip.destination ? selectedTrip.destination.name : 'No destination'}</p>
            <p><strong>Start Date:</strong> {selectedTrip.start_date}</p>
            <p><strong>End Date:</strong> {selectedTrip.end_date}</p>
            <p><strong>Price:</strong> {selectedTrip.price}</p>
            <p><strong>Description:</strong> {selectedTrip.description}</p>
          </div>
        )}
      </div>
    );
};

export default AgenciesPage;

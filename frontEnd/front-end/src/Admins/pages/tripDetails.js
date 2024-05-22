import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TripDetailsPage = () => {
    const { id } = useParams();
    const [trip, setTrip] = useState(null);

    useEffect(() => {
        fetchTripDetails();
    }, []);

    const fetchTripDetails = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/trip/${id}`);
            setTrip(response.data);
        } catch (error) {
            console.error('Error fetching trip details:', error);
        }
    };

    if (!trip) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-12 col-md-12">
                    <div className="card-body">
                        <h1>Trip Details</h1>
                        <p><strong>Agency:</strong> {trip.agency.name}</p>
                        <p><strong>Destination:</strong> {trip.destination.name}</p>
                        <p><strong>Description:</strong> {trip.description}</p>
                        <p><strong>Start Date:</strong> {trip.start_date}</p>
                        <p><strong>End Date:</strong> {trip.end_date}</p>
                        <p><strong>Price:</strong> {trip.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TripDetailsPage;

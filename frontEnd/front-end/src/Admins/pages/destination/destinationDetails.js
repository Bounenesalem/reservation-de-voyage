import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DestinationDetails = () => {
    const { destinationId } = useParams();
    const [destination, setDestination] = useState([]);

    useEffect(() => {
        const fetchAgencyDetails = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/destination/${destinationId}`);
                setDestination(response.data);
            } catch (error) {
                console.error('Error fetching trip details:', error);
            }
        };

        fetchAgencyDetails();
    }, [destinationId]);

    // if (!agency) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div>
            <h1>Destination Details</h1>
            <p>Name: {destination.name}</p>
            <p>Description: {destination.description}</p>
            <p>Date: {destination.date}</p>
            <p>Budget: {destination.budget}</p>
            {/* Display other trip details */}
        </div>
    );
};

export default DestinationDetails;

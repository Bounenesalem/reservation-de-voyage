import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AgencyDetailsPage = () => {
    const { agencyId } = useParams();
    const [agency, setAgency] = useState([]);

    useEffect(() => {
        const fetchAgencyDetails = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/agency/${agencyId}`);
                setAgency(response.data);
            } catch (error) {
                console.error('Error fetching trip details:', error);
            }
        };

        fetchAgencyDetails();
    }, [agencyId]);

    // if (!agency) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div>
            <h1>Agency Details</h1>
            <p>Name: {agency.name}</p>
            <p>Description: {agency.description}</p>
            <p>Location: {agency.location}</p>
            <p>Email: {agency.email}</p>
            <p>Phone: {agency.phone}</p>
            {/* Display other trip details */}
        </div>
    );
};

export default AgencyDetailsPage;

import React,{useEffect, useState} from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
function UpdateTrip(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        destination_id: '',
        agency_id: '',
        Ville_de_depart: '',
        description: '',
        Time:'',
        startDate: '',
        endDate: '',
        price: '',

    });

    const [destinations, setDestinations] = useState([]);
    const [agencies, setAgencies] = useState([]);

    useEffect(() => {
        fetchDestinations();
        fetchAgencies();
        fetchTripDetails();
    }, []);

    const fetchDestinations = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/destination");
            setDestinations(response.data);
        } catch (error) {
            console.error('Error fetching destinations:', error);
        }
    };

    const fetchAgencies = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/agency");
            setAgencies(response.data);
        } catch (error) {
            console.error('Error fetching agencies:', error);
        }
    };

    const fetchTripDetails = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/trip/${id}`);
            const trip = response.data;
            setFormData({
                destination_id: trip.destination_id,
                agency_id: trip.agency_id,
                Ville_de_depart: trip.Ville_de_depart,
                description: trip.description,
                Time:trip.Time,
                startDate: trip.start_date,
                endDate: trip.end_date,
                price: trip.price,
            });
        } catch (error) {
            console.error('Error fetching trip details:', error);
        }
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://127.0.0.1:8000/api/trip/${id}`, formData);
            console.log(response.data.message);
            navigate('/dashboard/TripsTable');
        } catch (error) {
            if (error.response && error.response.status === 422) {
                console.error(error.response.data.errors);
            } else {
                console.error(error.response.data.message);
            }
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-12 col-md-12">
                    <div className="card-body">
                        <h1>Update Trip</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="agency_id">Agency Name:</label>
                                <select id="agency_id" name="agency_id" onChange={handleInputChange} className='form-control' value={formData.agencyId}>
                                    <option value="">Select agency</option>
                                    {agencies.map(agency => (
                                        <option key={agency.id} value={agency.id}>{agency.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="destination_id">Destination:</label>
                                <select id="destination_id" name="destination_id" onChange={handleInputChange} className='form-control' value={formData.destinationId}>
                                    <option value="">Select Destination</option>
                                    {destinations.map(destination => (
                                        <option key={destination.id} value={destination.id}>{destination.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Ville_de_depart">Ville de depart:</label>
                                <input type="text" id="Ville_de_depart" name="Ville_de_depart" onChange={handleInputChange} className='form-control' value={formData.Ville_de_depart} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description">Description:</label>
                                <input type="text" id="description" name="description" onChange={handleInputChange} className='form-control' value={formData.description} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="Time">Time de depatr:</label>
                                <input type="time" id="Time" name="Time" onChange={handleInputChange} className='form-control' value={formData.Time} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="startDate">Start Date:</label>
                                <input type="date" id="startDate" name="startDate" onChange={handleInputChange} className='form-control' value={formData.startDate} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="endDate">End Date:</label>
                                <input type="date" id="endDate" name="endDate" onChange={handleInputChange} className='form-control' value={formData.endDate}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price">Price:</label>
                                <input type="number" id="price" name="price" onChange={handleInputChange} className='form-control' value={formData.price}/>
                            </div>
                            <button type="submit" className='btn btn-primary'>Update Trip</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateTrip
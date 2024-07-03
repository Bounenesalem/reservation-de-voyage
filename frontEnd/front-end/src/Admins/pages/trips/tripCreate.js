// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const CreateTrip = () => {

//     const navigate=useNavigate();     
//     const [formData, setFormData] = useState({
//         destinationId:'',
//         agencyId:'',
//         description:'',
//         startDate: '',
//         endDate: '',
//         price: '',
//         // availableSeats: ''
//     });

//     const [destinations, setDestinations] = useState([]);
//     const[agency,setAgency]=useState([]);

//     useEffect(() => {
//         fetchDestinations();
//         fetchAgency();
//     }, []);

//     const fetchDestinations = async () => {
//         try {
//             const response = await axios.get("http://127.0.0.1:8000/api/destination");
//             setDestinations(response.data);
//         } catch (error) {
//             console.error('Error fetching destinations:', error);
//         }
//     };
//     const fetchAgency = async () => {
//         try {
//             const response = await axios.get("http://127.0.0.1:8000/api/agency");
//             setAgency(response.data);
//         } catch (error) {
//             console.error('Error fetching agency:', error);
//         }
//     };

//     // const handleSelectAgency = (e) => {
//     //     setSelectedAgency(e.target.value);
//     //   };


//     const handleInputChange = (e) => {     
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
        
//     };

  

//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//              await axios.post(`http://127.0.0.1:8000/api/trip`, formData)
//             .then(({data})=>{
//                 console.log(data.message)
//                 navigate('/dashboard/TripsTable')
//               }).catch(({response})=>{
//                 if (response.status ===422) {
//                     console.log(response.data.errors)
//                 } else {
//                     console.log(response.data.message)
                    
//                 }
//               })
//             }
            
//     return (
        
//              <div className="container">
//             <div className="row-justify-content-center">
//                 <div className="col-12 col-sm-12 col-md-12">
                    
//                         <div className="card-body"></div>
//             <h1>Create Trip</h1>
//             <form onSubmit={handleSubmit}>
            
//                 <div className="mb-3">
//                 <label htmlFor="agency_id">agencyName:</label>
//                 <select id="agency_id" name="agency_id" onChange={handleInputChange} className='form-control'>
//                     <option value="">Select agency</option>
//                     {agency.map(agency => (
//                         <option key={agency.id} value={agency.id}>{agency.name}</option>
//                     ))}
//                 </select>
//                 </div>
//                 <div className="mb-3">
//                 <label htmlFor="destination_id">Destination:</label>
//                 <select id="destination_id" name="destination_id" onChange={handleInputChange} className='form-control'>
//                     <option value="">Select Destination</option>
//                     {destinations.map(destination => (
//                         <option key={destination.id} value={destination.id}>{destination.name}</option>
//                     ))}
//                 </select>
//                 </div>
//                 <div className="mb-3">
//                 <label htmlFor="description"> Description:</label>
//                 <input type="text" id="description" name="description" onChange={handleInputChange} className='form-control' />
//                 </div>
//                 <div className="mb-3">
//                 <label htmlFor="start_date">Start Date:</label>
//                 <input type="date" id="start_date" name="start_date" onChange={handleInputChange} className='form-control' />
//                 </div>
//                 <div className="mb-3">
//                 <label htmlFor="end_date">End Date:</label>
//                 <input type="date" id="end_date" name="end_date" onChange={handleInputChange} className='form-control'/>
//                 </div>
//                 <div className="mb-3">
//                 <label htmlFor="price">Price:</label>
//                 <input type="number" id="price" name="price" onChange={handleInputChange} className='form-control'/>
//                 </div>
//                 {/* <label htmlFor="availableSeats">Available Seats:</label> */}
//                 {/* <input type="number" id="availableSeats" name="availableSeats" onChange={handleInputChange} /> */}
//                 <button type="submit" className='btn btn-primary'>Create Trip</button>
//             </form>
            

//         </div>

//         </div>

//         </div>


//     );
// };

// export default CreateTrip;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography, MenuItem } from '@mui/material';
import SideBar from '../../../component/SideBar';

const CreateTrip = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        destination_id: '',
        agency_id: '',
        description: '',
        start_date: '',
        end_date: '',
        price: '',
    });

    const [destinations, setDestinations] = useState([]);
    const [agencies, setAgencies] = useState([]);

    useEffect(() => {
        fetchDestinations();
        fetchAgencies();
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

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://127.0.0.1:8000/api/trip", formData);
            navigate('/dashboard/TripsTable');
        } catch (error) {
            console.error('Error creating trip:', error);
        }
    };

    return (
        <SideBar>
        <Box mt={4}>
            <Typography variant="h4" gutterBottom>
                Create Trip
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box mb={2}>
                    <TextField
                        select
                        label="Select Agency"
                        name="agency_id"
                        value={formData.agency_id}
                        onChange={handleInputChange}
                        fullWidth
                    >
                        {agencies.map(agency => (
                            <MenuItem key={agency.id} value={agency.id}>
                                {agency.name}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>
                <Box mb={2}>
                    <TextField
                        select
                        label="Select Destination"
                        name="destination_id"
                        value={formData.destination_id}
                        onChange={handleInputChange}
                        fullWidth
                    >
                        {destinations.map(destination => (
                            <MenuItem key={destination.id} value={destination.id}>
                                {destination.name}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>
                <Box mb={2}>
                    <TextField
                        label="Description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Box>
                <Box mb={2}>
                    <TextField
                        label="Start Date"
                        name="start_date"
                        type="date"
                        value={formData.start_date}
                        onChange={handleInputChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth
                    />
                </Box>
                <Box mb={2}>
                    <TextField
                        label="End Date"
                        name="end_date"
                        type="date"
                        value={formData.end_date}
                        onChange={handleInputChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth
                    />
                </Box>
                <Box mb={2}>
                    <TextField
                        label="Price"
                        name="price"
                        type="number"
                        value={formData.price}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Box>
                <Button type="submit" variant="contained" color="primary">
                    Create Trip
                </Button>
            </form>
        </Box>
        </SideBar>
    );
};

export default CreateTrip;

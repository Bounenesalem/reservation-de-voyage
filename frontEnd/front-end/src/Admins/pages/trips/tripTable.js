// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const TripsTable = () => {
//     const [trips, setTrips] = useState([]);
//     const[destination,setDestination]=useState([]);
//     const [runAgencies,setRunAgencies]=useState(0);



//     useEffect(() => {
//         fetchDestination()
//         fetchTrips();
       
//     }, [runAgencies]);

//     const fetchTrips = async () => {
//         try {
//             const response = await axios.get('http://127.0.0.1:8000/api/trip');
//             setTrips(response.data);
//         } catch (error) {
//             console.error('Error fetching trips:', error);
//         }
//     };

//      const fetchDestination = async ()=>{
//         try {
//             const response = await axios.get('http://127.0.0.1:8000/api/destination');
//             setDestination(response.data);
//         } catch (error) {
//             console.error('Error fetching destination:', error);
//         }
//      };

//      async function deleteTrip(id){
//         try{ 
//        const res=await  axios.delete( `http://127.0.0.1:8000/api/trip/${id}`);
//          if(res.status===200){
//              setRunAgencies((prev)=> prev+1)
//          }
     
//          }catch{
//              console.log("none");
//          }
//      }
 

//     const showTrips=trips.map((trip,index)=>(
//         <tr key={index}>
//             <td>{index +1}</td>
//             <td>{trip.destination.name}</td>
//             <td>{trip.agency.name}</td>
//             <td>{trip.description }</td>
//             <td>{trip.start_date }</td>
//             <td>{trip.end_date }</td>
//             <td>{trip.price }</td>
//             <td>
//                 {/* <button onClick={()=>deleteTrip(trip.id)} className="btn btn-danger">delete</button> 
//                  <Link to={`${trip.id}`} className="btn btn-success">update</Link> */}
//                  {/* <Link to={`/destination/${destination.id}`} className="btn btn-success">Details</Link> */}
//                  <button onClick={() => deleteTrip(trip.id)} className="btn btn-danger">Delete</button>
//                 <Link to={`${trip.id}`} className="btn btn-success">Update</Link>
//                 <Link to={`trip-details/${trip.id}`} className="btn btn-info">Details</Link>
//             </td>
//            </tr>
//               ));
//     return (
//         <div>
//             <div > 
//             <Link to={"trip"} className="btn btn-success mt-3"  >create trip</Link>
//           </div>
//             <h1>Trips</h1>
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>Trip ID</th>
//                         <th>Destination</th>
//                         <th>Agency</th>
//                         <th>Description</th>
//                         <th>Start Date</th>
//                         <th>End Date</th>
//                         <th>Price</th>
//                         <th>Action</th>
//                         {/* <th>Available Seats</th> */}
//                     </tr>
//                 </thead>
//                 <tbody>
//                  {showTrips}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default TripsTable;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, IconButton,  } from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon, Edit as EditIcon, Info as InfoIcon } from '@mui/icons-material';
import SideBar from '../../../component/SideBar';

const TripsTable = () => {
    const [trips, setTrips] = useState([]);
    const [runTrips, setRunTrips] = useState(0);

    useEffect(() => {
        fetchTrips();
    }, [runTrips]);

    const fetchTrips = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/trip');
            setTrips(response.data);
        } catch (error) {
            console.error('Error fetching trips:', error);
        }
    };

    async function deleteTrip(id) {
        try {
            const res = await axios.delete(`http://127.0.0.1:8000/api/trip/${id}`);
            if (res.status === 200) {
                setRunTrips((prev) => prev + 1);
            }
        } catch (error) {
            console.error('Error deleting trip:', error);
        }
    }

<<<<<<< HEAD
     async function deleteTrip(id){
        try{ 
       const res=await  axios.delete( `http://127.0.0.1:8000/api/trip/${id}`);
         if(res.status===200){
             setRunAgencies((prev)=> prev+1)
         }
     
         }catch{
             console.log("none");
         }
     }
 

    const showTrips=trips.map((trip,index)=>(
        <tr key={index}>
            <td>{index +1}</td>
            <td>{trip.destination.name}</td>
            <td>{trip.Ville_de_depart }</td>
            <td>{trip.agency.name}</td>
            <td>{trip.description }</td>
            <td>{trip.Time }</td>
            <td>{trip.start_date }</td>
            <td>{trip.end_date }</td>
            <td>{trip.price }</td>
            <td>
                {/* <button onClick={()=>deleteTrip(trip.id)} className="btn btn-danger">delete</button> 
                 <Link to={`${trip.id}`} className="btn btn-success">update</Link> */}
                 {/* <Link to={`/destination/${destination.id}`} className="btn btn-success">Details</Link> */}
                 <button onClick={() => deleteTrip(trip.id)} className="btn btn-danger">Delete</button>
                <Link to={`${trip.id}`} className="btn btn-success">Update</Link>
                <Link to={`trip-details/${trip.id}`} className="btn btn-info">Details</Link>
            </td>
           </tr>
              ));
    return (
        <div>
            <div > 
            <Link to={"trip"} className="btn btn-success mt-3"  >create trip</Link>
          </div>
            <h1>Trips</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Trip ID</th>
                        <th>Destination</th>
                        <th>Ville de depart</th>
                        <th>Agency</th>
                        <th>Description</th>
                        <th>Time de depart</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Price</th>
                        <th>Action</th>
                        {/* <th>Available Seats</th> */}
                    </tr>
                </thead>
                <tbody>
                 {showTrips}
                </tbody>
            </table>
        </div>
=======
    return (
        <SideBar>
        <Box mt={4}>
            <Typography variant="h4" gutterBottom>
                Trips Listing
            </Typography>
            <Box mb={2} display="flex" alignItems="center">
                <IconButton color="primary" component={Link} to="create">
                    <AddIcon />
                </IconButton>
                <Typography variant="h6" ml={1}>
                    Add Trip
                </Typography>
            </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Destination</TableCell>
                            <TableCell>Agency</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Start Date</TableCell>
                            <TableCell>End Date</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {trips.map((trip, index) => (
                            <TableRow key={index}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{trip.destination.name}</TableCell>
                                <TableCell>{trip.agency.name}</TableCell>
                                <TableCell>{trip.description}</TableCell>
                                <TableCell>{trip.start_date}</TableCell>
                                <TableCell>{trip.end_date}</TableCell>
                                <TableCell>{trip.price}</TableCell>
                                <TableCell>
                                    <IconButton color="secondary" onClick={() => deleteTrip(trip.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton color="primary" component={Link} to={`${trip.id}`}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton component={Link} to={`trip-details/${trip.id}`}>
                                        <InfoIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
        </SideBar>
>>>>>>> 82dd2afc408d126c1edf0aba09e6b7e95635a212
    );
};

export default TripsTable;

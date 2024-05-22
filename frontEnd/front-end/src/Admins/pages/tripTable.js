import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TripsTable = () => {
    const [trips, setTrips] = useState([]);
    const[destination,setDestination]=useState([]);
    const [runAgencies,setRunAgencies]=useState(0);



    useEffect(() => {
        fetchDestination()
        fetchTrips();
       
    }, [runAgencies]);

    const fetchTrips = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/trip');
            setTrips(response.data);
        } catch (error) {
            console.error('Error fetching trips:', error);
        }
    };

     const fetchDestination = async ()=>{
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/destination');
            setDestination(response.data);
        } catch (error) {
            console.error('Error fetching destination:', error);
        }
     };

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
            <td>{trip.agency.name}</td>
            <td>{trip.description }</td>
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
            <Link to={"trip"} className="btn btn-success"  >create trip</Link>
          </div>
            <h1>Trips</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Trip ID</th>
                        <th>Destination</th>
                        <th>Agency</th>
                        <th>Description</th>
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
    );
};

export default TripsTable;

import axios from "axios";
import React,{useState,useEffect} from "react"

// import http from "./http";
function Booking(){
   
    const[trip_id,setTripId]=useState('');
    const[booking_date,setBookingDate]=useState('');
    const[status,setStatus]=useState('');

    const [trips, setTrips] = useState([]);

    useEffect(() => {
       fetchTrips();
    }, []);

    const fetchTrips = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/trip");
            setTrips(response.data);
        } catch (error) {
            console.error('Error fetching trips:', error);
        }
    };


    const handleSubmit = async(e)=>{
        e.preventDefault();
        
      await axios.post('http://127.0.0.1:8000/api/booking',{
        trip_id:trip_id,
        booking_date:booking_date,
        status:status,
        
      }).then(({data})=>{
        console.log(data.message)
        // navigate('/dashboard/listAgency')
      }).catch(({response})=>{
        if (response.status ===422) {
            console.log(response.data.errors)
        } else {
            console.log(response.data.message)
            
        }
      })
    }
    return(
        <div>
            <h1>bookings</h1>
            <form onSubmit={handleSubmit} >
            <label htmlFor="trip_id">Trip:</label>
                <select id="trip_id" name="trip_id" onChange={((e)=>setTripId(e.target.value))} className='form-control'>
                    <option value="">Select Trip</option>
                    {trips.map(trip => (
                        <option key={trip.id} value={trip.id}>{trip.name}</option>
                    ))}
                </select>
            <input type="date" name="booking_date" placeholder="" onChange={((e)=>setBookingDate(e.target.value))} className='form-control'/>
            <input type="text" name="status" placeholder="Status" onChange={((e)=>setStatus(e.target.value))} className='form-control'/>
            <button type="submit">Add Booking</button>
         </form>
         {/* <ul>
            {booking.map(booking=>(
                <li key={booking.id}>
                    <p>Trip Id:{booking.trip_id}</p>
                    <p>Booking Date:{booking.booking_date}</p>
                    <p>Status:{booking.status}</p>

                </li>
            ))}
         </ul> */}
        </div>
    );
};

export default Booking
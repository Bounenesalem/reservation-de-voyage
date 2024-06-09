import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PageAgencies = () => {
  const [agencies, setAgencies] = useState([]);
  



    useEffect(() => {
        
        axios.get('http://127.0.0.1:8000/api/agency')
        .then(response => {
          setAgencies(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the agencies!', error);
        });
       
    }, []);

   
  

  
  return (
    <div className="container">
    <h2 className="my-4">Agencies And Their Trips</h2>
    {agencies.map(agency => (
      <div key={agency.id} className="mb-5">
        <h3>{agency.name}</h3>
        
        <h4>Trips:</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Destination Name</th>
              <th> Ville de depart</th>
              <th>Time de voyage</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Price</th>
              {/* <th>Availability</th> */}
            </tr>
          </thead>
          <tbody>
            {agency.trips.map(trip => (
              <tr key={trip.id}>
                 <td>{trip.destination.name}</td>
                 <td>{trip. Ville_de_depart}</td>
                 <td>{trip.Time}</td>
                <td>{trip.start_date}</td>
                <td>{trip.end_date}</td>
                <td>{trip.price}</td>
              
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ))}
  </div>
);

};

export default PageAgencies;


// const [agencies, setAgencies] = useState([]);
  

//   useEffect(() => {
//     axios.get('http://127.0.0.1:8000/api/agency')
//       .then(response => {
//         setAgencies(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the agencies!', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Agencies</h2>
//       <ul>
//         {agencies.map(agency => (
//           <li key={agency.id}>
//             <h3>{agency.name}</h3>
//             <p>{agency.description}</p>
//             <h4>Trips:</h4>
//             <ul>
//               {agency.trips.map(trip => (
//                 <li key={trip.id}>
//                   <p>Destination ID: {trip.destination_id}</p>
//                   <p>Start Date: {trip.start_date}</p>
//                   <p>End Date: {trip.end_date}</p>
//                   <p>Price: {trip.price}</p>
//                   {/* <p>Availability: {trip.availability}</p> */}
//                 </li>
//               ))}
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
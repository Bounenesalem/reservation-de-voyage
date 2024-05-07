function Home(){
    return <h1>welcome to home page</h1>
}

export default Home

// Home.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Home = () => {
//     const [destinations, setDestinations] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:8000/api/home')
//             .then(response => {
//                 setDestinations(response.data);
//             })
//             .catch(error => {
//                 console.error(error);
//             });
//     }, []);

//     return (
//         <div>
            
//             <h1>Popular Destinations</h1>
//             {destinations.map(destination => (
//                 <div key={destination.id}>
//                     <h2>{destination.name}</h2>
//                     <p>{destination.description}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Home;

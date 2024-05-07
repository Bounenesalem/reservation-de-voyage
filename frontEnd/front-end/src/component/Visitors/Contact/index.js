function Contact(){
    return <h1>welcome to Contact page</h1>
}

export default Contact
// Search.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const Search = () => {
//     const [searchCriteria, setSearchCriteria] = useState({ destination: '', date: '', budget: '' });
//     const [searchResults, setSearchResults] = useState([]);

//     const handleSearch = () => {
//         axios.get('/api/search', { params: searchCriteria })
//             .then(response => {
//                 setSearchResults(response.data);
//             })
//             .catch(error => {
//                 console.error(error);
//             });
//     };
    

//     return (
//         <div>
//             <input type="text" value={searchCriteria.destination} onChange={e => setSearchCriteria({ ...searchCriteria, destination: e.target.value })} />
//             <input type="date" value={searchCriteria.date} onChange={e => setSearchCriteria({ ...searchCriteria, date: e.target.value })} />
//             <input type="number" value={searchCriteria.budget} onChange={e => setSearchCriteria({ ...searchCriteria, budget: e.target.value })} />
//             <button onClick={handleSearch}>Search</button>
//             {searchResults.map(result => (
//                 <div key={result.id}>
//                     <h2>{result.name}</h2>
//                     <p>{result.description}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Search;

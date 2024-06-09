import Header from "../../component/Header"
import Hero from "../../component/hero"
import AbutImage from "../../asserts/4.jpg"  
import Footer from "../../component/Footer"
import ContactFrom from "./ContactFrom"

function Contact(){
    
    return <>
    <Header/>
    <Hero
      cName="hero-mid"
      heroImg={AbutImage}
      title="contact"
            btnClass="hide"
      />
      <ContactFrom/>
      <Footer/>
    </>
}

export default Contact
// Search.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const Search = () => {
//     const [searchCriteria, setSearchCriteria] = useState({ destination: '', date: '', budget: '' });
//     const [searchResults, setSearchResults] = useState([]);

//     const handleSearch = () => {
//         axios.get(' http://127.0.0.1:8000/api/search', { params: searchCriteria })
//             .then(response => {
//                 setSearchResults(response.data);
//             })
//             .catch(error => {
//                 console.error(error);
//             });
//     };
    

//     return (
//         <div>
//             <Header/>
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


// import React from 'react';
// import { AppBar, Toolbar, Typography, Container, TextField, Button, Box, CssBaseline } from '@mui/material';
// import { styled } from '@mui/system';

// const MainContent = styled(Container)({
//   marginTop: '20px',
// });

// const Footer = styled(Box)({
//   padding: '20px',
//   backgroundColor: '#333',
//   color: '#fff',
//   textAlign: 'center',
//   marginTop: '20px',
// });

// const Contact = () => {
//   return (
//     <>
//       <CssBaseline />
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             رحلة
//           </Typography>
//           <Button color="inherit">Home</Button>
//           <Button color="inherit">About</Button>
//           <Button color="inherit">Contact</Button>
//           <Button color="inherit">Sign Up</Button>
//         </Toolbar>
//       </AppBar>
//       <MainContent>
//         <Typography variant="h4">اتصل بنا</Typography>
//         <form noValidate autoComplete="off">
//           <TextField fullWidth label="الاسم" margin="normal" />
//           <TextField fullWidth label="البريد الإلكتروني" margin="normal" />
//           <TextField fullWidth label="الرسالة" margin="normal" multiline rows={4} />
//           <Button variant="contained" color="primary" sx={{ marginTop: '20px' }}>إرسال</Button>
//         </form>
//       </MainContent>
//       <Footer>
//         <Typography>© 2023 رحلة. جميع الحقوق محفوظة.</Typography>
//       </Footer>
//     </>
//   );
// };

// export default Contact;

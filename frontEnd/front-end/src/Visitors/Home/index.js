import Header from "../../component/Header"

// function Home(){
    
//     return <div>
//         <Header/>
//         <h1>welcome to home page</h1>
//     </div> 
// }

// export default Home

// Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        axios.post(' http://127.0.0.1:8000/api/home')
            .then(response => {
                setDestinations(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <Header/>
            <h1>Popular Destinations</h1>
            {destinations.map(destination => (
                <div key={destination.id}>
                    <h2>{destination.name}</h2>
                    <p>{destination.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Home;



// import React from 'react';
// import { AppBar, Toolbar, Typography, Button, Container, Grid, Paper, Box, CssBaseline } from '@mui/material';
// import { styled } from '@mui/system';

// const HeroSection = styled(Box)({
//   backgroundImage: 'url(https://example.com/hero.jpg)',
//   height: '500px',
//   color: '#fff',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
// });

// const HeroText = styled(Box)({
//   backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   padding: '20px',
//   borderRadius: '5px',
// });

// const TripsSection = styled(Container)({
//   marginTop: '20px',
// });

// const TripCard = styled(Paper)({
//   padding: '20px',
// });

// const Footer = styled(Box)({
//   padding: '20px',
//   backgroundColor: '#333',
//   color: '#fff',
//   textAlign: 'center',
//   marginTop: '20px',
// });

// const Home = () => {
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
//       <HeroSection>
//         <HeroText>
//           <Typography variant="h2">اكتشف رحلتك القادمة</Typography>
//           <Button variant="contained" color="primary">بحث عن رحلات</Button>
//         </HeroText>
//       </HeroSection>
//       <TripsSection>
//         <Typography variant="h4">رحلات مميزة</Typography>
//         <Grid container spacing={3}>
//           <Grid item xs={12} sm={6} md={4}>
//             <TripCard>
//               <Typography variant="h6">رحلة إلى باريس</Typography>
//               <Typography>استمتع بجولة في مدينة النور.</Typography>
//             </TripCard>
//           </Grid>
//           {/* تكرار عناصر Grid للمزيد من الرحلات */}
//         </Grid>
//       </TripsSection>
//       <Footer>
//         <Typography>© 2023 رحلة. جميع الحقوق محفوظة.</Typography>
//       </Footer>
//     </>
//   );
// };

// export default Home;


import Header from "../../component/Header"
import Hero from "../../component/hero"
import AbutImage from "../../asserts/3.jpg"
import Footer from "../../component/Footer"
import AboutUs from "./About";
function About(){

    return(
      <>
      <Header/>
      <Hero
      cName="hero-mid"
      heroImg={AbutImage}
      title="About"
            btnClass="hide"
      />
      <AboutUs/>
      <Footer/>
  </>
    ) ;
}

export default About

// import React from 'react';
// import { AppBar, Toolbar, Typography, Container, Box, CssBaseline, Button } from '@mui/material';
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

// const About = () => {
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
//         <Typography variant="h4">من نحن</Typography>
//         <Typography>نحن شركة متخصصة في تنظيم الرحلات السياحية.</Typography>
//         <Typography>رسالتنا هي توفير أفضل التجارب السياحية.</Typography>
//         <Typography>فريقنا يتكون من خبراء في مجال السياحة.</Typography>
//       </MainContent>
//       <Footer>
//         <Typography>© 2023 رحلة. جميع الحقوق محفوظة.</Typography>
//       </Footer>
//     </>
//   );
// };

// export default About;

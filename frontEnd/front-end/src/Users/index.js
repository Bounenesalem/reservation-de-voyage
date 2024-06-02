// // Users.js
// import React, { useState, useEffect } from 'react';
// import SelectAgency from './selectAgency';
// import AgencyTrips from './agencyTrips';
// import Login from './login';
// import Register from './register';
// import Bookings from './Booking';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import TripDetails from './tripsDetails';
// import BookingForm from './bookingForm';
// import TripInformation from './TripInformation';

// const Users = () => {
//   const [selectedAgency, setSelectedAgency] = useState(null);
//   const [selectedTrip, setSelectedTrip] = useState(null);
//   const [numPeople, setNumPeople] = useState(0);
//   const [view, setView] = useState('selectAgency');
//   const [authToken, setAuthToken] = useState(localStorage.getItem('token') || null);
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     if (authToken) {
//       axios.get('http://127.0.0.1:8000/api/user', {
//         headers: {
//           'Authorization': `Bearer ${authToken}`
//         }
//       }).then(response => {
//         setCurrentUser(response.data);
//       }).catch(error => {
//         console.error('Error fetching user data:', error);
//       });
//     }
//   }, [authToken]);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setAuthToken(null);
//     setCurrentUser(null);
//     setView('login');
//   };

//   const handleBookingComplete = (numPeople) => {
//     setNumPeople(numPeople);
//     setView('tripInformation');
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <a className="navbar-brand" href="#">Booking System</a>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav">
//             {authToken ? (
//               <>
//                 <li className="nav-item">
//                   <button className="nav-link btn" onClick={() => setView('selectAgency')}>Select Agency</button>
//                 </li>
//                 <li className="nav-item">
//                   <button className="nav-link btn" onClick={() => setView('bookings')}>My Reservations</button>
//                 </li>
//                 <li className="nav-item">
//                   <button className="nav-link btn" onClick={handleLogout}>Logout</button>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li className="nav-item">
//                   <button className="nav-link btn" onClick={() => setView('login')}>Login</button>
//                 </li>
//                 <li className="nav-item">
//                   <button className="nav-link btn" onClick={() => setView('register')}>Register</button>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </nav>
//       {authToken ? (
//         <>
//           {view === 'selectAgency' && <SelectAgency setSelectedAgency={setSelectedAgency} setView={setView} />}
//           {view === 'agencyTrips' && <AgencyTrips selectedAgency={selectedAgency} setSelectedTrip={setSelectedTrip} setView={setView} />}
//           {view === 'tripDetails' && <TripDetails trip={selectedTrip} onBookingClick={() => setView('bookingForm')} />}
//           {view === 'bookingForm' && <BookingForm tripId={selectedTrip.id} onBookingComplete={handleBookingComplete} />}
//           {view === 'tripInformation' && <TripInformation tripId={selectedTrip.id} numPeople={numPeople} />}
//           {view === 'bookings' && <Bookings currentUser={currentUser} />}
//         </>
//       ) : (
//         <>
//           {view === 'login' && <Login setAuthToken={setAuthToken} setCurrentUser={setCurrentUser} />}
//           {view === 'register' && <Register />}
//         </>
//       )}
//     </div>
//   );
// };

// export default Users;



// import React, { useState, useEffect } from 'react';
// import { CssBaseline, Drawer, AppBar, Toolbar, List, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText, Box ,Avatar} from '@mui/material';
// import { Menu as MenuIcon, ChevronLeft as ChevronLeftIcon, Home as HomeIcon, Book as BookIcon, ExitToApp as ExitToAppIcon } from '@mui/icons-material';
// import { styled } from '@mui/material/styles';
// import SelectAgency from './selectAgency';
// import AgencyTrips from './agencyTrips';
// import Login from './login';
// import Register from './register';
// import Bookings from './Booking';
// import TripDetails from './tripsDetails';
// import BookingForm from './bookingForm';
// import TripInformation from './TripInformation';
// import axios from 'axios';

// const drawerWidth = 240;

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
//   flexGrow: 1,
//   padding: theme.spacing(3),
//   transition: theme.transitions.create('margin', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   marginLeft: `-${drawerWidth}px`,
//   ...(open && {
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginLeft: 0,
//   }),
// }));

// const AppBarStyled = styled(AppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(['margin', 'width'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-end',
// }));

// const Users = () => {
//   const [selectedAgency, setSelectedAgency] = useState(null);
//   const [selectedTrip, setSelectedTrip] = useState(null);
//   const [numPeople, setNumPeople] = useState(0);
//   const [view, setView] = useState('selectAgency');
//   const [authToken, setAuthToken] = useState(localStorage.getItem('token') || null);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     if (authToken) {
//       axios.get('http://127.0.0.1:8000/api/user', {
//         headers: {
//           'Authorization': `Bearer ${authToken}`
//         }
//       }).then(response => {
//         setCurrentUser(response.data);
//       }).catch(error => {
//         console.error('Error fetching user data:', error);
//       });
//     }
//   }, [authToken]);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setAuthToken(null);
//     setCurrentUser(null);
//     setView('login');
//   };

//   const handleBookingComplete = (numPeople) => {
//     setNumPeople(numPeople);
//     setView('tripInformation');
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBarStyled position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{ marginRight: 2, ...(open && { display: 'none' }) }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Booking System
//           </Typography>
//           {/* {authToken && currentUser && (
//             <Box display="flex" alignItems="center">
//               <div className='avatar'>
//               <Avatar alt={currentUser.name} src="/static/images/avatar/1.jpg" />
//               <Typography variant="body1" style={{ marginLeft: 10 }}>
//                 {currentUser.name}
//               </Typography>
//               </div>
//             </Box>
//           )} */}
//         </Toolbar>
//       </AppBarStyled>
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//           },
//         }}
//         variant="persistent"
//         anchor="left"
//         open={open}
//       >
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             <ChevronLeftIcon />
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         {authToken && (
//           <List>
//             <ListItem button onClick={() => setView('selectAgency')}>
//               <ListItemIcon>
//                 <HomeIcon />
//               </ListItemIcon>
//               <ListItemText primary="Select Agency" />
//             </ListItem>
//             <ListItem button onClick={() => setView('bookings')}>
//               <ListItemIcon>
//                 <BookIcon />
//               </ListItemIcon>
//               <ListItemText primary="My Reservations" />
//             </ListItem>
//             <ListItem button onClick={handleLogout}>
//               <ListItemIcon>
//                 <ExitToAppIcon />
//               </ListItemIcon>
//               <ListItemText primary="Logout" />
//             </ListItem>
//           </List>
//         )}
//       </Drawer>
//       <Main open={open}>
//         <DrawerHeader />
//         {authToken ? (
//           <>
//             {view === 'selectAgency' && <SelectAgency setSelectedAgency={setSelectedAgency} setView={setView} />}
//             {view === 'agencyTrips' && <AgencyTrips selectedAgency={selectedAgency} setSelectedTrip={setSelectedTrip} setView={setView} />}
//             {view === 'tripDetails' && <TripDetails trip={selectedTrip} onBookingClick={() => setView('bookingForm')} />}
//             {view === 'bookingForm' && <BookingForm tripId={selectedTrip.id} onBookingComplete={handleBookingComplete} />}
//             {view === 'tripInformation' && <TripInformation tripId={selectedTrip.id} numPeople={numPeople} />}
//             {view === 'bookings' && <Bookings currentUser={currentUser} />}
//           </>
//         ) : (
//           <>
//             {view === 'login' && <Login setAuthToken={setAuthToken} setCurrentUser={setCurrentUser} />}
//             {view === 'register' && <Register />}
//           </>
//         )}
//       </Main>
//     </Box>
//   );
// };

// export default Users;



import React, { useState, useEffect } from 'react';
import {
  CssBaseline, Drawer, AppBar, Toolbar, List, Typography, Divider, IconButton,
  ListItem, ListItemIcon, ListItemText, Box, Avatar
} from '@mui/material';
import {
  Menu as MenuIcon, ChevronLeft as ChevronLeftIcon, Home as HomeIcon,
  Book as BookIcon, ExitToApp as ExitToAppIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import SelectAgency from './selectAgency';
import AgencyTrips from './agencyTrips';
import Login from './login';
import Register from './register';
import Bookings from './Booking';
import TripDetails from './tripsDetails';
import BookingForm from './bookingForm';
import TripInformation from './TripInformation';
import axios from 'axios';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBarStyled = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Users = () => {
  const [selectedAgency, setSelectedAgency] = useState(null);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [numPeople, setNumPeople] = useState(0);
  const [view, setView] = useState(localStorage.getItem('token') ? 'selectAgency' : 'login');
  const [authToken, setAuthToken] = useState(localStorage.getItem('token') || null);
  const [currentUser, setCurrentUser] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (authToken) {
      axios.get('http://127.0.0.1:8000/api/user', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      }).then(response => {
        setCurrentUser(response.data);
      }).catch(error => {
        console.error('Error fetching user data:', error);
      });
    }
  }, [authToken]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuthToken(null);
    setCurrentUser(null);
    setView('login');
  };

  const handleBookingComplete = (numPeople) => {
    setNumPeople(numPeople);
    setView('tripInformation');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBarStyled position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ marginRight: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Booking System
          </Typography>
          {authToken && currentUser && (
            <Box display="flex" alignItems="center" ml="auto">
              <Avatar alt={currentUser.name} src="/static/images/avatar/1.jpg" />
              <Typography variant="body1" style={{ marginLeft: 10 }}>
                {currentUser.name}
              </Typography>
            </Box>
          )}
        </Toolbar>
      </AppBarStyled>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {authToken ? (
            <>
              <ListItem button onClick={() => setView('selectAgency')}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Select Agency" />
              </ListItem>
              <ListItem button onClick={() => setView('bookings')}>
                <ListItemIcon>
                  <BookIcon />
                </ListItemIcon>
                <ListItemText primary="My Reservations" />
              </ListItem>
              <ListItem button onClick={handleLogout}>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </>
          ) : (
            <>
              <ListItem button onClick={() => setView('login')}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Login" />
              </ListItem>
              <ListItem button onClick={() => setView('register')}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Register" />
              </ListItem>
            </>
          )}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {authToken ? (
          <>
            {view === 'selectAgency' && <SelectAgency setSelectedAgency={setSelectedAgency} setView={setView} />}
            {view === 'agencyTrips' && <AgencyTrips selectedAgency={selectedAgency} setSelectedTrip={setSelectedTrip} setView={setView} />}
            {view === 'tripDetails' && <TripDetails trip={selectedTrip} onBookingClick={() => setView('bookingForm')} />}
            {view === 'bookingForm' && <BookingForm tripId={selectedTrip.id} onBookingComplete={handleBookingComplete} />}
            {view === 'tripInformation' && <TripInformation tripId={selectedTrip.id} numPeople={numPeople} />}
            {view === 'bookings' && <Bookings currentUser={currentUser} />}
          </>
        ) : (
          <>
            {view === 'login' && <Login setAuthToken={setAuthToken} setCurrentUser={setCurrentUser} />}
            {view === 'register' && <Register />}
          </>
        )}
      </Main>
    </Box>
  );
};

export default Users;

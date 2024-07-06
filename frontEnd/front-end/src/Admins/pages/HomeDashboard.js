// import React from 'react';
// import { Box, Grid, Paper, Typography, Card, CardContent, CardActions, Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { Add as AddIcon, List as ListIcon, LocationOn as LocationOnIcon, Flight as FlightIcon, EventSeat as EventSeatIcon, Group as GroupIcon } from '@mui/icons-material';

// const HomeDashboard = () => {
//   const navigate = useNavigate();

//   const sections = [
//     {
//       title: 'Agencies',
//       description: 'Manage all travel agencies',
//       icon: <ListIcon />,
//       link: '/dashboard/listAgency',
//     },
//     {
//       title: 'Create Agency',
//       description: 'Add new travel agencies',
//       icon: <AddIcon />,
//       link: '/dashboard/listAgency/create',
//     },
//     {
//       title: 'Destinations',
//       description: 'Explore all travel destinations',
//       icon: <LocationOnIcon />,
//       link: '/dashboard/destinations',
//     },
//     {
//       title: 'Trips',
//       description: 'View and manage trips',
//       icon: <FlightIcon />,
//       link: '/dashboard/TripsTable',
//     },
//     {
//       title: 'Bookings',
//       description: 'Manage customer bookings',
//       icon: <EventSeatIcon />,
//       link: '/dashboard/BookingsTable',
//     },
//     {
//       title: 'Users',
//       description: 'Manage user accounts',
//       icon: <GroupIcon />,
//       link: '/dashboard/users',
//     },
//     {
//       title: 'Agencies and Trips',
//       description: 'View agencies and their trips',
//       icon: <ListIcon />,
//       link: '/dashboard/agencyAndTrip',
//     },
//   ];

//   return (
//     <Box sx={{ flexGrow: 1, p: 3 }}>
//       <Typography variant="h4" gutterBottom>
//         Welcome to the Travel Agency Dashboard
//       </Typography>
//       <Grid container spacing={3}>
//         {sections.map((section, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h5" component="div">
//                   {section.icon} {section.title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {section.description}
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="small" onClick={() => navigate(section.link)}>
//                   Go to {section.title}
//                 </Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default HomeDashboard;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Grid, Paper } from '@mui/material';
import SideBar from '../../component/SideBar';
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FlightIcon from '@mui/icons-material/Flight';
import EventSeatIcon from '@mui/icons-material/EventSeat';

const HomeDashboard = () => {
  const [stats, setStats] = useState({
    users: 0,
    agencies: 0,
    destinations: 0,
    trips: 0,
    bookings: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [ agenciesRes, destinationsRes, tripsRes, bookingsRes] = await Promise.all([
        // axios.get('http://127.0.0.1:8000/api/user'),
        axios.get('http://127.0.0.1:8000/api/agency'),
        axios.get('http://127.0.0.1:8000/api/destination'),
        axios.get('http://127.0.0.1:8000/api/trip'),
        axios.get('http://127.0.0.1:8000/api/bookings'),
      ]);

      setStats({
        // users: usersRes.data.length,
        agencies: agenciesRes.data.length,
        destinations: destinationsRes.data.length,
        trips: tripsRes.data.length,
        bookings: bookingsRes.data.length,
      });
    } catch (error) {
      console.error('Error fetching statistics:', error);
    }
  };

  const StatCard = ({ icon, label, value, color }) => (
    <Grid item xs={12} sm={6} md={4}>
      <Paper elevation={3} sx={{ display: 'flex', alignItems: 'center', padding: 2, backgroundColor: color }}>
        <Box sx={{ marginRight: 2, color: 'white' }}>{icon}</Box>
        <Box>
          <Typography variant="h6" sx={{ color: 'white' }}>{label}</Typography>
          <Typography variant="h4" sx={{ color: 'white' }}>{value}</Typography>
        </Box>
      </Paper>
    </Grid>
  );

  return (
    <SideBar>
      <Box mt={4} p={2}>
        <Typography variant="h4" gutterBottom>
          Home Dashboard
        </Typography>
        <Grid container spacing={3}>
          {/* <StatCard icon={<PeopleIcon fontSize="large" />} label="Users" value={stats.users} color="#3f51b5" /> */}
          <StatCard icon={<BusinessIcon fontSize="large" />} label="Agencies" value={stats.agencies} color="#009688" />
          <StatCard icon={<LocationOnIcon fontSize="large" />} label="Destinations" value={stats.destinations} color="#f44336" />
          <StatCard icon={<FlightIcon fontSize="large" />} label="Trips" value={stats.trips} color="#ff9800" />
          <StatCard icon={<EventSeatIcon fontSize="large" />} label="Bookings" value={stats.bookings} color="#9c27b0" />
        </Grid>
      </Box>
    </SideBar>
  );
};

export default HomeDashboard;

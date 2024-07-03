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



import React, { useEffect, useState } from 'react';
import { Box, Grid, Paper, Typography, Card, CardContent, CardActions, Button, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Add as AddIcon, List as ListIcon, LocationOn as LocationOnIcon, Flight as FlightIcon, EventSeat as EventSeatIcon, Group as GroupIcon } from '@mui/icons-material';
import axios from 'axios';

const HomeDashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    users: 0,
    agencies: 0,
    destinations: 0,
    trips: 0,
    bookings: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await axios.get('http://127.0.0.1:8000/api/user');
        const agenciesResponse = await axios.get('http://127.0.0.1:8000/api/agency');
        const destinationsResponse = await axios.get('http://127.0.0.1:8000/api/destination');
        const tripsResponse = await axios.get('http://127.0.0.1:8000/api/trip');
        const bookingsResponse = await axios.get('http://127.0.0.1:8000/api/booking');
        
        setData({
          users: usersResponse.data.length,
          agencies: agenciesResponse.data.length,
          destinations: destinationsResponse.data.length,
          trips: tripsResponse.data.length,
          bookings: bookingsResponse.data.length,
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const sections = [
    {
      title: 'Users',
      count: data.users,
      description: 'Manage user accounts',
      icon: <GroupIcon />,
      link: '/dashboard/users',
    },
    {
      title: 'Agencies',
      count: data.agencies,
      description: 'Manage all travel agencies',
      icon: <ListIcon />,
      link: '/dashboard/listAgency',
    },
    {
      title: 'Create Agency',
      description: 'Add new travel agencies',
      icon: <AddIcon />,
      link: '/dashboard/listAgency/create',
    },
    {
      title: 'Destinations',
      count: data.destinations,
      description: 'Explore all travel destinations',
      icon: <LocationOnIcon />,
      link: '/dashboard/destinations',
    },
    {
      title: 'Trips',
      count: data.trips,
      description: 'View and manage trips',
      icon: <FlightIcon />,
      link: '/dashboard/TripsTable',
    },
    {
      title: 'Bookings',
      count: data.bookings,
      description: 'Manage customer bookings',
      icon: <EventSeatIcon />,
      link: '/dashboard/BookingsTable',
    },
    {
      title: 'Agencies and Trips',
      description: 'View agencies and their trips',
      icon: <ListIcon />,
      link: '/dashboard/agencyAndTrip',
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Travel Agency Dashboard
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3}>
          {sections.map((section, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {section.icon} {section.title}
                  </Typography>
                  {section.count !== undefined && (
                    <Typography variant="h4" color="primary">
                      {section.count}
                    </Typography>
                  )}
                  <Typography variant="body2" color="text.secondary">
                    {section.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => navigate(section.link)}>
                    Go to {section.title}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default HomeDashboard;


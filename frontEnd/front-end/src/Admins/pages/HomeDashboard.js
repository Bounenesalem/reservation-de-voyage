import React from 'react';
import { Box, Grid, Paper, Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Add as AddIcon, List as ListIcon, LocationOn as LocationOnIcon, Flight as FlightIcon, EventSeat as EventSeatIcon, Group as GroupIcon } from '@mui/icons-material';

const HomeDashboard = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: 'Agencies',
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
      description: 'Explore all travel destinations',
      icon: <LocationOnIcon />,
      link: '/dashboard/destinations',
    },
    {
      title: 'Trips',
      description: 'View and manage trips',
      icon: <FlightIcon />,
      link: '/dashboard/TripsTable',
    },
    {
      title: 'Bookings',
      description: 'Manage customer bookings',
      icon: <EventSeatIcon />,
      link: '/dashboard/BookingsTable',
    },
    {
      title: 'Users',
      description: 'Manage user accounts',
      icon: <GroupIcon />,
      link: '/dashboard/users',
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
      <Grid container spacing={3}>
        {sections.map((section, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {section.icon} {section.title}
                </Typography>
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
    </Box>
  );
};

export default HomeDashboard;

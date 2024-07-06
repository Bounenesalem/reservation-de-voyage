// import React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import { Box, Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// import { Link } from 'react-router-dom';
// import {
//   Menu as MenuIcon,
//   ChevronLeft as ChevronLeftIcon,
//   ChevronRight as ChevronRightIcon,
  
//   Add as AddIcon,
//   List as ListIcon,
//   LocationOn as LocationOnIcon,
//   Flight as FlightIcon,
//   EventSeat as EventSeatIcon,
//   Group as GroupIcon, // Added for Users
//   Dashboard as DashboardIcon, // Added for Home Dashboard
//   LocalActivity as LocalActivityIcon, // Added for Agencies and trips
// } from '@mui/icons-material';

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

// const SideBar = ({ children }) => {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
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
//             sx={{ mr: 2, ...(open && { display: 'none' }) }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Travel Agency
//           </Typography>
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
//             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           <ListItem button component={Link} to="/dashboard">
//             <ListItemIcon>
//               <DashboardIcon />
//             </ListItemIcon>
//             <ListItemText primary="Home Dashboard" />
//           </ListItem>
//           <ListItem button component={Link} to="/dashboard/listAgency">
//             <ListItemIcon>
//               <ListIcon />
//             </ListItemIcon>
//             <ListItemText primary="Agencies" />
//           </ListItem>
//           <ListItem button component={Link} to="/dashboard/listAgency/create">
//             <ListItemIcon>
//               <AddIcon />
//             </ListItemIcon>
//             <ListItemText primary="Create Agency" />
//           </ListItem>
//           <ListItem button component={Link} to="/dashboard/destinations">
//             <ListItemIcon>
//               <LocationOnIcon />
//             </ListItemIcon>
//             <ListItemText primary="Destinations" />
//           </ListItem>
//           <ListItem button component={Link} to="/dashboard/TripsTable">
//             <ListItemIcon>
//               <FlightIcon />
//             </ListItemIcon>
//             <ListItemText primary="Trips" />
//           </ListItem>
//           <ListItem button component={Link} to="/dashboard/BookingsTable">
//             <ListItemIcon>
//               <EventSeatIcon />
//             </ListItemIcon>
//             <ListItemText primary="Bookings" />
//           </ListItem>
//           <ListItem button component={Link} to="/dashboard/agencyAndTrip">
//             <ListItemIcon>
//               <LocalActivityIcon />
//             </ListItemIcon>
//             <ListItemText primary="Agencies and trips" />
//           </ListItem>
//           <ListItem button component={Link} to="/dashboard/users">
//             <ListItemIcon>
//               <GroupIcon />
//             </ListItemIcon>
//             <ListItemText primary="Users" />
//           </ListItem>
//         </List>
//       </Drawer>
//       <Main open={open}>
//         <DrawerHeader />
//         {children}
//       </Main>
//     </Box>
//   );
// };

// export default SideBar;



import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Add as AddIcon,
  List as ListIcon,
  LocationOn as LocationOnIcon,
  Flight as FlightIcon,
  EventSeat as EventSeatIcon,
  Group as GroupIcon,
  Dashboard as DashboardIcon,
  LocalActivity as LocalActivityIcon,
  ExitToApp as ExitToAppIcon,
  AssignmentInd as AssignmentIndIcon, // New icon for Logo Reservation
} from '@mui/icons-material';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
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
}));

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

const SideBar = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true); // Ensure drawer is open by default

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Travel Agency
          </Typography>
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
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem button component={Link} to="/dashboard">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Home Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/listAgency">
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary="Agencies" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/listAgency/create">
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Create Agency" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/destinations">
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary="Destinations" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/destinations/create">
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Create Destination" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/TripsTable">
            <ListItemIcon>
              <FlightIcon />
            </ListItemIcon>
            <ListItemText primary="Trips" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/TripsTable/trip">
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Create Trip" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/BookingsTable">
            <ListItemIcon>
              <EventSeatIcon />
            </ListItemIcon>
            <ListItemText primary="Bookings" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/agencyAndTrip">
            <ListItemIcon>
              <LocalActivityIcon />
            </ListItemIcon>
            <ListItemText primary="Agencies and trips" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/users">
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
         
          
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
};

export default SideBar;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const UserDetails = () => {
//   const { id } = useParams();
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get(`http://127.0.0.1:8000/api/user/${id}`)
//       .then(response => {
//         setUser(response.data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the user details!', error);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (!user) {
//     return <p>User not found</p>;
//   }

//   return (
//     <div className="container">
//       <h2 className="my-4">User Details</h2>
//       <div>
//         <p><strong>Name:</strong> {user.name}</p>
//         <p><strong>Email:</strong> {user.email}</p>
//         <p><strong>Email:</strong> {user.phone}</p>
//         {/* Add other user details as needed */}
//       </div>
//     </div>
//   );
// };

// export default UserDetails;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Box
} from '@mui/material';
import SideBar from '../../../component/SideBar';

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/user/${id}`)
      .then(response => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the user details!', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (!user) {
    return <Typography>User not found</Typography>;
  }

  return (
    <SideBar>
    <Container>
      <Typography variant="h4" gutterBottom>User Details</Typography>
      <Box>
        <Typography><strong>Name:</strong> {user.name}</Typography>
        <Typography><strong>Email:</strong> {user.email}</Typography>
        <Typography><strong>Phone:</strong> {user.phone}</Typography>
      </Box>
    </Container>
    </SideBar>
  );
};

export default UserDetails;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// const CreateUser = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     password: ''
//   });
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://127.0.0.1:8000/api/user', formData)
//       .then(response => {
//         console.log('User created successfully:', response.data);
//         navigate('/dashboard/users');
//       })
//       .catch(error => {
//         console.error('There was an error creating the user!', error);
//       });
//   };

//   return (
//     <div className="container">
//       <h2 className="my-4">Create User</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">Name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">Email</label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//           />
//           </div>
//           <div className="mb-3">
//           <label htmlFor="phone" className="form-label">phone</label>
//           <input
//             type="phone"
//             className="form-control"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleInputChange}
//             required
//           />
          
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">Create</button>
//       </form>
//     </div>
//   );
// };

// export default CreateUser;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box
} from '@mui/material';
import SideBar from '../../../component/SideBar';

const CreateUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/user', formData)
      .then(response => {
        console.log('User created successfully:', response.data);
        navigate('/dashboard/users');
      })
      .catch(error => {
        console.error('There was an error creating the user!', error);
      });
  };

  return (
    <SideBar>
    <Container>
      <Typography variant="h4" gutterBottom>Create User</Typography>
      <form onSubmit={handleSubmit}>
        <Box mb={3}>
          <TextField
            fullWidth
            label="Name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </Box>
        <Box mb={3}>
          <TextField
            fullWidth
            label="Email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </Box>
        <Box mb={3}>
          <TextField
            fullWidth
            label="Phone"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </Box>
        <Box mb={3}>
          <TextField
            fullWidth
            label="Password"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </Box>
        <Button type="submit" variant="contained" color="primary">Create</Button>
      </form>
    </Container>
    </SideBar>
  );
};

export default CreateUser;

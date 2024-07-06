// src/pages/UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,  Typography, Box, IconButton } from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon, Edit as EditIcon, Info as InfoIcon } from '@mui/icons-material';
import SideBar from '../../../component/SideBar';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [runUsers, setRunUsers] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://127.0.0.1:8000/api/user', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
    .then(response => {
      setUsers(response.data);
    })
    .catch(error => {
      console.error('Error fetching users:', error);
    });
  }, [runUsers]);

  async function deleteUser(id) {
    try {
      const res = await axios.delete(`http://127.0.0.1:8000/api/user/${id}`);
      if (res.status === 200) {
        setRunUsers((prev) => prev + 1);
      }
    } catch {
      console.log("none");
    }
  }

  return (
    <SideBar>
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>
        User Listing
      </Typography>
      <Box mb={2} display="flex" alignItems="center">
        <IconButton color="primary" component={Link} to="create-user">
          <AddIcon />
        </IconButton>
        <Typography variant="h6" ml={1}>
          Create User
        </Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <IconButton color="secondary" onClick={() => deleteUser(user.id)}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton color="primary" component={Link} to={`update-user/${user.id}`}>
                    <EditIcon />
                  </IconButton>
                  <IconButton component={Link} to={`${user.id}`}>
                    <InfoIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    </SideBar>
  );
};

export default UserList;

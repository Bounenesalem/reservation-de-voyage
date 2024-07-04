import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography } from '@mui/material';

const SelectAgency = ({ setSelectedAgency, setView }) => {
  const [agencies, setAgencies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/agency')
      .then(response => {
        setAgencies(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the agencies!', error);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredAgencies = agencies.filter(agency =>
    agency.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAgencySelect = (agency) => {
    setSelectedAgency(agency);
    setView('agencyTrips');
  };

  return (
    <Container>
      <h3>Select Agency</h3>
      <TextField 
        label="Search Agency" 
        variant="outlined" 
        value={searchQuery}
        onChange={handleSearch}
        fullWidth
        margin="normal"
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Agency Name</TableCell>
              <TableCell align="right">Select</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredAgencies.length > 0 ? (
              filteredAgencies.map(agency => (
                <TableRow key={agency.id}>
                  <TableCell>{agency.name}</TableCell>
                  <TableCell align="right">
                    <Button  variant="contained"  onClick={() => handleAgencySelect(agency)}>Select</Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={2}>
                  <Typography align="center">البحث غير موجود</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default SelectAgency;



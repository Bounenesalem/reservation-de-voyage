import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const SelectAgency = ({ onAgencySelect }) => {
  const [agencies, setAgencies] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/agency')
      .then(response => {
        setAgencies(response.data);
      })
      .catch(error => {
        console.error('هناك خطأ في استرداد الوكالات!', error);
      });
  }, []);

  const handleAgencySelect = (event) => {
    const agencyId = event.target.value;
    const agency = agencies.find(a => a.id === parseInt(agencyId)) || null;
    onAgencySelect(agency);
  };

  return (
    <div className="mb-3">
      <label htmlFor="agencySelect" className="form-label">اختر وكالة:</label>
      <select id="agencySelect" className="form-select" onChange={handleAgencySelect}>
        <option value="">الكل</option>
        {agencies.map(agency => (
          <option key={agency.id} value={agency.id}>{agency.name}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectAgency;

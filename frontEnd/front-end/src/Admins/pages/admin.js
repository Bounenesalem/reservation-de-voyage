import React, { useState } from 'react';
import SelectAgency from './selectAgency';
import AgencyBookings from './agencyBookings';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminPanel = () => {
  const [selectedAgency, setSelectedAgency] = useState(null);

  const handleAgencySelect = (agency) => {
    setSelectedAgency(agency);
  };

  return (
    <div className="container">
      <h2 className="my-4">لوحة إدارة الوكالات</h2>
      <SelectAgency onAgencySelect={handleAgencySelect} />
      <AgencyBookings agency={selectedAgency} />
    </div>
  );
};

export default AdminPanel;

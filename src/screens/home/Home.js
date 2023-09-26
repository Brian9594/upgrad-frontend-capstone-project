import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function Home() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <div>
      <Tabs
        value={currentTab}
        onChange={handleTabChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="DOCTORS" />
        <Tab label="APPOINTMENT" />
      </Tabs>

      {currentTab === 0 && <DoctorsTab />}
      {currentTab === 1 && <AppointmentTab />}
    </div>
  );
}

function DoctorsTab() {
  // Implement the 'DOCTORS' tab content here
  return (
    <div>
      {/* Add doctor list, filters, and buttons here */}
    </div>
  );
}

function AppointmentTab() {
  // Implement the 'APPOINTMENT' tab content here
  return (
    <div>
      {/* Display user appointments here */}
    </div>
  );
}

export default Home;

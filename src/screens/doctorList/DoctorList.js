import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookAppointment from './BookAppointment';
import DoctorDetails from './DoctorDetails';

const doctorsData = [
  // Define your list of doctors here
];

function DoctorList() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [bookAppointmentOpen, setBookAppointmentOpen] = useState(false);
  const [viewDetailsOpen, setViewDetailsOpen] = useState(false);

  const handleBookAppointment = (doctor) => {
    setSelectedDoctor(doctor);
    setBookAppointmentOpen(true);
  };

  const handleViewDetails = (doctor) => {
    setSelectedDoctor(doctor);
    setViewDetailsOpen(true);
  };

  return (
    <div style={{ width: '40%' }}>
      {doctorsData.map((doctor, index) => (
        <Paper key={index} style={{ margin: '15px', padding: '20px', cursor: 'pointer' }}>
          <Typography variant="h6">{doctor.name}</Typography>
          <Typography>Speciality: {doctor.speciality}</Typography>
          <Typography>Average Rating: {doctor.rating}</Typography>
          <Button
            variant="contained"
            color="primary"
            style={{ width: '40%', margin: '10px' }}
            onClick={() => handleBookAppointment(doctor)}
          >
            BOOK APPOINTMENT
          </Button>
          <Button
            variant="contained"
            color="secondary"
            style={{ width: '40%', margin: '10px', backgroundColor: 'green' }}
            onClick={() => handleViewDetails(doctor)}
          >
            VIEW DETAILS
          </Button>
        </Paper>
      ))}
      {bookAppointmentOpen && <BookAppointment doctor={selectedDoctor} />}
      {viewDetailsOpen && <DoctorDetails doctor={selectedDoctor} />}
    </div>
  );
}

export default DoctorList;

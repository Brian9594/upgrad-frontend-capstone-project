import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function DoctorDetails({ doctor }) {
  return (
    <div>
      <Paper style={{ margin: '15px', padding: '20px', cursor: 'pointer' }}>
        <Typography variant="h6">Doctor Details</Typography>
        <Typography>Name: {doctor.name}</Typography>
        <Typography>Total Experience: {doctor.experience}</Typography>
        <Typography>Speciality: {doctor.speciality}</Typography>
        <Typography>Date of Birth: {doctor.dob}</Typography>
        <Typography>City: {doctor.city}</Typography>
        <Typography>Email: {doctor.email}</Typography>
        <Typography>Mobile: {doctor.mobile}</Typography>
        <Typography>Rating: {doctor.rating}</Typography>
      </Paper>
    </div>
  );
}

export default DoctorDetails;

import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function BookAppointment({ doctor }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleBookAppointment = () => {
    // Implement your appointment booking logic here
    // Check for date and time slot availability
    // If booked or not available, show an error message
    // Otherwise, proceed with booking
  };

  return (
    <div>
      <Paper style={{ margin: '15px', padding: '20px', cursor: 'pointer' }}>
        <Typography variant="h6">Book an Appointment</Typography>
        <Typography>Doctor: {doctor.name}</Typography>
        <TextField
          label="Date"
          type="date"
          value={selectedDate.toISOString().split('T')[0]}
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
        />
        <TextField
          label="Time Slot"
          select
          fullWidth
          value={selectedTimeSlot}
          onChange={(e) => setSelectedTimeSlot(e.target.value)}
        >
          {/* Populate time slots options */}
        </TextField>
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        <TextField
          label="Medical History"
          multiline
          rows={4}
          fullWidth
          value={medicalHistory}
          onChange={(e) => setMedicalHistory(e.target.value)}
        />
        <TextField
          label="Symptoms"
          multiline
          rows={4}
          fullWidth
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleBookAppointment}
        >
          BOOK
        </Button>
      </Paper>
    </div>
  );
}

export default BookAppointment;

import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function RateAppointment({ appointment }) {
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRateAppointment = () => {
    if (rating === 0) {
      setErrorMessage('Submit a rating');
      return;
    }
    // Implement your rating submission logic here
  };

  return (
    <div>
      <Paper style={{ margin: '15px', padding: '20px', cursor: 'pointer' }}>
        <Typography variant="h6">Rate an Appointment</Typography>
        <Typography>Doctor: {appointment.doctor}</Typography>
        <Typography>Appointment Date: {appointment.date}</Typography>
        <Rating
          name="rating"
          value={rating}
          onChange={(event, newValue) => setRating(newValue)}
        />
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        <TextField
          label="Comments"
          multiline
          rows={4}
          fullWidth
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleRateAppointment}
        >
          RATE APPOINTMENT
        </Button>
      </Paper>
    </div>
  );
}

export default RateAppointment;

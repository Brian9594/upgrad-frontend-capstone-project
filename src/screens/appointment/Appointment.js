import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import RateAppointment from './RateAppointment';

const appointmentsData = [
  // Define your list of appointments here
];

function Appointment() {
  const [rateAppointmentOpen, setRateAppointmentOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleRateAppointment = (appointment) => {
    setSelectedAppointment(appointment);
    setRateAppointmentOpen(true);
  };

  return (
    <div>
      {appointmentsData.length === 0 ? (
        <Typography variant="h6">Login to see appointments</Typography>
      ) : (
        <div>
          {appointmentsData.map((appointment, index) => (
            <Paper
              key={index}
              style={{ margin: '15px', padding: '20px', cursor: 'pointer' }}
            >
              <Typography variant="h6">Doctor: {appointment.doctor}</Typography>
              <Typography>Appointment Date: {appointment.date}</Typography>
              <Typography>Symptoms: {appointment.symptoms}</Typography>
              <Typography>Medical History: {appointment.medicalHistory}</Typography>
              <Button
                variant="contained"
                color="primary"
                style={{ width: '40%', margin: '10px' }}
                onClick={() => handleRateAppointment(appointment)}
              >
                RATE APPOINTMENT
              </Button>
            </Paper>
          ))}
        </div>
      )}
      {rateAppointmentOpen && <RateAppointment appointment={selectedAppointment} />}
    </div>
  );
}

export default Appointment;

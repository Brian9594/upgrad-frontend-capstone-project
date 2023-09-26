import React, { useState } from 'react';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';

function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    contactNumber: '',
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    contactNumber: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      contactNumber: '',
    };

    if (!formData.firstName) {
      newErrors.firstName = 'Please fill out this field';
      isValid = false;
    }

    if (!formData.lastName) {
      newErrors.lastName = 'Please fill out this field';
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Please fill out this field';
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Enter valid Email';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Please fill out this field';
      isValid = false;
    }

    if (!formData.contactNumber) {
      newErrors.contactNumber = 'Please fill out this field';
      isValid = false;
    } else if (!isValidMobileNumber(formData.contactNumber)) {
      newErrors.contactNumber = 'Enter valid mobile number';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const isValidEmail = (email) => {
    // Implement your email validation logic here
    return /\S+@\S+\.\S+/.test(email);
  };

  const isValidMobileNumber = (number) => {
    // Implement your mobile number validation logic here
    return /^\d{10}$/.test(number);
  };

  const handleRegistration = async () => {
    if (validateForm()) {
      // Make a request to the '/users/register' endpoint with formData
      try {
        const response = await fetch('/users/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.status === 200) {
          // Registration successful, display a success message
        } else {
          // Handle registration error, show an error message if needed
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel>First Name</InputLabel>
        <Input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <div className="error">{errors.firstName}</div>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Last Name</InputLabel>
        <Input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <div className="error">{errors.lastName}</div>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Email</InputLabel>
        <Input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <div className="error">{errors.email}</div>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Password</InputLabel>
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <div className="error">{errors.password}</div>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Mobile No.</InputLabel>
        <Input
          type="text"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleInputChange}
        />
        <div className="error">{errors.contactNumber}</div>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={handleRegistration}
        fullWidth
      >
        REGISTER
      </Button>
    </div>
  );
}

export default RegisterForm;

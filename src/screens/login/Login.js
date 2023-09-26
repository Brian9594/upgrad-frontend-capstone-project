import React, { useState } from 'react';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';

function LoginForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', password: '' };

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

    setErrors(newErrors);
    return isValid;
  };

  const isValidEmail = (email) => {
    // Implement your email validation logic here
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleLogin = async () => {
    if (validateForm()) {
      // Make a request to the '/auth/login' endpoint with formData
      try {
        const response = await fetch('/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.status === 200) {
          // Successful login, close the modal or perform any necessary actions
          // Replace the 'LOGIN' button with 'LOGOUT' in the header
        } else {
          // Handle login error, show an error message if needed
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div>
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
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogin}
        fullWidth
      >
        LOGIN
      </Button>
    </div>
  );
}

export default LoginForm;

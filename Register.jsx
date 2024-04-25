import React from 'react'
import {TextField,Typography} from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Link } from "react-router-dom";
// import {User} from './schema';
import './login.css';

function Register() {
  const roleSelect = [
    {
      value: 'customer',
      label: 'Customer'
    },
    {
      value: 'staff',
      label: 'Staff'
    }
  ];
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [pwd, setPwd] = React.useState('');
  const [role, setRole] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [cpwd, setCpwd] = React.useState('');
  // const [error,setError]=React.useState('');
  

  const handleSubmit = () => {
    if (!name || !email || !pwd || !role || !number || !cpwd) {
      alert('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email format.');
      return;
    }
  
    // Check if passwords match
    if (pwd !== cpwd) {
      alert('Passwords do not match.');
      return;
    }
  
    axios
      .post('http://localhost:4444/api/register', {
        name: name,
        email: email,
        password: pwd,
        role: role,
        contactNumber: number
      })
      .then(function (response) {
        alert("Registered successfully");
        // Handle success response here
      })
      .catch(function (error) {
        if (error.response && error.response.data && error.response.data.message) {
          alert(error.response.data.message);
        } else {
          alert('An error occurred. Please try again.');
        }
        console.error(error);
      });
  };
    

    return(
        <>
          <nav className="navbar">
        <Typography variant="h6" component={Link} to="/" className="navbar-brand">
          Vehicle Service
        </Typography>
        <div className="navbar-links">
          <Button component={Link} to="/home" color="inherit" className="navbar-link">
            Home
          </Button>
          <Button component={Link} to="/services" color="inherit" className="navbar-link">
            Services
          </Button>
          <Button component={Link} to="/about" color="inherit" className="navbar-link">
            About
          </Button>
          <Button component={Link} to="/contact" color="inherit" className="navbar-link">
            Contact
          </Button>
          <Button component={Link} to="/register" color="inherit" className="navbar-link">
            Register
          </Button>
          <Button component={Link} to="/login" color="inherit" className="navbar-link">
            Login
          </Button>
        </div>
      </nav>
      <div id="form">
        <form>
            <h2>REGISTRATION FORM</h2>
        <br/>
        <TextField label="Name" id="outlined-size-normal" name="name" value={name} onChange={e=>setName(e.target.value)} fullWidth/>
        <br/><br/>
        <TextField label="Email" id="outlined-size-normal" value={email} name="email "onChange={e=>setEmail(e.target.value)} fullWidth/>
        <br/><br/>
        <TextField label="Password" id="outlined-size-normal" value={pwd} name="password"onChange={e=>setPwd(e.target.value)} type={"password"} fullWidth/>
        <br/><br/>
        <TextField label="Confirm your Password" id="outlined-size-normal" value={cpwd} onChange={e=>setCpwd(e.target.value)} type={"password"} fullWidth/>
        <br/><br/>
        <TextField
          id="outlined-select-role"
          select
          label="Role"
          defaultValue="customer"
          helperText="Please select your role" value={role} name="role" onChange={e=>setRole(e.target.value)}>
          {roleSelect.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br/><br/>
        <TextField label="ContactNumber" id="outlined-size-normal" type={"number"} value={number} name="contactNumber" onChange={e=>setNumber(e.target.value)}/>
        <br/><br/>
        <Button variant="contained" color="success" href="#" type='submit' onClick={handleSubmit}>REGISTER</Button>
        </form>
        </div>
        </>
    )
}

export default Register;
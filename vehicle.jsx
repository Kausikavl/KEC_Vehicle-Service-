import React from 'react';
import { TextField,Typography} from '@mui/material';
import Button from '@mui/material/Button';
import axios from 'axios';
import './vehicle.css';
import {Link} from 'react-router-dom';

function Vehicle() {
  const [make, setMake] = React.useState('');
  const [model, setModel] = React.useState('');
  const [year, setYear] = React.useState('');
  const [vin, setVin] = React.useState('');
  const [licensePlate, setLicensePlate] = React.useState('');

  const handleSubmit = () => {
    if (!make || !model || !year || !vin || !licensePlate ) {
      alert('Please fill in all fields.');
      return;
    }

    axios
      .post('http://localhost:4444/api/insertvehicles', {
        make: make,
        model: model,
        year: year,
        vin: vin,
        licensePlate: licensePlate,
      })
      .then(function(response) {
        alert("Vehicle registered successfully");
        // Handle success response here
      })
      .catch(function(error) {
        if (error.response && error.response.data && error.response.data.message) {
          alert(error.response.data.message);
        } else {
          alert('An error occurred. Please try again.');
        }
        console.error(error);
      });
  };

  return (
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
        <h2>VEHICLE REGISTRATION FORM</h2>
        <br/>
        <TextField label="Make" id="outlined-size-normal" name="make" value={make} onChange={e => setMake(e.target.value)} fullWidth/>
        <br/><br/>
        <TextField label="Model" id="outlined-size-normal" name="model" value={model} onChange={e => setModel(e.target.value)} fullWidth/>
        <br/><br/>
        <TextField label="Year" id="outlined-size-normal" name="year" value={year} onChange={e => setYear(e.target.value)} type="number" fullWidth/>
        <br/><br/>
        <TextField label="VIN" id="outlined-size-normal" name="vin" value={vin} onChange={e => setVin(e.target.value)} fullWidth/>
        <br/><br/>
        <TextField label="License Plate" id="outlined-size-normal" name="licensePlate" value={licensePlate} onChange={e => setLicensePlate(e.target.value)} fullWidth/>
        <br/><br/>
        <Button variant="contained" color="success" href="#" type="submit" onClick={handleSubmit}>REGISTER VEHICLE</Button>
      </form>
    </div>
    </>
  );
}

export default Vehicle;

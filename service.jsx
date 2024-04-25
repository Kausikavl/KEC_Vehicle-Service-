import React from 'react';
import { TextField,Typography} from '@mui/material';
import Button from '@mui/material/Button';
import axios from 'axios';
import './vehicle.css';
import {Link} from 'react-router-dom';

function service() {
  const [serviceType, setType] = React.useState('');
  const [description, setDesc] = React.useState('');
  const [serviceDate, setDate] = React.useState('');
  const [mileage, setMile] = React.useState('');

  const [estimatedCompletionDate, setCompl] = React.useState('');
  const [partsUsed, setParts] = React.useState([{ name: '', quantity: '', price: '' }]);
  const [laborHours,setHours]=React.useState('');
  const [totalCost,setCost]=React.useState('');
  


  const handleSubmit = () => {
    if (!serviceType || !serviceDate || !mileage || !laborHours || !totalCost ) {
      alert('Please fill in all fields.');
      return;
    }

    axios
      .post('http://localhost:4444/api/createService', {
        serviceType: serviceType,
        description: description,
        serviceDate :serviceDate,
        mileage: mileage,
        estimatedCompletionDate :estimatedCompletionDate,
        partsUsed :partsUsed,
        laborHours :laborHours,
        totalCost :totalCost
      })
      .then(function(response) {
        alert("Service registered successfully");
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
    <><nav className="navbar">
    <Typography variant="h6" component={Link} to="/" className="navbar-brand">
      Vehicle Service
    </Typography>
    <div className="navbar-links">
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
        <TextField label="ServiceType" id="outlined-size-normal" name="serviceType" value={serviceType} onChange={e => setType(e.target.value)} fullWidth/>
        <br/><br/>
        <TextField label="description" id="outlined-size-normal" name="description" value={description} onChange={e => setDesc(e.target.value)} fullWidth/>
        <br/><br/>
        <TextField label="Service Date" type="date" value={serviceDate} onChange={(e) => setDate(e.target.value)} fullWidth required />
        <br/><br/>
        <TextField label="mileage" id="outlined-size-normal" name="mileage" value={mileage} onChange={e => setMile(e.target.value)} type="number" fullWidth/>
        <br/><br/>
        <TextField label="Completion Date" type="date" value={estimatedCompletionDate} onChange={(e) => setCompl(e.target.value)} fullWidth required />
        <br/><br/>
        <TextField label="PartsUsed-name" id="outlined-size-normal" name="partsUsed" value={partsUsed.name} onChange={e => setParts(e.target.value)} fullWidth/>
        <br/><br/>
        <TextField label="PartsUsed-quantity" id="outlined-size-normal" name="partsUsed" value={partsUsed.quantity} onChange={e => setParts(e.target.value)} fullWidth/>
        <br/><br/>
        <TextField label="PartsUsed-price" id="outlined-size-normal" name="partsUsed" value={partsUsed.price} onChange={e => setParts(e.target.value)} fullWidth/>
        <br/><br/>
        <TextField label="laborHours" id="outlined-size-normal" name="laborHours" value={laborHours} onChange={e => setHours(e.target.value)} fullWidth/>
        <br/><br/>
        <TextField label="totalCost" id="outlined-size-normal" name="totalCost" value={totalCost} onChange={e => setCost(e.target.value)} fullWidth/>
        <br/><br/>
        <Button variant="contained" color="success" href="#" type="submit" onClick={handleSubmit}>CREATE SERVICE</Button>
      </form>
    </div>
    </>
  );
}

export default service;

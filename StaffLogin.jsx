import React from 'react';
import { TextField,Typography } from '@mui/material';
import Button from '@mui/material/Button';
import axios from 'axios';
import './login.css';
import { useNavigate,Link} from 'react-router-dom';

function Login() {
  const [email, setEmail] = React.useState('');
  const [pwd, setPwd] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !pwd) {
      alert('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email format.');
      return;
    }

    axios
      .post('http://localhost:4444/api/login', {
        email: email,
        password: pwd
      })
      .then(function(response) {
        if(response.data === "Login Successful!") {
          alert("Login successful");
          navigate('/home');
        } else
        {
          alert(response.data);
        }
      })
      .catch(function(error) {
        if(error.response && error.response.data && error.response.data.message) {
          alert(error.response.data.message);
        }else
        {
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
        <h2>LOGIN FORM</h2>
        <br/>
        <TextField label="Email" id="outlined-size-normal" value={email} name="email" onChange={e => setEmail(e.target.value)} fullWidth/>
        <br/><br/>
        <TextField label="Password" id="outlined-size-normal" value={pwd} name="password" onChange={e => setPwd(e.target.value)} type="password" fullWidth />
        <br/><br/>
        <Button variant="contained" color="success" type="submit" onClick={handleSubmit}>SUBMIT</Button>
      </form>
    </div>
    </>
  );
}

export default Login;
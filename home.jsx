import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Grid, CardContent } from '@mui/material';
import './home.css';

function Home() {
  return (
    <div className="home-container">
      <nav className="navbar">
        <Typography variant="h6" component={Link} to="/" className="navbar-brand">
          Vehicle Service
        </Typography>
        <div className="navbar-links">
          <Button component={Link} to="/home" color="inherit" className="navbar-link">
            Home
          </Button>
          <Button component={Link} to="/vehicle" color="inherit" className="navbar-link">
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
      <section className="hero-section">
        <Grid container direction="column" alignItems="center" justifyContent="center" className="hero-content">
          <Grid item>
            <Typography variant="h3" align="center" className="hero-title">
              Welcome to Vehicle Service
            </Typography>
            <Typography variant="body1" align="center" className="hero-description">
              We provide expert vehicle maintenance and repair services.
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/learn-more" className="hero-button">
              Learn More
            </Button>
          </Grid>
        </Grid>
      </section>

      <section className="services-section">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h4" align="center" className="services-title">
              Our Services
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="service-card">
              <CardContent>
                <Typography variant="h5" component="h2">
                  Oil Change
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  We provide high-quality oil change services for all types of vehicles.
                </Typography>
              </CardContent>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="service-card">
              <CardContent>
                <Typography variant="h5" component="h2">
                  Tire Rotation
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Our tire rotation services help extend the life of your tires and ensure optimal performance.
                </Typography>
              </CardContent>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="service-card">
              <CardContent>
                <Typography variant="h5" component="h2">
                  Brake Repair
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  We offer professional brake repair services to ensure your vehicle's safety on the road.
                </Typography>
              </CardContent>
            </div>
          </Grid>
        </Grid>
      </section>
    </div>
  );
}

export default Home;

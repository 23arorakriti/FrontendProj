import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div style={{ textAlign: 'center', padding: '2.5rem' }}>
    <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#4338ca', marginBottom: '1.5rem' }}>⏳ TimeTide</h1>
    <p style={{ fontSize: '1.125rem', color: '#4b5563', marginBottom: '2.5rem' }}>Chart your day, balance your life.</p>
    <Link to="/log" style={{
      backgroundColor: '#6366f1',
      color: 'white',
      padding: '0.5rem 1.5rem',
      borderRadius: '0.75rem',
      boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
      textDecoration: 'none'
    }}>
      Get Started
    </Link>
  </div>
);

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    backgroundColor: 'white',
    boxShadow: '0px 2px 4px rgba(0,0,0,0.05)',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '1rem',
    fontWeight: '500',
    color: '#4338ca'
  };

  return (
    <nav style={navStyle}>
      <Link to="/">Home</Link>
      <Link to="/log">Log Time</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/history">History</Link>
      <Link to="/settings">Settings</Link>
    </nav>
  );
};

export default Navbar;

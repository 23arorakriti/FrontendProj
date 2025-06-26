import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LogTime from './pages/LogTime';
import Dashboard from './pages/Dashboard';
import History from './pages/History';
import Settings from './pages/Settings';
import Navbar from './components/Navbar';
import { TimeProvider } from './context/TimeContext';

<<<<<<< HEAD
const App = () => (
  <TimeProvider>
    <Router>
      <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #c7d2fe, #e0e7ff)', fontFamily: 'sans-serif' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/log" element={<LogTime />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  </TimeProvider>
);
=======
  return (
    <div>Hello I am Sujal</div>
  )
}
>>>>>>> 4605e43f582410ee85576d37cbd8ee1c53b45416

export default App;

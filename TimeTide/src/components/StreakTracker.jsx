import React from 'react';

const StreakTracker = ({ streak }) => {
  return (
    <div style={{
      background: 'white',
      padding: '1rem',
      borderRadius: '0.75rem',
      textAlign: 'center',
      boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
      marginTop: '1.5rem'
    }}>
      <h4 style={{ fontSize: '1.125rem', color: '#10b981' }}>🔥 Current Streak</h4>
      <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0.5rem 0' }}>{streak} days</p>
      <small>Keep logging daily!</small>
    </div>
  );
};

export default StreakTracker;

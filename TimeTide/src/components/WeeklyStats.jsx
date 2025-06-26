import React from 'react';

const WeeklyStats = ({ logs }) => {
  const summary = logs.reduce((acc, log) => {
    Object.entries(log).forEach(([hour, cat]) => {
      acc[cat] = (acc[cat] || 0) + 1;
    });
    return acc;
  }, {});

  return (
    <div style={{
      background: 'white',
      padding: '1.5rem',
      borderRadius: '1rem',
      marginTop: '1.5rem',
      boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
    }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#4f46e5' }}>📅 Weekly Summary</h3>
      <ul style={{ marginTop: '1rem' }}>
        {Object.entries(summary).map(([cat, count]) => (
          <li key={cat} style={{ marginBottom: '0.25rem' }}>
            <strong>{cat}</strong>: {count} hours
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeeklyStats;

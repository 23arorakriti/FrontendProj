import React from 'react';
import { useTime } from '../context/TimeContext';

const categories = ['Work', 'Sleep', 'Chores', 'Fun', 'Scroll', 'Exercise', 'Study'];

const LogTime = () => {
  const { timeLog, setTimeLog } = useTime();

  const updateHour = (hour, category) => {
    setTimeLog(prev => ({ ...prev, [hour]: category }));
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
    gap: '1rem',
  };

  const blockStyle = {
    backgroundColor: 'white',
    padding: '0.75rem',
    borderRadius: '0.75rem',
    boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
  };

  return (
    <div style={{ padding: '1.5rem' }}>
      <h2 style={{ fontSize: '1.875rem', fontWeight: '600', color: '#4338ca', marginBottom: '1rem' }}>🕒 Log Your Day</h2>
      <div style={gridStyle}>
        {Array.from({ length: 24 }).map((_, hour) => (
          <div key={hour} style={blockStyle}>
            <p style={{ fontWeight: '500' }}>{hour}:00</p>
            <select
              style={{
                width: '100%',
                marginTop: '0.5rem',
                padding: '0.25rem',
                borderRadius: '0.375rem',
                border: '1px solid #ccc'
              }}
              value={timeLog[hour] || ''}
              onChange={(e) => updateHour(hour, e.target.value)}
            >
              <option value="">--</option>
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogTime;

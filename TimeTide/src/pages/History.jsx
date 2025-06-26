import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const History = () => {
  const [value, setValue] = useState(new Date());
  const [logs, setLogs] = useState({});

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('history')) || {};
    setLogs(stored);
  }, []);

  const selectedDate = value.toDateString();
  const dayLog = logs[selectedDate] || {};

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ fontSize: '2rem', color: '#4338ca', marginBottom: '1rem' }}>📖 Your History</h2>
      <Calendar onChange={setValue} value={value} />
      <div style={{ marginTop: '1.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>{selectedDate}</h3>
        {Object.keys(dayLog).length > 0 ? (
          <ul>
            {Object.entries(dayLog).map(([hour, cat]) => (
              <li key={hour}>
                {hour}:00 → <strong>{cat}</strong>
              </li>
            ))}
          </ul>
        ) : (
          <p>No data logged.</p>
        )}
      </div>
    </div>
  );
};

export default History;

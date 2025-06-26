import React, { useState } from 'react';

const ReflectionModal = ({ onSubmit }) => {
  const [reflection, setReflection] = useState('');

  const handleSubmit = () => {
    onSubmit(reflection);
    setReflection('');
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      zIndex: 999,
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '1rem',
        maxWidth: '400px',
        width: '90%',
        boxShadow: '0 6px 10px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#4338ca' }}>🌿 Daily Reflection</h2>
        <textarea
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
          rows={4}
          style={{
            width: '100%',
            padding: '0.75rem',
            borderRadius: '0.5rem',
            border: '1px solid #ccc',
            marginBottom: '1rem'
          }}
          placeholder="What felt worth it today?"
        />
        <button onClick={handleSubmit} style={{
          backgroundColor: '#4338ca',
          color: 'white',
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '0.5rem',
          fontWeight: 'bold'
        }}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReflectionModal;

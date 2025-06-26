import React, { useState } from 'react';
import { defaultCategories } from '../utils/constants';

const Settings = () => {
  const [ideal, setIdeal] = useState(() =>
    defaultCategories.reduce((acc, cat) => {
      acc[cat.name] = 0;
      return acc;
    }, {})
  );

  const handleChange = (cat, val) => {
    setIdeal({ ...ideal, [cat]: parseInt(val) || 0 });
  };

  const handleSave = () => {
    localStorage.setItem('idealDistribution', JSON.stringify(ideal));
    alert('✅ Saved ideal time preferences!');
  };

  return (
    <div style={{ padding: '1.5rem' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4338ca', marginBottom: '1rem' }}>
        ⚙️ Set Your Ideal Time
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '1rem' }}>
        {Object.entries(ideal).map(([cat, hours]) => (
          <div key={cat} style={{
            background: 'white',
            padding: '1rem',
            borderRadius: '0.75rem',
            boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
          }}>
            <label style={{ display: 'block', fontWeight: '500', marginBottom: '0.5rem' }}>{cat}</label>
            <input
              type="number"
              min="0"
              max="24"
              value={hours}
              onChange={(e) => handleChange(cat, e.target.value)}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid #ccc' }}
            />
          </div>
        ))}
      </div>
      <button onClick={handleSave} style={{
        marginTop: '1.5rem',
        padding: '0.75rem 1.5rem',
        backgroundColor: '#4338ca',
        color: 'white',
        borderRadius: '0.5rem',
        fontWeight: 'bold',
        border: 'none'
      }}>
        Save Preferences
      </button>
    </div>
  );
};

export default Settings;

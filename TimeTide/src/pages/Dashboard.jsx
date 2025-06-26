import React, { useState } from 'react';
import PieChartComponent from '../components/PieChart';
import ComparisonChart from '../components/ComparisonChart';

const Dashboard = () => {
  const [idealDistribution] = useState({
    Work: 8,
    Sleep: 8,
    Exercise: 1,
    Chores: 2,
    Fun: 2,
    Scroll: 1,
    Study: 2,
  });

  return (
    <div style={{ padding: '1.5rem' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3730a3', marginBottom: '1.5rem' }}>
        📊 Dashboard
      </h2>
      <PieChartComponent />
      <h3 style={{ fontSize: '1.5rem', color: '#4338ca', marginTop: '2rem' }}>Ideal vs Actual</h3>
      <ComparisonChart idealDistribution={idealDistribution} />
    </div>
  );
};

export default Dashboard;

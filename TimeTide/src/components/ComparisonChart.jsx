import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import { useTime } from '../context/TimeContext';
import { defaultCategories } from '../utils/constants';

const ComparisonChart = ({ idealDistribution }) => {
  const { timeLog } = useTime();

  const actual = defaultCategories.map((cat) => ({
    name: cat.name,
    value: Object.values(timeLog).filter((c) => c === cat.name).length,
  }));

  const ideal = Object.entries(idealDistribution).map(([name, value]) => ({
    name,
    value,
  }));

  const boxStyle = {
    textAlign: 'center',
    marginTop: '1.5rem',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '1rem' }}>
      <div style={boxStyle}>
        <h4 style={{ color: '#4f46e5', fontWeight: '600', marginBottom: '0.5rem' }}>Actual</h4>
        <PieChart width={250} height={250}>
          <Pie data={actual} dataKey="value" outerRadius={80} label>
            {actual.map((_, index) => (
              <Cell key={`a-${index}`} fill={defaultCategories[index].color} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </div>
      <div style={boxStyle}>
        <h4 style={{ color: '#4f46e5', fontWeight: '600', marginBottom: '0.5rem' }}>Ideal</h4>
        <PieChart width={250} height={250}>
          <Pie data={ideal} dataKey="value" outerRadius={80} label>
            {ideal.map((entry, index) => (
              <Cell key={`b-${index}`} fill={defaultCategories[index % defaultCategories.length].color} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default ComparisonChart;

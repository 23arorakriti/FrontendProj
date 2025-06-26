import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { useTime } from '../context/TimeContext';
import { defaultCategories } from '../utils/constants';

const PieChartComponent = () => {
  const { timeLog } = useTime();

  const data = defaultCategories.map((cat) => {
    const count = Object.values(timeLog).filter((c) => c === cat.name).length;
    return { name: cat.name, value: count };
  });

  return (
    <div style={{
      background: 'white',
      padding: '1.5rem',
      borderRadius: '1rem',
      boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
      marginBottom: '2rem'
    }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#3730a3' }}>
        🧁 Daily Distribution
      </h3>
      <PieChart width={350} height={300}>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={defaultCategories[index].color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default PieChartComponent;

import React, { createContext, useContext, useState, useEffect } from 'react';

const TimeContext = createContext();

export const TimeProvider = ({ children }) => {
  const [timeLog, setTimeLog] = useState(() => {
    const stored = localStorage.getItem('timeLog');
    return stored ? JSON.parse(stored) : {};
  });

  useEffect(() => {
    localStorage.setItem('timeLog', JSON.stringify(timeLog));
  }, [timeLog]);

  return (
    <TimeContext.Provider value={{ timeLog, setTimeLog }}>
      {children}
    </TimeContext.Provider>
  );
};

export const useTime = () => useContext(TimeContext);

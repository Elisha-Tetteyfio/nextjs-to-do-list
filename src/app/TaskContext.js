'use client'
import { createContext, useState } from 'react';

const TaskContext = createContext();

export default TaskContext;

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  return (
    <TaskContext.Provider value={[ tasks, setTasks ]}>
      {children}
    </TaskContext.Provider>
  );
};

export const getTask = () => {
  
}

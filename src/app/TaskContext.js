"use client"
import { createContext, useState } from 'react';

const TaskContext = createContext();

export default TaskContext;

export const TaskProvider = ({ children }) => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  const storedLists = JSON.parse(localStorage.getItem('lists') || '[{"name":"Personal", "color": "bg-blue-400", "key": "0"}]');

  const [tasks, setTasks] = useState(storedTasks);
  const [lists, setLists] = useState(storedLists);
  const [activeTab, setActiveTab] = useState("tab-today");

  return (
    <TaskContext.Provider value={[ tasks, setTasks, lists, setLists, activeTab, setActiveTab ]}>
      {children}
    </TaskContext.Provider>
  );
};

'use client'
import React, { createContext, useState, useContext, useEffect } from 'react';
import { NewTask, Task } from './components'
import TaskContext from './TaskContext';

export default function Home() {
  const [showNewTask, setShowNewTask] = useState(false);
  const [tasks, setTasks, lists] = useContext(TaskContext);
  const [selectedTask, setSelectedTask] = useState(null);

  const show_new=(task)=>{
    setSelectedTask(task)
    setShowNewTask(true)
  }

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
     setTasks(tasks);
    }
  }, []);

  return (
    <main className="w-9/12 flex">
      {/* Main screen */}
      <div className='w-full px-5'>
        <div className="text-3xl font-bold">
          Today
        </div>
        <div className='mt-8'>
          <button className='border w-full h-[45px] rounded flex items-baseline my-2' onClick={() =>show_new()}>
            <p className='mx-5 font-bold text-3xl'>+</p>
            <p className='text-gray-400'>Add new task</p>
          </button>
        </div>
        {
          tasks.map(task=>
            <Task task={task} key={task.key} onEdit={() => show_new(task)}/>
          )
        }
      </div>
      {/* New task side bar */}
      {
        showNewTask &&
        <NewTask onClose={() => setShowNewTask(false)} details={selectedTask}/>
      }
    </main>
  )
}

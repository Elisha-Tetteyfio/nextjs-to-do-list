'use client'
import React, { createContext, useState, useContext, useEffect } from 'react';
import { NewTask, Task } from './components'
import TaskContext from './TaskContext';

export default function Home() {
  const [show, setShow] = React.useState(false);
  const [tasks, setTasks] = useContext(TaskContext);

  function show_new(){
    setShow(true)
  }

  const hide_new = () => {
    setShow(false)
  }

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

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
          <input type='text' placeholder='Add new task' className='border w-full h-[45px] rounded'  readOnly onClick={show_new}/>
        </div>
        {
          tasks.map(task=>{
              return(<Task task={task}/>)
          }
            
          )
        }
      </div>
      {/* New task side bar */}
      {
        show && (
          <div className='bg-gray-100 w-2/3 px-5 py-3 rounded-xl'>
            <div className=" flex justify-between text-3xl font-medium w-full items-center">
              <h3 className="text-xl">Task:</h3> <i className="bi-x" onClick={hide_new}/>
            </div>
            <NewTask/>
          </div>
        )
      }
    </main>
  )
}

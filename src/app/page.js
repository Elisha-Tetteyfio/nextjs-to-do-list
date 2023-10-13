'use client'
import React, { useState, useContext, useEffect } from 'react';
import { NewTask, Task } from './components'
import TaskContext from './TaskContext';
import { getCompleteTask, getPendingTask, getTodayTask } from './filters';

export default function Home() {
  const [showNewTask, setShowNewTask] = useState(false);
  const [tasks, setTasks, , , activeTab] = useContext(TaskContext);
  const [selectedTask, setSelectedTask] = useState(null);
  const [displayTask, setDisplayTask] = useState(getTodayTask(tasks));

  const show_new=(task)=>{
    setSelectedTask(task)
    setShowNewTask(true)
  }

  const filterTasks = () =>{
    if(activeTab == "tab-today"){
      setDisplayTask(getTodayTask(tasks))
    } 
    else if (activeTab == "tab-completed"){
      setDisplayTask(getCompleteTask(tasks))
    }
    else if (activeTab == "tab-pending"){
      setDisplayTask(getPendingTask(tasks))
    }
    else if (activeTab == "tab-alltasks"){
      setDisplayTask(tasks)
    }
  }

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
     setTasks(tasks);
    }
  }, []);

  useEffect(()=>{
    setShowNewTask(false)
    filterTasks()
  }, [activeTab])

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
          displayTask.map(task=>
            <Task task={task} key={task.key} onEdit={() => show_new(task)}/>
          )
        }
        {
          // No task to display
          displayTask.length == 0 &&
          <div className='mt-8 italic text-xl text-center text-gray-300'>No tasks to display</div>
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

import React, { useState, useContext, useEffect } from 'react';
import { NewTask, Task } from './components';
import TaskContext from './TaskContext';
import { getCompleteTask, getListTask, getPendingTask, getTodayTask } from './filters';

export default function Home() {
  const [showNewTask, setShowNewTask] = useState(false);
  const [tasks, setTasks, , , activeTab] = useContext(TaskContext);
  const [selectedTask, setSelectedTask] = useState(null);
  const displayedTasks = getDisplayedTasks(activeTab, tasks);

  const showNew = (task) => {
    setSelectedTask(task);
    setShowNewTask(true);
  }

  const getDisplayedTasks = (tab, tasks) => {
    if (tab === "tab-today") {
      return getTodayTask(tasks);
    } else if (tab === "tab-completed") {
      return getCompleteTask(tasks);
    } else if (tab === "tab-pending") {
      return getPendingTask(tasks);
    } else if (tab === "tab-alltasks") {
      return tasks;
    } else {
      return getListTask(tasks, tab);
    }
  }

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    setShowNewTask(false);
  }, [activeTab]);

  useEffect(() => {
    filterTasks();
  }, [tasks]);

  return (
    <main className="w-9/12 flex">
      {/* Main screen */}
      <div className='w-full px-5'>
        <div className="text-3xl font-bold">Todo list</div>
        <div className='mt-8'>
          <button className='border w-full h-[45px] rounded flex items-baseline my-2' onClick={() => showNew()}>
            <p className='mx-5 font-bold text-3xl'>+</p>
            <p className='text-gray-400'>Add new task</p>
          </button>
        </div>
        {displayedTasks.map(task =>
          <Task task={task} key={task.key} onEdit={() => showNew(task)} />
        )}
        {displayedTasks.length === 0 && <div className='mt-8 italic text-xl text-center text-gray-300'>No tasks to display</div>}
      </div>
      {
        showNewTask &&
        <NewTask onClose={() => setShowNewTask(false)} details={selectedTask} />
      }
    </main>
  )
}

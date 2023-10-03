'use client'
import { useState, useContext, useEffect } from "react";
import TaskContext from "../TaskContext";

const NewTask= () => {
  const [tasks, setTasks] = useContext(TaskContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(e) {
    e.preventDefault()
    addTask({title: title, description: description})
  }

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // add to local storage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="w-full bg-gray-100 mt-2">
      <form onSubmit={handleSubmit}>
        <div className=''>
          <input 
            type='text' 
            placeholder='Task name' 
            name="title" 
            onChange={(e) => setTitle(e.target.value)} 
            className='border w-full h-[45px] rounded bg-inherit p-2'
          />
          <textarea 
            placeholder="Description" 
            name="description" 
            onChange={(e) => setDescription(e.target.value)} 
            className='mt-3 border w-full h-[120px] rounded bg-inherit p-2 resize-none'
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default NewTask;
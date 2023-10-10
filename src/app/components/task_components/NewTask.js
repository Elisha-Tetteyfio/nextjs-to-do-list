'use client'
import { useState, useContext, useEffect } from "react";
import TaskContext from "../../TaskContext";
import { v4 } from 'uuid';

const NewTask= ({details, onClose}) => {
  const [tasks, setTasks, lists, setLists] = useContext(TaskContext);
  const [title, setTitle] = useState(details?.title);
  const [description, setDescription] = useState(details?.description);
  const [list, setList] = useState(details?.list);
  const [date, setDate] = useState(details?.date);

  useEffect(() => {
    setTitle(details?.title || "")
    setDescription(details?.description || "")
    setList(details?.list)
    setDate(details?.date || "")
  }, [details])

  function handleSubmit(e) {
    e.preventDefault()
    addTask({
      title: title,
      description: description,
      list: list,
      date: date,
      key: v4()
    })
  }

  const addTask = (task) => {
    onClose()
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    onClose()
    setTasks(tasks.filter(item => item.key !== id))
  }

  // add to local storage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className='bg-gray-100 w-2/3 px-5 py-3 rounded-xl flex flex-col'>
      <div className="flex justify-between text-3xl font-medium w-full items-center">
        <h3 className="text-xl">Task:</h3> <i className="bi-x" onClick={()=>onClose()}/>
      </div>
      <div className="w-full bg-gray-100 mt-2 h-inherit grow">
        <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between">
          <div className=''>
            <input 
              type='text' 
              placeholder='Task name' 
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)} 
              className='border w-full h-[45px] rounded bg-inherit p-2'
              required
            />
            <textarea 
              placeholder="Description" 
              name="description" 
              value={description}
              onChange={(e) => setDescription(e.target.value)} 
              className='mt-3 border w-full h-[120px] rounded bg-inherit p-2 resize-none'
            />
            <div className="w-2/3 flex justify-between items-baseline mt-3 text-sm">
              <label htmlFor="list">
                List
              </label>
              <select
                name="Lists"
                id="list"
                value={list|| ""}
                className="border bg-inherit rounded-lg p-1"
                onChange={(e) => setList(e.target.value)} 
              >
                <option value="" disabled >- select list -</option>
                {lists.map((list) => (
                  <option value={list.key} key={list.key}>{list.name}</option>
                ))}
              </select>
            </div>
            <div className="w-2/3 flex justify-between items-baseline mt-3 text-sm">
              <label htmlFor="date">
                Due date
              </label>
              <input 
                id="date"
                name="Date"
                type="date"
                value={date}
                className="border bg-inherit rounded-lg p-1"
                min={new Date().toJSON().slice(0, 10)}
                onChange={(e) => setDate(e.target.value)} 
              /> 
            </div>
          </div>
          <div className="flex justify-between">
            {
              details?
              <button type="button" className="w-[48%] h-10 border rounded-lg bg-red-600 text-gray-100" onClick={()=>deleteTask(details.key)}>Delete</button>
              :
              <button type="button" className="w-[48%] h-10 border rounded-lg" onClick={()=>onClose()}>Close</button>
            }
            <button type="submit" className="w-[48%] h-10 border rounded-lg bg-yellow-400 text-black">Save task</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewTask;
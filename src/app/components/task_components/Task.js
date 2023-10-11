'use client'
import { useContext, useEffect, useState } from "react";
import TaskContext from "../../TaskContext";

const Task = ({task, onEdit}) => {
  const [completed, setCompleted] = useState(task.completed)
  const [tasks, setTasks] = useContext(TaskContext);

  const updateTask = (e, key) => {
    setCompleted(!completed)
    const update = [...tasks];
    let itemIndex = update.findIndex((item) => item.key === key);
  
    if (itemIndex !== -1) {
      const updatedItem = { ...update[itemIndex], completed: !completed };
      update[itemIndex] = updatedItem;
      setTasks(update);
    }
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [completed])

  return(
    <div className={`flex justify-between px-5 py-3 border-b ${completed? "bg-gray-50 text-gray-400":""}`} onClick={()=>onEdit()}>
      <div className="flex items-baseline">
        <input type="checkbox" onChange={(e) => updateTask(e, task.key)} checked={completed||false} onClick={(e)=> e.stopPropagation()}/>
        <div className="ml-5">
          <div className={`text-lg ${completed? "italic line-through":""}`}>{task.title}</div>
          <div className="flex text-xs font-bold">
            {
              task.date && !task.completed &&
              <div className="flex  border-r p-1 mr-2">
                <i className="bi-calendar-x mr-2"/>
                <p className="mr-2">{task.date}</p>
              </div>
            }
            {
              task.list && 
              <TaskList listKey={task.list}/>
            }
          </div>
        </div>
      </div>
      <i className="bi-chevron-right" />
    </div>
  )
}

const TaskList = (listKey) => {
  const [tasklist, setTasklist] = useState([]);
  const [, , lists] = useContext(TaskContext);

  useEffect(()=> {
    setTasklist(lists.find(l=> l.key == listKey.listKey))
  },[])

  return(
    <div className="flex border-r p-1 mr-2">
      <span className={`${tasklist.color} w-3.5 h-3.5 rounded mr-2`}/>
      <p className="mr-2">{tasklist.name}</p>
    </div>
  )
}

export default Task;
'use client'
import { useContext, useEffect, useState } from "react";
import TaskContext from "../TaskContext";

const Task = ({task, onEdit}) => {
  // details = task;

  return(
    <div className="flex justify-between px-5 py-3 border-b" onClick={()=>onEdit()}>
      <div className="flex items-baseline">
        <input type="checkbox" onClick={(e) => e.stopPropagation()}/>
        <div className="ml-5">
          <div className="text-lg">{task.title}</div>
          <div className="flex text-xs font-bold">
            {
              task.date &&
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
"use client"
import { useContext, useEffect, useState } from "react";
import TaskContext from "../../TaskContext";
import { getListTask } from "@/app/filters";
import DeleteList from "./DeleteList";

const List = (details) => {
  const [tasks, setTasks, lists, setLists, activeTab, setActiveTab] = useContext(TaskContext);
  const [isHighlighted, setIsHighlighted] = useState(false)
  const highlighted = isHighlighted? "rounded p-1 text-black bg-gray-200":""
  const highlightedCount = isHighlighted? "bg-white":""
  const [showDeletePrompt, setShowDeletePrompt] = useState(false); 

  details = details.list;

  const deleteList = (id) => {
    setTasks(tasks.filter(item => item.list !== id))
    setLists(lists => lists.filter((list) => list.key != id))
    setShowDeletePrompt(false)
    setActiveTab("tab-today")
  }

  const countListTask = () => {
    return getListTask(tasks, details.key).length
  }
  const changeTab = () => {
    setActiveTab(details.key)
  }

  useEffect(()=>{
    if(activeTab==details.key){
      setIsHighlighted(true)
    }else{
      setIsHighlighted(false)
    }
  }, [activeTab])

  return(
    <li className={`flex justify-between text-center my-2 ${highlighted}`} onClick={changeTab}>
      <div className='flex items-center'><div className={`${details.color} w-4 h-4 rounded mx-3`}/> <p>{details.name}</p></div>
      <div className="flex">
        <div className={`bg-gray-200 rounded px-2 text-sm h-fit font-medium mr-2 ${highlightedCount}`}>{countListTask()}</div>
        <button className="bi-trash" onClick={()=>setShowDeletePrompt(true)}/>
      </div>
      {
        showDeletePrompt &&
        <DeleteList
          onCancel={()=>setShowDeletePrompt(false)}
          onDelete={()=>deleteList(details.key)}
        />
      }
    </li>
  )
}

export default List;
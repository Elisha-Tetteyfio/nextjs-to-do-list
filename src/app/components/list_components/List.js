"use client"
import { useContext } from "react";
import TaskContext from "../../TaskContext";

const List = (details) => {
  const [, , lists, setLists] = useContext(TaskContext);

  details = details.list;

  const deleteList = (id) => {
    setLists(lists => lists.filter((list) => list.key != id))
  }

  return(
    <li className='flex justify-between text-center my-2'>
      <div className='flex items-center'><div className={`${details.color} w-4 h-4 rounded mx-3`}/> <p>{details.name}</p></div>
      <div className="flex">
        <div className='bg-gray-200 rounded px-2 text-sm h-fit font-medium mr-2'>0</div>
        <button className="bi-trash" onClick={()=>deleteList(details.key)}/>
      </div>
    </li>
  )
}

export default List;
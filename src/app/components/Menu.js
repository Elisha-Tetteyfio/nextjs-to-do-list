'use client'

import { useContext } from "react";
import TaskContext from "../TaskContext";

const Menu = () => {
  const [tasks, setTasks] = useContext(TaskContext);
  
  return(
    <div className="w-3/12 rounded-xl bg-gray-100 p-3">
      <div className='font-medium text-xl flex justify-between'>
        <p>Menu</p> <i className='bi-list'/>
      </div>
      <hr/>
      <div className='mt-5'>
        <h6 className='text-xs font-medium'>TASKS</h6>
        <ul>
          <li className='flex justify-between text-center my-2'>
            <div className='flex'><i className='bi-chevron-double-right mx-3'/> <p>Upcoming</p></div>
            <div className='bg-gray-200 rounded px-2 text-sm h-fit font-medium'>12</div>
          </li>
          <li className='flex justify-between text-center my-2'>
            <div className='flex'><i className='bi-list-check mx-3'/> <p>Today</p></div>
            <div className='bg-gray-200 rounded px-2 text-sm h-fit font-medium'>5</div>
          </li>
          <li className='flex justify-between text-center my-2'>
            <div className='flex'><i className='bi-calendar3 mx-3'/> <p>Calendar</p></div>
            <div className='bg-gray-200 rounded px-2 text-sm h-fit font-medium'></div>
          </li>
          <li className='flex justify-between text-center my-2'>
            <div className='flex'><i className='bi-sticky-fill mx-3'/> <p>Sticky wall</p></div>
            <div className='bg-gray-200 rounded px-2 text-sm h-fit font-medium'></div>
          </li>
        </ul>
      </div>
      <hr className='mt-5'/>
      <div className='mt-5'>
        <h6 className='text-xs font-medium'>LISTS</h6>
        <ul>
          <li className='flex justify-between text-center my-2'>
            <div className='flex items-center'><div className='bg-red-300 w-4 h-4 rounded mx-3'/> <p>Personal</p></div>
            <div className='bg-gray-200 rounded px-2 text-sm h-fit font-medium'>12</div>
          </li>
          <li className='flex justify-between text-center my-2'>
            <div className='flex items-center'><div className='bg-yellow-300 w-4 h-4 rounded mx-3'/> <p>Work</p></div>
            <div className='bg-gray-200 rounded px-2 text-sm h-fit font-medium'>5</div>
          </li>
          <li className='flex justify-between text-center my-2'>
            <div className='flex items-center'><div className='bg-blue-300 w-4 h-4 rounded mx-3'/> <p>Family</p></div>
            <div className='bg-gray-200 rounded px-2 text-sm h-fit font-medium'></div>
          </li>
          <li className='flex justify-between text-center my-2'>
            <div className='flex items-center'><i className='bi-plus mx-3'/> <p>Add new list</p></div>
            <div className='bg-gray-200 rounded px-2 text-sm h-fit font-medium'></div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu;
'use client'

import { useContext, useEffect, useState } from "react";
import { v4 } from 'uuid';
import TaskContext from "../TaskContext";
import List from "./List";

const Menu = () => {
  const [, , lists, setLists] = useContext(TaskContext);
  const [showAddList, setShowAddList] = useState(false)

  const add_list_menu = () => setShowAddList(true);

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(lists));
  }, [lists]);
  
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
          {
            lists.map(list=>{
              return(
                <List list={list} key={list.key}/>
              )
            })
          }
          <button className='flex justify-between text-center my-2' onClick={add_list_menu}>
            <div className='flex items-center'><i className='bi-plus-lg mx-3'/> <p>Add new list</p></div>
            <div className='bg-gray-200 rounded px-2 text-sm h-fit font-medium'></div>
          </button>
          {
            showAddList && <AddList onClose={() => setShowAddList(false)}/>
          }
        </ul>
      </div>
    </div>
  )
}

const AddList = ({onClose}) => {
  const [, , lists, setLists] = useContext(TaskContext);
  const [color, setColor] = useState('bg-red-400')
  const [name, setName] = useState('')
  const selectColor = (value) => setColor(value);
  
  const handleInput = (e) =>{
    if (e.key === "Enter") {
      onClose()
      setName(e.target.value)
      setLists([...lists, {key: v4(), name: name, color: color}])
    }
  }

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(lists));
  }, [lists]);

  return(
    <div className="border rounded h-[100px] p-2 mt-5">
      <div className="px-2 border flex items-baseline">
        <div className={`${color} w-4 h-4 rounded`}/>
        <input
          placeholder="List name"
          className="bg-inherit p-2 outline-none"
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e)=>handleInput(e)}
          maxLength="25"
        />
      </div>
      <ul className="mt-3 flex justify-between">
        <li className='bg-red-400 w-4 h-4 rounded' onClick={()=>selectColor("bg-red-400")}/>
        <li className='bg-orange-400 w-4 h-4 rounded' onClick={()=>selectColor("bg-orange-400")}/>
        <li className='bg-yellow-400 w-4 h-4 rounded' onClick={()=>selectColor("bg-yellow-400")}/>
        <li className='bg-green-400 w-4 h-4 rounded' onClick={()=>selectColor("bg-green-400")}/>
        <li className='bg-cyan-400 w-4 h-4 rounded' onClick={()=>selectColor("bg-cyan-400")}/>
        <li className='bg-blue-400 w-4 h-4 rounded' onClick={()=>selectColor("bg-blue-400")}/>
        <li className='bg-purple-400 w-4 h-4 rounded' onClick={()=>selectColor("bg-purple-400")}/>
        <li className='bg-indigo-400 w-4 h-4 rounded' onClick={()=>selectColor("bg-indigo-400")}/>
      </ul>
    </div>
  )
}

export default Menu;
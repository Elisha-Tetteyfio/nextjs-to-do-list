'use client'

import { useContext, useEffect, useState } from "react";
import TaskContext from "../TaskContext";
import List from "./list_components/List";
import ListForm from "./list_components/ListForm";
import Tabs from "./tab_components/Tabs";

const Menu = () => {
  const [, , lists] = useContext(TaskContext);
  const [showAddList, setShowAddList] = useState(false);

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
        <Tabs />
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
        </ul>
        <button className='flex justify-between text-center my-2' onClick={add_list_menu}>
          <div className='flex items-center'><i className='bi-plus-lg mx-3'/> <p>Add new list</p></div>
          <div className='bg-gray-200 rounded px-2 text-sm h-fit font-medium'></div>
        </button>
        {
          showAddList && <ListForm onClose={() => setShowAddList(false)}/>
        }
      </div>
    </div>
  )
}

export default Menu;
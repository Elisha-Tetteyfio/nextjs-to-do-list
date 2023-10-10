'use client'

import { useContext, useEffect, useState } from "react";
import TaskContext from "../TaskContext";
import List from "./list_components/List";
import ListForm from "./list_components/ListForm";
import Tab from "./Tab";

const Menu = () => {
  const [, , lists, setLists] = useContext(TaskContext);
  const [showAddList, setShowAddList] = useState(false);
  const [currentTab, setCurrentTab] = useState("tab-today");

  const changeTab = (tabKey) => {
    setCurrentTab(tabKey)
  }

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
          <Tab 
            details={{name:"Upcoming", count:"0", icon:"bi-chevron-double-right"}}
            key="tab-upcoming"
            isHighlighted={currentTab=="tab-upcoming"}
            onSelect={()=>changeTab("tab-upcoming")}
          />
          <Tab 
            details={{name:"Today", count:"0", icon:"bi-list-check"}}
            key="tab-today"
            isHighlighted={currentTab=="tab-today"}
            onSelect={()=>changeTab("tab-today")}
          />
          <Tab 
            details={{name:"Calendar", icon:"bi-calendar3"}}
            key="tab-calendar"
            isHighlighted={currentTab=="tab-calendar"}
            onSelect={()=>changeTab("tab-calendar")}
          />
          <Tab 
            details={{name:"Sticky wall", icon:"bi-sticky-fill"}}
            key="tab-sticky"
            isHighlighted={currentTab=="tab-sticky"}
            onSelect={()=>changeTab("tab-sticky")}
          />
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
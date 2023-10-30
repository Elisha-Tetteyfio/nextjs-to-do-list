import { useContext, useState } from "react";
import Tab from "./Tab";
import { getCompleteTask, getPendingTask, getTodayTask } from "@/app/filters";
import TaskContext from "@/app/TaskContext";

const Tabs = () => {
  const [tasks, , , , activeTab, setActiveTab] = useContext(TaskContext)

  const changeTab = (tabKey) => {
    setActiveTab(tabKey)
  }

  const countTodayTask = () => {
    return getTodayTask(tasks).length
  }
  const countAllTasks = () => {
    return tasks.length
  }
  const countCompleteTask = () => {
    return getCompleteTask(tasks).length
  }
  const countPendingTask = () => {
    return getPendingTask(tasks).length
  }

  return(
    <ul>
      <Tab
        details={{name:"All tasks", count:countAllTasks(), icon:"bi-chevron-double-right"}}
        key="tab-alltasks"
        isHighlighted={activeTab=="tab-alltasks"}
        onSelect={()=>changeTab("tab-alltasks")}
      />
      <Tab 
        details={{name:"Today", count:countTodayTask(), icon:"bi-list-check"}}
        key="tab-today"
        isHighlighted={activeTab=="tab-today"}
        onSelect={()=>changeTab("tab-today")}
      />
      <Tab 
        details={{name:"Completed", count:countCompleteTask(), icon:"bi-check2-square"}}
        key="tab-completed"
        isHighlighted={activeTab=="tab-completed"}
        onSelect={()=>changeTab("tab-completed")}
      />
      <Tab 
        details={{name:"Pending", count:countPendingTask(), icon:"bi-clock"}}
        key="tab-pending"
        isHighlighted={activeTab=="tab-pending"}
        onSelect={()=>changeTab("tab-pending")}
      />
    </ul>
  )
}

export default Tabs;
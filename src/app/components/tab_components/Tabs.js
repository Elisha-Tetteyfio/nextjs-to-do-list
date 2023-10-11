import { useContext, useState } from "react";
import Tab from "./Tab";
import { completeTask, pendingTask, todayTask } from "@/app/filters";
import TaskContext from "@/app/TaskContext";

const Tabs = () => {
  const [tasks] = useContext(TaskContext)
  const [currentTab, setCurrentTab] = useState("tab-today");

  const changeTab = (tabKey) => {
    setCurrentTab(tabKey)
  }

  const countTodayTask = () => {
    return todayTask(tasks).length
  }
  const countAllTasks = () => {
    return tasks.length
  }
  const countCompleteTask = () => {
    return completeTask(tasks).length
  }
  const countPendingTask = () => {
    return pendingTask(tasks).length
  }

  return(
    <ul>
      <Tab
        details={{name:"All tasks", count:countAllTasks(), icon:"bi-chevron-double-right"}}
        key="tab-upcoming"
        isHighlighted={currentTab=="tab-upcoming"}
        onSelect={()=>changeTab("tab-upcoming")}
      />
      <Tab 
        details={{name:"Today", count:countTodayTask(), icon:"bi-list-check"}}
        key="tab-today"
        isHighlighted={currentTab=="tab-today"}
        onSelect={()=>changeTab("tab-today")}
      />
      <Tab 
        details={{name:"Completed", count:countCompleteTask(), icon:"bi-check2-square"}}
        key="tab-calendar"
        isHighlighted={currentTab=="tab-calendar"}
        onSelect={()=>changeTab("tab-calendar")}
      />
      <Tab 
        details={{name:"Pending", count:countPendingTask(), icon:"bi-clock"}}
        key="tab-sticky"
        isHighlighted={currentTab=="tab-sticky"}
        onSelect={()=>changeTab("tab-sticky")}
      />
    </ul>
  )
}

export default Tabs;
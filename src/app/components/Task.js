import { list } from "postcss";

const Task = (details) => {
  details = details.task;
  return(
    <div className="flex justify-between px-5 py-3 border-b">
      <div className="flex items-baseline">
        <input type="checkbox" />
        <div className="ml-5 font-medium">
          <div className="">{details.title}</div>
          <div className="flex text-xs mt-2 font-bold">
            {
              list.date &&
              <div className="flex  border-r p-1 mr-2">
                <i className="bi-calendar mr-2"/>
                <p className="mr-2">22-03-23</p>
              </div>
            }
            <div className="flex border-r p-1 mr-2">
              <span className='mr-2 bg-gray-200 rounded px-1.5 text-xs h-fit font-medium'>0</span>
              <p className="mr-2">Subtasks</p>
            </div>
            {
              details.list &&
              <div className="flex border-r p-1 mr-2">
                <span className='bg-red-300 w-3.5 h-3.5 rounded mr-2'/>
                <p className="mr-2">{details.list.name}</p>
              </div>
            }
          </div>
        </div>
      </div>
      <i className="bi-chevron-right" />
    </div>
  )
}

export default Task;
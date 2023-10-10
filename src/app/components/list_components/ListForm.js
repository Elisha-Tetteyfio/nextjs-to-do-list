import TaskContext from '@/app/TaskContext';
import { useContext, useEffect, useState } from 'react';
import { v4 } from 'uuid';

const ListForm = ({onClose}) => {
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

export default ListForm;
const NewTask= () => {
  return (
    <div className="w-full bg-gray-100 mt-2">
      <div className=''>
        <input type='text' placeholder='Task name' className='border w-full h-[45px] rounded bg-inherit p-2'/>
        <textarea placeholder="Description" className='mt-3 border w-full h-[120px] rounded bg-inherit p-2 resize-none'/>
      </div>
    </div>
  )
}

export default NewTask;
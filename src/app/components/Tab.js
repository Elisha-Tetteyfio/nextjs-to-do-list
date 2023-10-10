'use client'

const Tab = ({details, isHighlighted, onSelect}) => {
  const highlighted = isHighlighted? "rounded p-1 text-black bg-gray-200":""
  const highlightedCount = isHighlighted? "bg-white":""

  return(
    <div className={`flex justify-between text-center my-2 ${highlighted}`} onClick={()=>onSelect()}>
      <div className='flex'>
        <i className={`${details.icon} mx-3`}/>
        <p>{details.name}</p>
      </div>
      <div className={`bg-gray-200 rounded px-2 text-sm h-fit font-medium ${highlightedCount}`}>{details.count}</div>
    </div>
  )
}

export default Tab;
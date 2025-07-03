import React from 'react'

function AcceptTask({task}) {
  return (
    <div className='flex-shrink-0 w-full md:w-1/4 h-full p-5 bg-green-400 rounded-xl flex flex-col'>
      <div className='flex justify-between items-center'>
        <h2 className='bg-green-600 text-sm py-1 px-3 rounded'>{task.category}</h2>
        <h3 className='text-sm'>{task.date} </h3>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{task.title}</h2>
      <p className='text-sm mt-2 flex-1'>
        {task.description.length > 100 ? task.description.slice(0, 100) + "..." : task.description}
        {/* <span className='text-blue-600'> Read More</span> */}
      </p>
      <div className='flex items-center justify-between gap-2 mt-auto'>
        <button className='bg-green-600 py-1 px-2 text-sm rounded w-1/2'>{task.completed ? "Completed" : "Not Completed"}</button>
        <button className='bg-red-600 py-1 px-2 text-sm rounded w-1/2'>{task.failed ? "Failed" : "Mark as Failed"}</button>
      </div>  
    </div>
  )
}

export default AcceptTask
import React from 'react'

function TaskList() {
  return (
    <div className='flex overflow-x-auto h-1/2 justify-center items-center flex-nowrap bg-zinc-700 text-white py-5 gap-5'>
        <div className='flex-shrink-0 w-1/4 h-full px-10 py-5 bg-red-400 rounded-xl'>

        </div>
        <div className='flex-shrink-0 w-1/4 h-full px-10 py-5 bg-yellow-400 rounded-xl'>
        </div>
        <div className='flex-shrink-0 w-1/4 h-full px-10 py-5 bg-blue-400 rounded-xl'>
        </div>
        <div className='flex-shrink-0 w-1/4 h-full px-10 py-5 bg-green-400 rounded-xl'>
        </div>
        <div className='flex-shrink-0 w-1/4 h-full px-10 py-5 bg-red-400 rounded-xl'>
        </div>
        
    </div>
  )
}

export default TaskList
import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

function TaskList() {
  return (
    <div id="tasklist" className='h-1/2 overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 px-10'>
        <AcceptTask />
        <NewTask />
        <CompleteTask />
        <FailedTask />
        
    </div>
  )
}

export default TaskList
import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

function TaskList({ data }) {
  return (
    <div id="tasklist" className='h-1/2 overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 px-10'>
      {data.tasks.map((task, index) => {
        // <NewTask key={index} task={task} />
        if (task.active) {
          return <AcceptTask key={index} task={task} />
        }
        if (task.newTask) {
          return <NewTask key={index} task={task} />
        }
        if (task.completed) {
          return <CompleteTask key={index} task={task} />
        }
        if (task.failed) {
          return <FailedTask key={index} task={task} />
        }
        return null
      })}

    </div>
  )
}

export default TaskList
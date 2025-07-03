import React from 'react'

function TaskListNum({ tasks }) {
    console.log("Tasks in TaskListNum:", tasks);
    const newTaskCount = tasks.filter(task => task.newTask).length;
    const completedTaskCount = tasks.filter(task => task.completed).length;
    const acceptedTaskCount = tasks.filter(task => task.active && !task.newTask && !task.completed).length;
    const failedTaskCount = tasks.filter(task => task.failed).length;
    return (
        <div className='flex m-10 justify-between bg-zinc-800 text-white p-5 gap-5 rounded-xl'>
            <div className='w-1/3 px-10 py-5 bg-blue-400 rounded-xl'>
                <h2 className='text-3xl font-semibold'>{ newTaskCount }</h2>
                <h3 className='text-xl font-medium'>new task</h3>
            </div>
            <div className='w-1/3 px-10 py-5 bg-green-400 rounded-xl'>
                <h2 className='text-3xl font-semibold'>{ completedTaskCount }</h2>
                <h3 className='text-xl font-medium'>Completed Task</h3>
            </div>
            <div className='w-1/3 px-10 py-5 bg-yellow-400 rounded-xl'>
                <h2 className='text-3xl font-semibold'>{ acceptedTaskCount }</h2>
                <h3 className='text-xl font-medium'>Accepted Task</h3>
            </div>
            <div className='w-1/3 px-10 py-5 bg-red-400 rounded-xl'>
                <h2 className='text-3xl font-semibold'>{ failedTaskCount }</h2>
                <h3 className='text-xl font-medium'>Failed task</h3>
            </div>
        </div>
    )
}

export default TaskListNum
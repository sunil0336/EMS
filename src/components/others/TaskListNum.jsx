import React from 'react'

function TaskListNum() {
    return (
        <div className='flex m-10 justify-between bg-zinc-800 text-white p-5 gap-5'>
            <div className='w-1/3 px-10 py-5 bg-red-400 rounded-xl'>
                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>new task</h3>
            </div>
            <div className='w-1/3 px-10 py-5 bg-yellow-400 rounded-xl'>
                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>new task</h3>
            </div>
            <div className='w-1/3 px-10 py-5 bg-blue-400 rounded-xl'>
                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>new task</h3>
            </div>
            <div className='w-1/3 px-10 py-5 bg-green-400 rounded-xl'>
                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>new task</h3>
            </div>
        </div>
    )
}

export default TaskListNum
import React from 'react'

function NewTask({task}) {
    return (
        <div className='flex-shrink-0 w-1/4 h-full p-5 bg-blue-400 rounded-xl flex flex-col'>
            <div className='flex justify-between items-center'>
                <h2 className='bg-blue-600 text-sm py-1 px-3 rounded'>{task.category}</h2>
                <h3 className='text-sm'>{task.date}ok </h3>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{task.title}</h2>
            <p className='text-sm mt-2 flex-1'>{task.description.length > 100 ? task.description.slice(0, 100) + "..." : task.description}</p>
            <div className='flex items-center justify-between mt-5'>
                <button className='bg-blue-600 text-sm py-1 px-2 rounded'>{task.active ? "accepted": "Accept Task"}</button>
            </div>
        </div>
    )
}

export default NewTask
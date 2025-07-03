import React from 'react'

function NewTask() {
    return (
        <div className='flex-shrink-0 w-1/4 h-full p-5 bg-blue-400 rounded-xl flex flex-col'>
            <div className='flex justify-between items-center'>
                <h2 className='bg-blue-600 text-sm py-1 px-3 rounded'>Low</h2>
                <h3 className='text-sm'>26 june 2025 </h3>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>make better ems</h2>
            <p className='text-sm mt-2 flex-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, unde? Molestias, vel aliquid? A, voluptatibus?</p>
            <div className='flex items-center justify-between mt-5'>
                <button className='bg-blue-600 text-sm py-1 px-2 rounded'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask
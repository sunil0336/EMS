import React from 'react'

function TaskList() {
  return (
    <div id="tasklist" className='h-1/2 overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 px-10'>
        <div className='flex-shrink-0 w-1/4 h-full p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h2 className='bg-red-600 text-sm py-1 px-3 rounded'>High</h2>
                <h3 className='text-sm'>26 june 2025 </h3>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>make better ems</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, unde? Molestias, vel aliquid? A, voluptatibus?</p>
        </div>
        <div className='flex-shrink-0 w-1/4 h-full p-5 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h2 className='bg-yellow-600 text-sm py-1 px-3 rounded'>Medium</h2>
                <h3 className='text-sm'>26 june 2025 </h3>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>make better ems</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, unde? Molestias, vel aliquid? A, voluptatibus?</p>
        </div>
        <div className='flex-shrink-0 w-1/4 h-full p-5 bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h2 className='bg-blue-600 text-sm py-1 px-3 rounded'>Low</h2>
                <h3 className='text-sm'>26 june 2025 </h3>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>make better ems</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, unde? Molestias, vel aliquid? A, voluptatibus?</p>
        </div>
        <div className='flex-shrink-0 w-1/4 h-full p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h2 className='bg-green-600 text-sm py-1 px-3 rounded'>Completed</h2>
                <h3 className='text-sm'>26 june 2025 </h3>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>make better ems</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, unde? Molestias, vel aliquid? A, voluptatibus?</p>
        </div>
        <div className='flex-shrink-0 w-1/4 h-full p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h2 className='bg-red-600 text-sm py-1 px-3 rounded'>High</h2>
                <h3 className='text-sm'>26 june 2025 </h3>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>make better ems</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, unde? Molestias, vel aliquid? A, voluptatibus?</p>    
        </div>
        
    </div>
  )
}

export default TaskList
import React from 'react'

function FailedTask() {
  return (
    <div className='flex-shrink-0 w-1/4 h-full p-5 bg-red-400 rounded-xl flex flex-col'>
            <div className='flex justify-between items-center'>
                <h2 className='bg-red-600 text-sm py-1 px-3 rounded'>High</h2>
                <h3 className='text-sm'>26 june 2025 </h3>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>make better ems</h2>
            <p className='text-sm mt-2 flex-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, unde? Molestias, vel aliquid? A, voluptatibus?</p>
            <div className="mt-2">
              <button className='bg-red-600 text-sm py-1 px-2 rounded'>Failed Task</button>
            </div>
        </div>
  )
}

export default FailedTask
import React from 'react'

function CreateTask() {
    return (
        <div className='p-5  mt-5 rounded bg-zinc-800 '>
            <form className='flex flex-wrap w-full items-start justify-between p-5'>
                <div className='w-1/2 '>
                    <div className='mb-2'>
                        <h3 className='text-m text-gray-300 mb-1'>Task Title</h3>
                        <input type="text" placeholder='make UI Design' className='text-sm py-2 px-4 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' />
                    </div>
                    <div className='mb-2'>
                        <h3 className='text-m text-gray-300 mb-1'>Date</h3>
                        <input type="date" className='text-sm py-2 px-4 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' />
                    </div>
                    <div className='mb-2'>
                        <h3 className='text-m text-gray-300 mb-1'>Assign To</h3>
                        <input type="text" className='text-sm py-2 px-4 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' />
                    </div>
                    <div>
                        <h3 className='text-m text-gray-300 mb-1'>Catoagory</h3>
                        <input type="text" placeholder='Design, Devolopment, etc..' className='text-sm py-2 px-4 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' />
                    </div>
                </div>
                
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-m text-gray-300 mb-1'>Description</h3>
                    <textarea name="" id="" rows="3" placeholder='detaild description of task (MAX 500 Words)' className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'></textarea>

                    <button className='bg-emerald-500 hover:bg-emerald-600 py-3 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask
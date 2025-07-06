import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';

function AllTasks() {
    const authData = useContext(AuthContext);

    return (
        <div id='tasklist' className='py-2 px-10 mt-5 rounded bg-zinc-800 h-64 overflow-auto'>
            <div className='bg-zinc-900 mb-2 py-3 px-5 flex justify-between rounded sticky top-0 z-10'>
                <h2 className='w-1/5 text-lg font-medium text-center'>Employee Name</h2>
                <h5 className='w-1/5 text-lg font-medium text-center'>New Task</h5>
                <h5 className='w-1/5 text-lg font-medium text-center'>Active Task</h5>
                <h5 className='w-1/5 text-lg font-medium text-center'>Completed Task</h5>
                <h5 className='w-1/5 text-lg font-medium text-center'>Failed Task</h5>
            </div>
            {authData.employees.map((employee, idx) => {
                const newTaskCount = employee.tasks.filter(task => task.newTask).length;
                const activeTaskCount = employee.tasks.filter(task => task.active && !task.newTask && !task.completed).length;
                const completedTaskCount = employee.tasks.filter(task => task.completed).length;
                const failedTaskCount = employee.tasks.filter(task => task.failed).length;
                return (
                    <div key={idx} className='bg-zinc-700 border-2 border-emerald-500 mb-2 py-3 px-5 flex justify-between rounded items-center'>
                        <h2 className='w-1/5 text-lg font-medium text-center'>{employee.name}</h2>
                        <h5 className='w-1/5 text-lg font-medium text-blue-300 text-center'>{newTaskCount}</h5>
                        <h5 className='w-1/5 text-lg font-medium text-yellow-400 text-center'>{activeTaskCount}</h5>
                        <h5 className='w-1/5 text-lg font-medium text-emerald-500 text-center'>{completedTaskCount}</h5>
                        <h5 className='w-1/5 text-lg font-medium text-red-500 text-center'>{failedTaskCount}</h5>
                    </div>
                )
            })}
        </div>
    )
}

export default AllTasks

{/* <div className='bg-red-400 mb-2 py-3 px-5 flex justify-between rounded'>
            <h2>Sunil</h2>
            <h3 >Task Title</h3>
            <h5>Status</h5>
        </div> */}
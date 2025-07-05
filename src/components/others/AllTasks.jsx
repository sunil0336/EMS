import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';

function AllTasks() {
    const authData = useContext(AuthContext);
    return (
        <div id='tasklist' className='py-5 px-10 mt-5 rounded bg-zinc-800 h-64 overflow-auto'>
            {authData.employees.map((employee) => (
                    employee.tasks.map((task, index) => (
                        <div key={index} className='bg-zinc-700 border-2 border-emerald-500 mb-2 py-3 px-5 flex justify-between rounded'>
                            <h2>{employee.name}</h2>
                            <h3>{task.title}</h3>
                            <h5>
                              {task.newTask
                                ? 'New Task'
                                : task.active
                                ? 'Accepted'
                                : task.completed
                                ? 'Completed'
                                : 'Failed'}
                            </h5>
                        </div>
                    ))
                ))}
        </div>
    )
}

export default AllTasks

{/* <div className='bg-red-400 mb-2 py-3 px-5 flex justify-between rounded'>
            <h2>Sunil</h2>
            <h3 >Task Title</h3>
            <h5>Status</h5>
        </div> */}
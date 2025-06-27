import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTasks from '../others/AllTasks'

function AdminDashboard() {
    return (
        <div className='h-screen w-full p-7 '>
            <Header />
            <CreateTask />
            <AllTasks />
        </div>
    )
}

export default AdminDashboard
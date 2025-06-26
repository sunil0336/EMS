import React from 'react'
import Header from '../others/Header'
import TaskListNum from '../others/TaskListNum'
import TaskList from '../others/TaskList'

function EmpDashboard() {
  return (
    <div className='p-10 bg-zinc-800 h-screen'>
        <Header />
        <TaskListNum />
        <TaskList />
    </div>
  )
}

export default EmpDashboard
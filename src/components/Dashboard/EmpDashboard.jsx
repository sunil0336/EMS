import React from 'react'
import Header from '../others/Header'
import TaskListNum from '../others/TaskListNum'
import TaskList from '../TaskList/TaskList'

function EmpDashboard({ user }) {
  const { password, ...data } = user;
  // console.log("User in EmpDashboard:", emp);
  return (
    <div className='p-10  h-screen'>
        <Header username={data.name}/>
        <TaskListNum tasks={data.tasks}/>
        <TaskList />
    </div>
  )
}

export default EmpDashboard
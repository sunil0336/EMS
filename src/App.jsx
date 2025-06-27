import React from 'react'
import Login from './components/Auth/Login'
import EmpDashboard from './components/Dashboard/EmpDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'

function App() {
  return (
    <div>
      {/* <Login /> */}
      {/* <EmpDashboard /> */}
      <AdminDashboard />
    </div>
  )
}

export default App
import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmpDashboard from './components/Dashboard/EmpDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthContext'
import { setLocalStorage } from './utils/localStorage'

function App() {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  
  useEffect(() => {
    // localStorage.clear(); // clear localStorage
    setLocalStorage(); // to add data in localStorage 
    if (authData) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        setUser(JSON.parse(loggedInUser));
      }
    }
  }, [authData]);
  // console.log("Auth Data:", user);
  
  const handleLogin = (email, password) => {
    if (
      authData &&
      authData.admin.find((e) => e.email === email && e.password === password)
    ) {
      const admin = authData.admin.find((e) => e.email === email && e.password === password);
      setUser({ ...admin, role: "admin" });
      localStorage.setItem("loggedInUser", JSON.stringify({ ...admin, role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser({ ...employee, role: "user" });
        localStorage.setItem("loggedInUser", JSON.stringify({ ...employee, role: "user" }));
        return;
      }
      alert("Invalid credentials");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      {!user && <Login handleLogin={handleLogin} />}
      {user && user.role === "admin" && <AdminDashboard />}
      {user && user.role === "user" && <EmpDashboard user={user} />}
    </div>
  );
}

export default App
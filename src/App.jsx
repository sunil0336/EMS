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
    if (authData) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        // Parse and set only the role string
        setUser(JSON.parse(loggedInUser).role);
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (
      authData &&
      authData.admin.find((e) => e.email === email && e.password === password)
    ) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser("user");
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "user" }));
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
      {user === "admin" && <AdminDashboard />}
      {user === "user" && <EmpDashboard />}
    </div>
  );
}

export default App
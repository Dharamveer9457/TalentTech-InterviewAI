import React, { useState } from 'react'
import '../styles/login.css'
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  
    const handleLogin = (e) => {
      e.preventDefault();
      const userData = { email, password }
    //   dispatch(login(userData))
    }
  


  return (
    <div>
      <h1>TalentTech Interview</h1>
         <div className="login-container">
         
         <div className="form-container">
          <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
     </div>
    </div>
  )
}

export default LoginPage
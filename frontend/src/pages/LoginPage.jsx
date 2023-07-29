import React, { useEffect, useState } from 'react'
import '../styles/login.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { login } from '../redux/authReducer/action';

const LoginPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { isAuth, errorMsg, token, loggedInUser } = useSelector(store => store.authReducer)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  
    const handleLogin = (e) => {
      e.preventDefault();
      const userData = { email, password }
      dispatch(login(userData))
    }
  
    useEffect(() => {
      localStorage.setItem('ch-token', JSON.stringify({loggedInUser, token}));
      if (token) {
        
        alert("User Logged In successfully")

        setTimeout(() => {
          navigate('/interview');
          window.location.reload();
        }, 1000)
      } else{
        alert("Please Login first")
      }
    }, [isAuth, errorMsg, token])
  


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
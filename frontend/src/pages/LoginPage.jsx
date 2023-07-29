import React, { useEffect, useState } from 'react'
import '../styles/login.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { login } from '../redux/authreducer/action';

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
        // toast({
        //   description: "User is Login successfull",
        //   status: 'success',
        //   isClosable: true,
        //   duration: 4000,
        //   position: 'top'
        // })
        alert("User Logged In successfully")
  
        setTimeout(() => {
          navigate('/interview');
          window.location.reload();
        }, 1000)
      } else {
        alert("Wrong credential")
        // toast({
        //   description: errorMsg,
        //   status: 'error',
        //   isClosable: true,
        //   duration: 4000,
        //   position: 'top'
        // })
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
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link, redirect } from 'react-router-dom';
import { signup } from '../redux/authReducer/action';


const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name ,setName] = useState("");
  const dispatch = useDispatch();
  const {isRegistered,errorMsg ,regError } = useSelector(store => store.authReducer)
  // const { isRegistered, errorMsg } = useSelector(store => store.authReducer);
  const navigate = useNavigate()
  // const toast = useToast();

  const handleSignup = (e) => {
    e.preventDefault();
    const details = { email, password ,name}
    dispatch(signup(details))
  }

  useEffect(() => {
    console.log(regError );
    if (isRegistered) {
      alert(isRegistered)
      setTimeout(() => {
        navigate('/login');
        window.location.reload();
      }, 1000)
    }else if (regError ){
      alert(regError )
    }
  }, [isRegistered ,regError  ])



  return (
    <div>
      <h1>TalentTech Interview</h1>
         <div className="login-container">
         
         <div className="form-container">
         <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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
        <button onClick={handleSignup}>Signup</button>
      </div>
     </div>
    </div>
  )
}

export default Register
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { signup } from '../redux/authreducer/action';


const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name ,setName] = useState("");
  const dispatch = useDispatch();
  const {isRegistered} = useSelector(store => store.authReducer)
  // const { isRegistered, errorMsg } = useSelector(store => store.authReducer);
  // const navigate = useNavigate()
  // const toast = useToast();

  const handleSignup = (e) => {
    e.preventDefault();
    const details = { email, password ,name}
    dispatch(signup(details))
  }

  // useEffect(() => {
  //   if (isRegistered) {
  //     alert(isRegistered)
  //     // toast({
  //     //   description: isRegistered,
  //     //   status: 'success',
  //     //   isClosable: true,
  //     //   duration: 4000,
  //     //   position: 'top'
  //     // })
  //   } else if (errorMsg) {
  //     alert(errorMsg)
  //     // toast({
  //     //   description: errorMsg,
  //     //   status: 'error',
  //     //   isClosable: true,
  //     //   duration: 4000,
  //     //   position: 'top'
  //     // })
  //   }
  // }, [isRegistered, errorMsg])



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
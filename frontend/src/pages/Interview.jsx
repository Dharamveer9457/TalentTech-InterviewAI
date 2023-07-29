import React, { useState } from 'react'
import "../styles/interview.css"
import Chat from '../components/Chat'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/authreducer/action'
import axios from 'axios'
import { baseUrl } from '../url'


const Interview = () => {
	const user = JSON.parse(localStorage.getItem("ch-token"))
  const token = localStorage.getItem('ch-token') || '';
  const dispatch = useDispatch()
  // const [userPromt,setPrompt] = useState("");
  const [level,setLevel] = useState("");
  const [category,setcategory] = useState("");
  // const [track ,setTrack] = useState("node");
  const [prompt ,setPrompt] =useState(`You are an interviewer. Ask me 3 technical questions related to ${category} of ${level} level , one after the other. You should go to the next question only after I give an answer to the already asked question.Give me feedback at the end and give me rating out of 10. Feedback will gonna be calculate on three parameters that is communication skills, technical knowledge and problem solving.`)
  // 
  const startInterview = () => {
    const data = {
     track:category,
     prompt
    }
    console.log(data);
    axios.post(`${baseUrl}/chatPrompt`,data)
    .then(res=>console.log(res.data.res))
    .catch(err=>console.log(err))
    console.log(level,category)
  }
  
  const finishInterview = () => {
    const finishPrompt = {
      track:category,
      prompt:"Finish The interview and give the Feedback on the basis of communication skill , technical skill ,problem solving , and critical thinking "
     }
    axios.post(`${baseUrl}/chatPrompt`,finishPrompt)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    console.log(level,category)
  }

  const handleLogout = ()=> {
			localStorage.removeItem("ch-token")
			dispatch(logout(token))
			window.location.reload(true);
  }

  return (
    <div>
       {/* <h2>TalentTech Interview</h2> */}
      <div className='top'>
        <div>
         <select onChange={(e)=>setcategory(e.target.value)}>
          <option value="">Selet Category</option>
          <option value="mern">MERN</option>
          <option value="node">Node</option>
          <option value="java">Java</option>
         </select>
         <select onChange={(e)=>setLevel(e.target.value)}>
          <option value="">Selet Level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advance">Advance</option>
         </select>
         </div>
         <div>
         <button onClick={startInterview} >Start Interview</button>
         <button  onClick={finishInterview}>Finish Interview</button>
         <button onClick={handleLogout}>Logout</button>
         </div>
      </div>
      <hr />
      <Chat track={category}/>
    </div>
  )
}

export default Interview
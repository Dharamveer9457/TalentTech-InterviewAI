import React, { useEffect, useState } from 'react'
import "../styles/interview.css"
import Chat from '../components/Chat'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/authReducer/action'
import axios from 'axios'
import { baseUrl } from '../url'


const Interview = () => {
	const user = JSON.parse(localStorage.getItem("ch-token"))
  const token = localStorage.getItem('ch-token') || '';
  const dispatch = useDispatch()
  // const [userPromt,setPrompt] = useState("");
  const [level,setLevel] = useState("basic");
  const [category,setcategory] = useState("");
  const [track ,setTrack] = useState( "node");
  const [prompt ,setPrompt] =useState("")
  // 

 useEffect(()=>{
  setPrompt(`You are an interviewer. Ask me 3 technical questions of  ${level} level related to ${track} track, one by one only after getting response for previous question. You should go to the next question only after I give an answer to the already asked question.Give me feedback at the end and give me rating out of 10. Feedback will gonna be calculate on three parameters that is communication skills, technical knowledge and problem solving.`)
 },[level ,track])


  const startInterview = () => {
    const data = {
     track,
     prompt
    }
    console.log(data.prompt);
    axios.post(`${baseUrl}/chatPrompt`,data)
    .then(res=>
    alert(`Type ${'lets start interview'} in  the chat to start your interview`))
    .catch(err=>console.log(err))
    console.log(level,category)
  }
  
  const finishInterview = () => {
    const finishPrompt = {
      track,
      prompt:"Finish The interview and give the Feedback on the basis of communication skill , technical skill ,problem solving , and critical thinking "
     }
    axios.post(`${baseUrl}/chatPrompt`,finishPrompt)
    .then(res=> alert(res.data.res))
    .catch(err=>console.log(err))
    console.log(level,track)
  }

  const handleLogout = ()=> {
			localStorage.removeItem("ch-token")
			dispatch(logout(token))
      alert("Logged out successfull")
			window.location.reload(true);
  }

  return (
    <div>
       {/* <h2>TalentTech Interview</h2> */}
      <div className='top'>
        <div>
         <select value={track} onChange={(e)=>setTrack(e.target.value)}>
          <option value="">Selet Category</option>
          <option value="MERN">MERN</option>
          <option value="node">Node</option>
          <option value="java">Java</option>
         </select>
         <select value={level} onChange={(e)=>setLevel(e.target.value)}>
          <option value="">Selet Level</option>
          <option value="basic">Beginner</option>
          <option value="medium">Intermediate</option>
          <option value="hard">Advance</option>
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
import React from 'react'
import "../styles/interview.css"
import Chat from '../components/Chat'

const Interview = () => {
  return (
    <div>
       {/* <h2>TalentTech Interview</h2> */}
      <div className='top'>
        <div>
         <select>
          <option value="">Selet Category</option>
          <option value="mern">MERN</option>
          <option value="node">Node</option>
          <option value="java">Java</option>
         </select>
         <select>
          <option value="">Selet Level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advance">Advance</option>
         </select>
         </div>
         <div>
         <button>Start Interview</button>
         <button>Finish Interview</button>
         </div>
      </div>
      <hr />
      <Chat/>
    </div>
  )
}

export default Interview
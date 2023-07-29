import React from 'react'
import "../styles/homepage.css"

const Homepage = () => {
  return (
    <div>
        <h1>Welcome to TalentTech</h1>
        <div className='headertop'>
            <h2>About TalentTech</h2>
            <p>The AI-Integrated Interview Platform is an innovative and cutting-edge solution that is transforming the traditional recruitment and hiring process. Leveraging the power of artificial intelligence, this platform is designed to streamline and enhance every stage of the interview process, from candidate screening to final selection, providing a seamless and efficient experience for both employers and job seekers.</p>
        </div>
        <div className='mid'>
            <div>
                <h3>Accessible Anywhere</h3>
                <p>Our application is accessible across various devices, including desktops, laptops, tablets, and smartphones.
                    Users can practice interviews on the go, ensuring maximux flexibility.
                </p>
            </div>
            <div>
            <h3>Instant Feedback</h3>
                <p>Unlike traditional interview practice, our application offers instant feedback to users after each question. 
                    Users recive constructive feedback on their responses , helping them understad their strengths and areas for improvement.</p>
            </div>
            <div>
            <h3>Privacy and Confidentiality</h3>
                <p>We prioritize user privacy and ensure that all interview sessions are confidential. 
                    Users can practice with confidence, knowing that their data and interview responses are secure
                </p>
            </div>
        </div>
    </div>
  )
}

export default Homepage
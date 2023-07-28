import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import Register from '../pages/Register'
import Interview from '../pages/Interview'
import Dashboard from '../pages/Dashboard'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<Register/>} />
            <Route path='/interview' element={<Interview/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes
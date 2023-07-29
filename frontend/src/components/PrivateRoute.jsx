import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
//   const isLogged = localStorage.getItem("ch-token") || '';
   const auth = JSON.parse(localStorage.getItem("ch-token")) || "";
   let isLogged
   if(auth) {
    isLogged = auth.loggedInUser
   }else{
    isLogged = false 
   }

//   console.log(auth.loggedInUser);

  return isLogged ? children : <Navigate to="/login" />; // If user is logged in, render the protected route (children), else navigate to the login page.
}

export default PrivateRoutes;

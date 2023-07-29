import axios from "axios"
import { AUTH_FAILURE, AUTH_REQUEST, LOGIN_SUCCESS, REGISTER_SUCCESS } from "./actionTypes"


export const signup = (details) => (dispatch) => {
    dispatch({type : AUTH_REQUEST})
   axios.post('https://odd-lion-life-jacket.cyclic.app/users/register', details)
   .then(res => {
      dispatch({type : REGISTER_SUCCESS, payload : res.data.msg})
   })
   .catch(error => {
     dispatch({type : AUTH_FAILURE, payload : error.response.data.msg})
    console.log(error.response.data.msg)
   })
}

export const login = (userData) => (dispatch) => {
    dispatch({type : AUTH_REQUEST})
   axios.post('https://odd-lion-life-jacket.cyclic.app/users/login', userData)
   .then(res => {
   //  localStorage.setItem("ch-token", res.data?.token)
   //  console.log(res.data.token);
   //  console.log(res);
      dispatch({type : LOGIN_SUCCESS, payload : res.data})
   })
   .catch(error => {
     dispatch({type : AUTH_FAILURE, payload : error.response.data.msg})
   })
}

export const logout = (token) => (dispatch) => {
   dispatch({type : AUTH_REQUEST})
  axios.post('https://odd-lion-life-jacket.cyclic.app/users/logout', token)
  .then(res => {
   // localStorage.setItem("ch-token", res.data?.token)
   // console.log(res.data.token);
   console.log(res);
   //   dispatch({type : LOGIN_SUCCESS, payload : res.data.token})
  })
  .catch(error => {
   //  dispatch({type : AUTH_FAILURE, payload : error.response.data.msg})
   console.log(error)
  })
}


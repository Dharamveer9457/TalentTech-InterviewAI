import axios from "axios"
import { AUTH_FAILURE, AUTH_REQUEST, LOGIN_SUCCESS, REGISTER_SUCCESS } from "./actionTypes"
import { baseUrl } from "../../url"


export const signup = (details) => (dispatch) => {
    dispatch({type : AUTH_REQUEST})
   axios.post(`${baseUrl}/signup`, details)
   .then(res => {
      dispatch({type : REGISTER_SUCCESS, payload : res.data.message})
   })
   .catch(error => {
     dispatch({type : AUTH_FAILURE, payload : error.response.data.message})
    //  console.log(error)
    console.log(error.response.data.message)
   })
}

export const login = (userData) => (dispatch) => {
    dispatch({type : AUTH_REQUEST})
   axios.post(`${baseUrl}/login`, userData)
   .then(res => {
   //  localStorage.setItem("ch-token", res.data?.token)
    console.log(res.data.token);
    console.log(res);
      dispatch({type : LOGIN_SUCCESS, payload : res.data})
   })
   .catch(error => {
     dispatch({type : AUTH_FAILURE, payload : error.response.data.msg})
   })
}

export const logout = (token) => (dispatch) => {
   dispatch({type : AUTH_REQUEST})
  axios.post(`${baseUrl}/logout`, token)
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


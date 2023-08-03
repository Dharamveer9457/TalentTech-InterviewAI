import {
    AUTH_FAILURE,
    AUTH_REQUEST,
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
    REG_FAILURE,
  } from './actionTypes';
  
  const initialState = {
    isLoading: false,
    isError: false,
    isRegistered: '',
    auth: false,
    regError : "" ,
    errorMsg : '',
    token: '',
    loggedInUser : false
  };
  
  export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case REG_FAILURE:
        return { ...state, isloading: false, isError: false, regError : payload };
      case AUTH_FAILURE:
        return { ...state, isloading: false, isError: false, errorMsg : payload };
      case LOGIN_SUCCESS:
        return { ...state, isloading: false, isError : false, auth: true, token: payload.token, loggedInUser : true};
      case AUTH_REQUEST:
        return { ...state, isloading: true, isError: false };
      case REGISTER_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isError: false,
          isRegistered: payload,
        };
      default:
        return state;
    }
  };
  
import {
    AUTH_FAILURE,
    AUTH_REQUEST,
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
  } from './actionTypes';
  
  const initialState = {
    isLoading: false,
    isError: false,
    isRegistered: '',
    auth: false,
    errorMsg : '',
    token: '',
    loggedInUser : ''
  };
  
  export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case AUTH_FAILURE:
        return { ...state, isloading: false, isError: true, errorMsg : payload };
      case LOGIN_SUCCESS:
        return { ...state, isloading: false, isError : false, auth: true, token: payload.token, loggedInUser : payload.name};
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
  
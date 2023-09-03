// authActions.js
import { LOGIN, LOGOUT, LOAD_USER_FROM_STORAGE } from './actionTypes';

export const login = (user) => {
    localStorage.setItem('authToken', user.authToken);
    localStorage.setItem('userData', JSON.stringify(user));
    // localStorage.setItem('userData', user);

    return {
      type: LOGIN,
      payload: user,
    };
  };
  
  export const logout = () => {
    return {
      type: LOGOUT,
    };
  };

export const loadUserFromStorage = () => {
    const authToken = localStorage.getItem('authToken');
    const userData = localStorage.getItem('userData');
    console.log(localStorage);
  
    if (authToken && userData) {
    //   const userData = JSON.parse(userDataJSON);
      return {
        type: LOAD_USER_FROM_STORAGE,
        payload: { authToken, userData },
      };
    } else {
      // Handle the case where either authToken or userDataJSON is not defined
      // You can return an empty object or any other suitable value here
      return {
        type: LOAD_USER_FROM_STORAGE,
        payload: null,
      };
    }
  };
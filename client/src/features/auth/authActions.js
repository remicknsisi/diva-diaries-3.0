// authActions.js
import { LOGIN, LOGOUT, LOAD_USER_FROM_STORAGE } from './actionTypes';

export const login = (user) => {
    localStorage.setItem('authToken', user.authToken);
    localStorage.setItem('userData', JSON.stringify(user));

    return {
      type: LOGIN,
      payload: { authToken: user.authToken, 
        user: JSON.stringify(user) }
    };
  };
  
  export const logout = (user) => {
    localStorage.setItem('authToken', null);
    localStorage.setItem('userData', null);

    return {
      type: LOGOUT,
      payload: user
    };
  };

export const loadUserFromStorage = () => {
    const authToken = localStorage.getItem('authToken');
    const userData = localStorage.getItem('userData');
  
    if (authToken && userData) {
      return {
        type: LOAD_USER_FROM_STORAGE,
        payload: { authToken: authToken, 
          userData: userData }
      };
    } else {

      return {
        type: LOAD_USER_FROM_STORAGE,
        payload: null,
      };
    }
  };
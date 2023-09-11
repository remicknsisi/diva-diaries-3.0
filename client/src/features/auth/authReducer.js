// authReducer.js
import { LOGIN, LOGOUT, LOAD_USER_FROM_STORAGE } from './actionTypes';

const initialState = {
  currentUser: null,
  authToken: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        currentUser: action.payload.user,
        authToken: action.payload.authToken,
      };
    case LOGOUT:
      return {
        ...state,
        currentUser: null,
        authToken: null,
      };
    case LOAD_USER_FROM_STORAGE:
      if (action.payload === null) {
        return {
          ...state,
          currentUser: null,
          authToken: null,
        };
      }
      return {
        ...state,
        // currentUser: action.payload.userData,
        currentUser: JSON.parse(action.payload.userData),
        authToken: action.payload.authToken,
      };
    default:
      return state;
  }
};

export default authReducer;

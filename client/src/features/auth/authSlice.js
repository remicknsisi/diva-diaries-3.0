// Action Creators
export const login = (user) => {
    return {
      type: 'LOGIN',
      payload: user,
    };
  };
  
  export const logout = () => {
    return {
      type: 'LOGOUT',
    };
  };

// Reducers
const initialState = {
    currentUser: null,
  };

  console.log(initialState)
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          currentUser: action.payload,
        };
      case 'LOGOUT':
        return {
          ...state,
          currentUser: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
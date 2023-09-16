// Action Creators
export const addFollowing = (following) => {
    return {
      type: "following/add",
      payload: following,
    };
  };
  
  export const removeFollowing = (id) => {
    return {
      type: "following/remove",
      payload: id,
    };
  };
  
  
  // Reducers
  const initialState = {
    entities: [],
    status: "idle"
  };
  
  export default function followingsReducer(state = initialState, action) {
    switch (action.type) {
      case "followings/add":
        return {
          ...state, 
          entities: [action.payload]};
  
      case "followings/remove":
        return {
          ...state, 
          entities: state.entities.filter((following) => following.id !== action.payload)};
  
      case "followings/followingsLoading":
        return {
          ...state,
          status: "loading",
        };
      
      case "followings/followingsLoaded":
        return {
          ...state,
          status: "idle",
          entities: action.payload,
        };
  
      default:
        return state;
    }
  }
  
  export function fetchFollowings() {
    return function (dispatch) {
      dispatch({ type: "followings/followingsLoading" });
      fetch("/followings")
        .then((response) => response.json())
        .then((followings) =>
          dispatch({
            type: "followings/followingsLoaded",
            payload: followings,
          })
        );
    };
  }
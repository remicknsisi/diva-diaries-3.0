// Action Creators
export const addComment = (comment) => {
    return {
      type: "comments/add",
      payload: comment,
    };
  };
  
  export const removeComment = (id) => {
    return {
      type: "comments/remove",
      payload: id,
    };
  };
  
//   Reducers
  const initialState = {
    entities: [],
    status: "idle"
  };
  
  export default function commentsReducer(state = initialState, action) {
    switch (action.type) {
      case "comments/add":
        return {
            ...state, 
            entities: [action.payload]};
  
      case "comments/remove":
        return {
            ...state,
            entities: state.entities.filter((c) => c.id !== action.payload)
        };
  
      case "comments/commentsLoading":
        return {
          ...state,
          status: "loading",
        };
      
      case "comments/commentsLoaded":
        return {
          ...state,
          status: "idle",
          entities: action.payload,
        };
  
      default:
        return state;
    }
  }
  
  export function fetchComments() {
    return function (dispatch) {
      dispatch({ type: "comments/commentsLoading" });
      fetch("/comments")
        .then((response) => response.json())
        .then((comments) =>
          dispatch({
            type: "comments/commentsLoaded",
            payload: comments,
          })
        );
    };
  }
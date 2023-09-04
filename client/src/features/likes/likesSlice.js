// Action Creators
export const addLike = (like) => {
    return {
      type: "like/add",
      payload: like,
    };
  };
  
  export const removeLike = (id) => {
    return {
      type: "like/remove",
      payload: id,
    };
  };
  
// Reducers
const initialState = {
    entities: [],
    status: "idle"
  };

export default function likesReducer(state = initialState, action) {
    switch (action.type) {
      case "likes/add":
        return {
            ...state, 
            entities: [action.payload.length + 1]};
  
      case "likes/remove":
        return {
            ...state, 
            entities: [action.payload.length - 1]};

        case "likes/likesLoading":
            return {
              ...state,
              status: "loading",
            };
          
          case "likes/likesLoaded":
            return {
              ...state,
              status: "idle",
              entities: action.payload,
            };
  
      default:
        return state;
    }
  }

  export function fetchLikes() {
    return function (dispatch) {
      dispatch({ type: "likes/likesLoading" });
      fetch("/likes")
        .then((response) => response.json())
        .then((likes) =>
          dispatch({
            type: "likes/likesLoaded",
            payload: likes,
          })
        );
    };
  }
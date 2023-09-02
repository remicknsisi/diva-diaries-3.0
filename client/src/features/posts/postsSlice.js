// Action Creators
export const addPost = (post) => {
    return {
      type: "posts/add",
      payload: post,
    };
  };
  
  export const removePost = (id) => {
    return {
      type: "posts/remove",
      payload: id,
    };
  };
  
//   Reducers
  const initialState = {
    entities: [],
    status: "idle"
  };
  
  export default function postsReducer(state = initialState, action) {
    switch (action.type) {
      case "posts/add":
        return [...state, action.payload];
  
      case "posts/remove":
        return state.filter((post) => post.id !== post.payload);
  
      case "posts/postsLoading":
        return {
          ...state,
          status: "loading",
        };
      
      case "posts/postsLoaded":
        return {
          ...state,
          status: "idle",
          entities: action.payload,
        };
  
      default:
        return state;
    }
  }
  
  export function fetchPosts() {
    return function (dispatch) {
      // dispatch an initial action to set up a "loading" state
      dispatch({ type: "posts/postsLoading" });
      // initiate a network request with fetch
      fetch("/posts")
        .then((response) => response.json())
        .then((posts) =>
          // when we have data from the response, dispatch another action to add the data to our Redux store
          dispatch({
            type: "posts/postsLoaded",
            payload: posts,
          })
        );
    };
  }
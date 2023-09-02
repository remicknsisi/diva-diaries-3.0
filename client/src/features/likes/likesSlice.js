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
const initialState = [];

export default function likesReducer(state = initialState, action) {
    switch (action.type) {
      case "likes/add":
        return [...state, action.payload];
  
      case "likes/remove":
        return state.filter((like) => like.id !== action.payload);
  
      default:
        return state;
    }
  }
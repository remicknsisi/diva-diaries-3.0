// Action Creators
export const addMessage = (message) => {
    return {
      type: "messages/add",
      payload: message,
    };
  };
  
//   Reducers
  const initialState = {
    entities: [],
    status: "idle"
  };
  
  export default function messagesReducer(state = initialState, action) {
    switch (action.type) {
      case "messages/add":
        return {
            ...state, 
            entities: [action.payload]};
  
      case "messages/messagesLoading":
        return {
          ...state,
          status: "loading",
        };
      
      case "messages/messagesLoaded":
        return {
          ...state,
          status: "idle",
          entities: action.payload,
        };
  
      default:
        return state;
    }
  }
  
  export function fetchMessages() {
    return function (dispatch) {
      dispatch({ type: "messages/messagesLoading" });
      fetch("/direct_messages")
        .then((response) => response.json())
        .then((messages) =>
          dispatch({
            type: "messages/messagesLoaded",
            payload: messages,
          })
        );
    };
  }
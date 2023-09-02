// Action Creators
export const addUser = (user) => {
  return {
    type: "users/add",
    payload: user,
  };
};

export const removeUser = (id) => {
  return {
    type: "users/remove",
    payload: id,
  };
};

// Reducers
const initialState = {
  entities: [],
  status: "idle"
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "users/add":
      return [...state, action.payload];

    case "users/remove":
      return state.filter((user) => user.id !== user.payload);

    case "users/usersLoading":
      return {
        ...state,
        status: "loading",
      };
    
    case "users/usersLoaded":
      return {
        ...state,
        status: "idle",
        entities: action.payload,
      };

    default:
      return state;
  }
}

export function fetchUsers() {
  return function (dispatch) {
    // dispatch an initial action to set up a "loading" state
    dispatch({ type: "users/usersLoading" });
    // initiate a network request with fetch
    fetch("/users")
      .then((response) => response.json())
      .then((users) =>
        // when we have data from the response, dispatch another action to add the data to our Redux store
        dispatch({
          type: "users/usersLoaded",
          payload: users,
        })
      );
  };
}
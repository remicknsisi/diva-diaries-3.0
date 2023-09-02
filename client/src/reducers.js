import { combineReducers } from "redux";
import usersReducer from "./features/users/usersSlice";
import likesReducer from "./features/likes/likesSlice";

const rootReducer = combineReducers({
  users: usersReducer
//   likes: likesReducer,
});

export default rootReducer;
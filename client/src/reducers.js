import { combineReducers } from "redux";
import usersReducer from "./features/users/usersSlice";
import likesReducer from "./features/likes/likesSlice";
import postsReducer from "./features/posts/postsSlice";

const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer
//   likes: likesReducer,
});

export default rootReducer;
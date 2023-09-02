import { combineReducers } from "redux";
import usersReducer from "./features/users/usersSlice";
import likesReducer from "./features/likes/likesSlice";
import postsReducer from "./features/posts/postsSlice";
import commentsReducer from "./features/comments/commentsSlice";

const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer
//   likes: likesReducer,
});

export default rootReducer;
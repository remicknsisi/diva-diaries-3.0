import { combineReducers } from "redux";
import usersReducer from "./features/users/usersSlice";
import likesReducer from "./features/likes/likesSlice";
import postsReducer from "./features/posts/postsSlice";
import commentsReducer from "./features/comments/commentsSlice";
import authReducer from "./features/auth/authReducer";
import messagesReducer from "./features/direct_messages/dmsSlice";
import followingsReducer from "./features/followings/followingsSlice";

const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
  auth: authReducer,
  likes: likesReducer,
  messages: messagesReducer,
  followings: followingsReducer
});

export default rootReducer;
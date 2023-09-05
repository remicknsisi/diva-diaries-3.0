import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers.js";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = configureStore({
  reducer: rootReducer
}, composedEnhancer);

export default store
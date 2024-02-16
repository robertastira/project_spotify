import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";

configureStore({
  reducer: mainReducer(),
});
export default configureStore;
import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";

const store = configureStore({
  reducer: mainReducer(),
});
export default store
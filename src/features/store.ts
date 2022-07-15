import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./userData/userDataSlice";
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";

export const store = configureStore({
  reducer: {
    userData: userDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(createStateSyncMiddleware()),
});
initMessageListener(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

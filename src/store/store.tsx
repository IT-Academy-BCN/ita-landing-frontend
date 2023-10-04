import { configureStore } from "@reduxjs/toolkit";
// ...
import apiPostRegister from "./reducers/apiCall/apiPostRegisterLogin";
import faqsReducer from "./reducers/faqsCall/faqsReducer";
import appsCallApiFunctionality from "./reducers/appsCall/appsCallApiFunctionality";

export const store = configureStore({
  reducer: {
    apiPostRegister: apiPostRegister,
    faqsReducer: faqsReducer,
    appsCallApiFunctionality: appsCallApiFunctionality,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

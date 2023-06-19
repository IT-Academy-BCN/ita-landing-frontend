import { configureStore } from '@reduxjs/toolkit'
// ...
 import apiPostRegister from './reducers/apiCall/apiPostRegisterLogin'

export const store = configureStore({
  reducer: {
    apiPostRegister: apiPostRegister
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
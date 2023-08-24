import { configureStore } from '@reduxjs/toolkit';

import languageReducer from './feature/language';
import loginReducer from './feature/login';
// ...

const store = configureStore({
  reducer: {
    language: languageReducer,
    loginState: loginReducer,
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

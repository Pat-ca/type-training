import { configureStore } from '@reduxjs/toolkit';
import typingReducer from './typing-slice';

//const store = createStore(rootReducer, composeEnhancers());
const store = configureStore({
  reducer: {
    typings: typingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;

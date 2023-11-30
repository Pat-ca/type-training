import { configureStore } from '@reduxjs/toolkit';
import { compose } from 'redux';
import typingReducer from './typing-slice';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const store = createStore(rootReducer, composeEnhancers());
const store = configureStore({
  reducer: {
    typings: typingReducer,
  },
  enhancers: [composeEnhancers],
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;

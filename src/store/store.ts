import { compose, createStore } from 'redux';
import rootReducer from './reducers'; // Import your root reducer

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());
export default store;

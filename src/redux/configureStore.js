import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer, { fetchRocketsAPI } from './rockets/rockets';

const reducer = combineReducers({
  rocketsReducer,
});

const elementStore = createStore(reducer, applyMiddleware(thunk, logger));
elementStore.dispatch(fetchRocketsAPI());
elementStore.subscribe((state) => {
  console.log(state);
});
export default elementStore;
/* eslint-disable */ 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer, { fetchRocketsAPI } from './rockets/rockets';
import missionsReducer, {fetchMissionsFromApi} from './missions/missions'

const reducer = combineReducers({
  rocketsReducer,
  missions: missionsReducer
});

const elementStore = createStore(reducer, applyMiddleware(thunk, logger));
elementStore.dispatch(fetchRocketsAPI());
elementStore.dispatch(fetchMissionsFromApi());
export default elementStore;

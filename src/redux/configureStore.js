/* eslint-disable */ 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer, { fetchRocketsAPI } from './rockets/rockets';
import missionsReducer, {fetchMissionsFromApi} from './missions/missions';
import dragonsReducer, {fetchDragonsAPI} from './dragons/dragons';

const reducer = combineReducers({
  dragons: dragonsReducer, 
  rockets: rocketsReducer,
  missions: missionsReducer
});

const elementStore = createStore(reducer, applyMiddleware(thunk, logger));
elementStore.dispatch(fetchRocketsAPI());
elementStore.dispatch(fetchMissionsFromApi());
elementStore.dispatch(fetchDragonsAPI());
elementStore.subscribe((state) => {
  console.log(state);
});
export default elementStore;

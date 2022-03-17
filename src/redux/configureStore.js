/* eslint-disable */ 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer, { fetchRocketsAPI } from './rockets/rockets';
import missionsReducer, {fetchMissionsFromApi} from './missions/missions';
import dragonsReducer, {fetchDragonsAPI} from './dragons/dragons';

const reducer = combineReducers({
  dragonsReducer, 
  rocketsReducer,
  missions: missionsReducer
});

const elementStore = createStore(reducer, applyMiddleware(thunk, logger));
elementStore.dispatch(fetchRocketsAPI());
elementStore.dispatch(fetchMissionsFromApi());
<<<<<<< HEAD
elementStore.dispatch(fetchDragonsAPI());
elementStore.subscribe((state) => {
  console.log(state);
});
=======
>>>>>>> dev
export default elementStore;

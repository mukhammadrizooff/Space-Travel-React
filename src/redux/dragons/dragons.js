const ADD_RESERVATION = 'space-travelers/dragons/ADD_dragon_RESERVATION';
const REMOVE_RESERVATION = 'space-travelers/dragons/REMOVE__DRAGON_RESERVATION';
const GET_DRAGONS = 'space-travelers/dragons/GET_DRAGONS';
const baseURL = 'https://api.spacexdata.com/v3/dragons';

const initialState = [];

export const addDragonReservation = (id) => ({
  type: ADD_RESERVATION,
  payload: {
    id,
  },
});

export const removeDragonReservation = (id) => ({
  type: REMOVE_RESERVATION,
  payload: {
    id,
  },
});

export const getdragons = (payload) => ({
  type: GET_DRAGONS,
  payload,
});

export const fetchDragonsAPI = () => async (dispatch) => {
  await fetch(`${baseURL}`)
    .then((response) => response.json())
    .then((dragonsList) => {
      const arrangedList = dragonsList.map((dragon) => ({
        id: dragon.id,
        name: dragon.name,
        desc: dragon.description,
        type: dragon.type,
        flickr_images: dragon.flickr_images[0],
        reservation: false,
      }));
      if (arrangedList) {
        dispatch(getdragons(arrangedList));
      }
    });
};

// Function - Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESERVATION: {
      const newState = state.map((dragon) => {
        if (dragon.id !== action.payload.id) return dragon;
        return { ...dragon, reservation: true };
      });
      return [...newState];
    }
    case REMOVE_RESERVATION: {
      const newState = state.map((dragon) => {
        if (dragon.id !== action.payload.id) return dragon;
        return { ...dragon, reservation: false };
      });
      return [...newState];
    }
    case GET_DRAGONS:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;

const URL = 'https://api.spacexdata.com/v3/dragons';

export const displayFetchedDragons = (dragons) => ({
  type: DISPLAY_DRAGONS, // eslint-disable-line
  dragons,
});

const showDragons = (data) => {
  console.log(data);
};

export const fetchDragons = () => (dispatch) => {
  fetch(URL)
    .then((resolve) => resolve.json())
    .then((data) => {
      dispatch(displayFetchedDragons(data));
      showDragons(data);
    })
    .catch((error) => console.log(error));
};

const initialState = [];

const dragonsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DISPLAY_DRAGONS: // eslint-disable-line
      return [...state, ...action.dragons];
    default:
      console.log('Dispatched action has no matching case');
      return state;
  }
};

export default dragonsReducer;

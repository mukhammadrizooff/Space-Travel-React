// Action Types
const JOIN_MISSION = 'space-travelers/missions/JOIN_MISSION';
const LEAVE_MISSION = 'space-travelers/missions/LEAVE_MISSION';
const GET_MISSIONS = 'space-travelers/missions/GET_MISSIONS';
const baseURL = 'https://api.spacexdata.com/v3/missions';

// ACTION CREATORS

export const joinMission = (id) => (
  {
    type: JOIN_MISSION,
    payload: {
      id,
    },
  }
);

export const leaveMission = (id) => (
  {
    type: LEAVE_MISSION,
    payload: {
      id,
    },
  }
);

export const getMissions = (payload) => ({
  type: GET_MISSIONS,
  payload,

});

// Fetch Missions

export const fetchMissionsFromApi = () => async (dispatch) => {
  const response = await fetch(baseURL);
  const missions = await response.json();
  //  console.log(missions)

  const missionsToDispatch = missions.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    mission_description: mission.description,
  }));

  dispatch(getMissions(missionsToDispatch));
};

// Reducers

const reducer = (state = [], action) => {
  switch (action.type) {
    case JOIN_MISSION: {
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.payload.id) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
      return [...newState];
    }
    case LEAVE_MISSION:
    {
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.payload.id) {
          return mission;
        }
        return { ...mission, reserved: false };
      });
      return [...newState];
    }
    case GET_MISSIONS:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;

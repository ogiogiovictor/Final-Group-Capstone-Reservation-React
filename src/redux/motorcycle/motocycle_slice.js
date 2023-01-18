import fetchMotocycle from './motocycle_data';

const initialState = [];

// create action contants - This are calleds action types
const GET_MOTOCYCLE = 'msg/GET_MOTOCYCLE';

// Action Creators for the action constant
// ########## Action to to get Dragon ###############/
const getMotocycle = () => async (dispatch) => {
  const motocycle = await fetchMotocycle();
  dispatch({
    type: GET_MOTOCYCLE,
    payload: motocycle,
  });
};

// Reducers that recieves the actions and updates the state
const MotocycleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOTOCYCLE:
      return action.payload;
    default:
      return state;
  }
};

export { getMotocycle };
export default MotocycleReducer;

import { FETCH_SWAPI_SUCCESS } from '../actions/swapiActions';

const initialState = {
  swapiData: [],
};

const swapiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SWAPI_SUCCESS:
      return {
        ...state,
        swapiData: action.payload,
      };
    default:
      return state;
  }
};

export default swapiReducer;

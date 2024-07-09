import { CLEAR_TODOS } from '../actions/todoActions';

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_TODOS:
      return {
        ...state,
        todos: [],
      };
    default:
      return state;
  }
};

export default todoReducer;

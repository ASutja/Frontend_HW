import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, EDIT_TODO, CLEAR_TODOS, SET_TODOS } from './actions';

const initialState = {
  items: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        items: state.items.filter(todo => todo.id !== action.payload),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        items: state.items.map(todo => 
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case EDIT_TODO:
      return {
        ...state,
        items: state.items.map(todo => 
          todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
        ),
      };
    case CLEAR_TODOS:
      return {
        ...state,
        items: [],
      };
    case SET_TODOS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default todosReducer;

import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import swapiReducer from './swapiReducer';

const rootReducer = combineReducers({
  todos: todoReducer,
  swapi: swapiReducer,
});

export default rootReducer;

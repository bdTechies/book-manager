import { combineReducers } from 'redux';
import todoReducer from './todo-reducer';

const allReducers = combineReducers({
  todos: todoReducer
});

export default allReducers;

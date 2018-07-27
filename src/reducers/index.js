import { combineReducers } from 'redux';
import todoReducer from './todo-reducer';

const allReducers = combineReducers({
  todoReducer: todoReducer,
});

export default allReducers;

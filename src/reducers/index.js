import { combineReducers } from 'redux';
import todoReducer from './todo-reducer';
import appControlReducer from './app-control-reducer';

const allReducers = combineReducers({
  todoReducer: todoReducer,
  appControlReducer: appControlReducer,
});

export default allReducers;

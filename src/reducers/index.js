import { combineReducers } from 'redux';
import todoReducer from './todo-reducer';
import bookReducer from './book-reducer';
import appControlReducer from './app-control-reducer';

const allReducers = combineReducers({
  todoReducer: todoReducer,
  bookReducer: bookReducer,
  appControlReducer: appControlReducer,
});

export default allReducers;

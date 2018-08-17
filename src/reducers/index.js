import { combineReducers } from 'redux';
import bookReducer from './book-reducer';
import appControlReducer from './app-control-reducer';

const allReducers = combineReducers({
  bookReducer: bookReducer,
  appControlReducer: appControlReducer,
});

export default allReducers;

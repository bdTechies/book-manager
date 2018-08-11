import { SET_DATA, ADD_BOOK, CREATE_TASK } from '../actions/types';

const INITIAL_STATE = {
  allBooks: [],
};

export default function bookReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case SET_DATA:
      return {
        ...state,
        allBooks: [...payload],
      };
    case ADD_BOOK:
      return {
        ...state,
        allBooks: [...state.allBooks, payload],
      };
    default:
      return state;
  }
}

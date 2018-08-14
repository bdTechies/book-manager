import { SET_DATA, ADD_BOOK, RESET_BOOK_SAVED } from '../actions/types';

const INITIAL_STATE = {
  allBooks: [],
  bookAdded: false,
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
        bookAdded: true,
      };
    case RESET_BOOK_SAVED:
      return {
        ...state,
        bookAdded: false,
      };
    default:
      return state;
  }
}

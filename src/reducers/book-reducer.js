import {
  SET_DATA,
  ADD_BOOK,
  BOOK_EXISTS,
  RESET_BOOK_SAVED,
  HIDE_MESSAGE_DIALOG,
} from '../actions/types';

const INITIAL_STATE = {
  allBooks: [],
  bookAdded: false,
  showMessageDialog: false,
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
    case BOOK_EXISTS:
      return {
        ...state,
        bookAdded: false,
        showMessageDialog: true,
      };
    case HIDE_MESSAGE_DIALOG:
      return {
        ...state,
        showMessageDialog: false,
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

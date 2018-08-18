import {
  SET_DATA,
  SHOW_BOOK,
  ADD_BOOK,
  BOOK_EXISTS,
  RESET_BOOK_SAVED,
  HIDE_MESSAGE_DIALOG,
  BOOK_DELETED,
} from '../actions/types';

const INITIAL_STATE = {
  allBooks: [],
  bookAdded: false,
  bookDeleted: false,
  singleBook: {},
  showMessageDialog: false,
};

export default function bookReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case SET_DATA:
      return {
        ...state,
        singleBook: {},
        bookDeleted: false,
        allBooks: [...payload],
      };
    case SHOW_BOOK:
      return {
        ...state,
        singleBook: payload,
      };
    case ADD_BOOK:
      return {
        ...state,
        singleBook: payload,
        allBooks: [...state.allBooks, payload],
        bookAdded: true,
      };
    case BOOK_EXISTS:
      return {
        ...state,
        singleBook: {},
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
    case BOOK_DELETED:
      return {
        ...state,
        bookDeleted: true,
      };
    default:
      return state;
  }
}

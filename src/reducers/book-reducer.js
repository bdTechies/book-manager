import {
  SET_DATA,
  SHOW_BOOK,
  ADD_BOOK,
  BOOK_UPDATED,
  BOOK_EXISTS,
  RESET_BOOK_SAVED,
  HIDE_MESSAGE_DIALOG,
  BOOK_DELETED,
  DB_REQUEST_STARTED,
  DB_REQUEST_FINISHED,
} from '../actions/types';

const INITIAL_STATE = {
  allBooks: [],
  bookAdded: false,
  bookUpdated: false,
  bookDeleted: false,
  singleBook: {},
  showMessageDialog: false,
  dbReqStarted: false,
  dbReqFinished: false,
};

export default function bookReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case SET_DATA:
      return {
        ...state,
        singleBook: {},
        bookDeleted: false,
        bookAdded: false,
        bookUpdated: false,
        allBooks: [...payload],
      };

    case SHOW_BOOK:
      return {
        ...state,
        singleBook: payload,
      };
    case DB_REQUEST_STARTED:
      return {
        ...state,
        dbReqFinished: false,
        dbReqStarted: true,
      };
    case DB_REQUEST_FINISHED:
      return {
        ...state,
        dbReqStarted: false,
        dbReqFinished: true,
      };
    case ADD_BOOK:
      return {
        ...state,
        singleBook: payload,
        allBooks: [...state.allBooks, payload],
        bookAdded: true,
      };
    case BOOK_UPDATED:
      return {
        ...state,
        allBooks: [...state.allBooks],
        bookUpdated: true,
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

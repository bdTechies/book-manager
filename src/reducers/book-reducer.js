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
  IMPORT_STARTED,
  IMPORT_FINISHED,
  SHOW_EDITOR_DIALOG,
  HIDE_EDITOR_DIALOG,
  SET_EDITOR_CONTENT,
  RESET_EDITOR_CONTENT,
  SHOW_ALL_NOTES,
} from '../actions/types';

const INITIAL_STATE = {
  allBooks: [],
  allNotes: [],
  bookAdded: false,
  bookUpdated: false,
  bookDeleted: false,
  singleBook: {},
  showMessageDialog: false,
  dbReqStarted: false,
  dbReqFinished: false,
  importStarted: false,
  importCompleted: false,
  showEditorDialog: false,
  editorContent: '',
  pageTitle: 'Book Manager',
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
        ...INITIAL_STATE,
        singleBook: payload,
        pageTitle: payload ? payload.title : 'Book Manager',
      };
    case SHOW_ALL_NOTES:
      return {
        ...INITIAL_STATE,
        allNotes: payload,
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
        singleBook: payload,
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
    case IMPORT_STARTED:
      return {
        ...state,
        importStarted: true,
        importCompleted: false,
      };
    case IMPORT_FINISHED:
      return {
        ...state,
        importStarted: false,
        importCompleted: true,
      };
    case SHOW_EDITOR_DIALOG:
      return {
        ...state,
        ...payload,
      };
    case HIDE_EDITOR_DIALOG:
      return {
        ...state,
        ...payload,
      };
    case SET_EDITOR_CONTENT:
      return {
        ...state,
        ...payload,
      };
    case RESET_EDITOR_CONTENT:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}

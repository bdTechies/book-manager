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
  singleBook: {},
  editorContent: '',
  pageTitle: 'Book Manager',
};

const INITIAL_FLAGS = {
  bookAdded: false,
  bookUpdated: false,
  bookDeleted: false,
  dbReqStarted: false,
  dbReqFinished: false,
  importStarted: false,
  importCompleted: false,
  showEditorDialog: false,
  showMessageDialog: false,
};

export default function bookReducer(
  state = { ...INITIAL_STATE, INITIAL_FLAGS },
  { type, payload }
) {
  switch (type) {
    case SET_DATA:
      return {
        ...state,
        ...INITIAL_STATE,
        importCompleted: false,
        allBooks: [...payload],
      };
    case SHOW_BOOK:
      return {
        ...state,
        ...INITIAL_STATE,
        importCompleted: false,
        singleBook: payload,
        pageTitle: payload ? payload.title : 'Book Manager',
      };
    case SHOW_ALL_NOTES:
      return {
        ...state,
        ...INITIAL_STATE,
        importCompleted: false,
        allNotes: payload,
      };
    case DB_REQUEST_STARTED:
      return {
        ...state,
        ...INITIAL_STATE,
        dbReqFinished: false,
        dbReqStarted: true,
      };
    case DB_REQUEST_FINISHED:
      return {
        ...state,
        ...INITIAL_STATE,
        dbReqStarted: false,
        dbReqFinished: true,
      };
    case ADD_BOOK:
      return {
        ...state,
        ...INITIAL_STATE,
        bookAdded: true,
        singleBook: payload,
      };
    case BOOK_UPDATED:
      return {
        ...state,
        ...INITIAL_STATE,
        singleBook: payload,
        bookUpdated: true,
      };
    case BOOK_EXISTS:
      return {
        ...state,
        ...INITIAL_STATE,
        bookAdded: false,
        showMessageDialog: true,
      };
    case HIDE_MESSAGE_DIALOG:
      return {
        ...state,
        ...INITIAL_STATE,
        showMessageDialog: false,
      };
    case RESET_BOOK_SAVED:
      return {
        ...state,
        ...INITIAL_STATE,
        bookAdded: false,
      };
    case BOOK_DELETED:
      return {
        ...state,
        ...INITIAL_STATE,
        bookDeleted: true,
      };
    case IMPORT_STARTED:
      return {
        ...state,
        ...INITIAL_STATE,
        importStarted: true,
        importCompleted: false,
      };
    case IMPORT_FINISHED:
      return {
        ...state,
        ...INITIAL_STATE,
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

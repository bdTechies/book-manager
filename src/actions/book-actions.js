import {
  GET_DATA,
  SET_DATA,
  SHOW_BOOK,
  SAVE_BOOK,
  UPDATE_BOOK,
  BOOK_UPDATED,
  ADD_BOOK,
  BOOK_EXISTS,
  RESET_BOOK_SAVED,
  HIDE_MESSAGE_DIALOG,
  GET_BOOK_BY_ID,
  DELETE_BOOK_BY_ID,
  BOOK_DELETED,
  IMPORT_BOOK_LIST,
  IMPORT_STARTED,
  IMPORT_FINISHED,
  DB_REQUEST_STARTED,
  DB_REQUEST_FINISHED,
  SHOW_EDITOR_DIALOG,
  HIDE_EDITOR_DIALOG,
} from './types';
const electron = window.require('electron');
const { ipcRenderer } = electron;

export function initMainProcessListeners() {
  return dispatch => {
    ipcRenderer.on('receive-all-books', (event, data) => {
      dispatch(dbReqFinish());
      dispatch(setData(data));
      return data;
    });
    ipcRenderer.on('book-saved', (event, data) => {
      dispatch(addNewBook(data));
      return data;
    });
    ipcRenderer.on('book-updated', (event, data) => {
      dispatch(bookUpdated());
      return data;
    });
    ipcRenderer.on('book-exists', (event, data) => {
      dispatch(showExistMessage());
      return data;
    });
    ipcRenderer.on('found-book-by-id', (event, data) => {
      dispatch(showBook(data));
      return data;
    });
    ipcRenderer.on('book-deleted', (event, data) => {
      dispatch(bookDeleted());
      return data;
    });
    ipcRenderer.on('import-completed', (event, data) => {
      dispatch(finisImportReq());
      return data;
    });
  };
}

export function getData() {
  return dispatch => {
    dispatch(dbReqStart());
    ipcRenderer.send('get-all-books', 'Get all books from db');
    return {
      type: GET_DATA,
    };
  };
}

export function getBookById(id) {
  ipcRenderer.send('get-book-by-id', id);
  return {
    type: GET_BOOK_BY_ID,
  };
}

export function saveBook(newBook) {
  ipcRenderer.send('save-book', newBook);
  return {
    type: SAVE_BOOK,
  };
}

export function updateBook(book) {
  ipcRenderer.send('update-book', book);
  return {
    type: UPDATE_BOOK,
  };
}

export function deleteBookById(id) {
  ipcRenderer.send('delete-book-by-id', id);
  return {
    type: DELETE_BOOK_BY_ID,
  };
}

export function bookDeleted(id) {
  return {
    type: BOOK_DELETED,
  };
}

export function dbReqStart() {
  return {
    type: DB_REQUEST_STARTED,
  };
}

export function dbReqFinish() {
  return {
    type: DB_REQUEST_FINISHED,
  };
}

export function importBookList(data) {
  return dispatch => {
    dispatch(startImportReq());
    ipcRenderer.send('import-book-list', data);
    return {
      type: IMPORT_BOOK_LIST,
    };
  };
}

export function startImportReq() {
  return {
    type: IMPORT_STARTED,
  };
}

export function finisImportReq() {
  return {
    type: IMPORT_FINISHED,
  };
}

export function setData(data) {
  return {
    type: SET_DATA,
    payload: data,
  };
}

export function showBook(data) {
  return {
    type: SHOW_BOOK,
    payload: data,
  };
}

export function addNewBook(newBook) {
  return {
    type: ADD_BOOK,
    payload: newBook,
  };
}

export function bookUpdated() {
  return {
    type: BOOK_UPDATED,
  };
}

export function showExistMessage() {
  return {
    type: BOOK_EXISTS,
  };
}

export function hideMessageDialog() {
  return {
    type: HIDE_MESSAGE_DIALOG,
  };
}

export function resetBookSaved() {
  return {
    type: RESET_BOOK_SAVED,
  };
}

export function showEditorDialog() {
  return {
    type: SHOW_EDITOR_DIALOG,
    payload: {
      showEditorDialog: true,
    },
  };
}

export function hideEditorDialog() {
  return {
    type: HIDE_EDITOR_DIALOG,
    payload: {
      showEditorDialog: false,
    },
  };
}

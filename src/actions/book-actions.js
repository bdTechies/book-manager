import {
  GET_DATA,
  SET_DATA,
  SHOW_BOOK,
  SAVE_BOOK,
  ADD_BOOK,
  BOOK_EXISTS,
  RESET_BOOK_SAVED,
  HIDE_MESSAGE_DIALOG,
  GET_BOOK_BY_ID,
  DELETE_BOOK_BY_ID,
  BOOK_DELETED,
} from './types';
const electron = window.require('electron');
const { ipcRenderer } = electron;

export function initMainProcessListeners() {
  return dispatch => {
    ipcRenderer.on('receive-all-books', (event, data) => {
      dispatch(setData(data));
      return data;
    });
    ipcRenderer.on('book-saved', (event, data) => {
      dispatch(addNewBook(data));
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
  };
}

export function getData() {
  ipcRenderer.send('get-all-books', 'Get all books from db');
  return {
    type: GET_DATA,
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

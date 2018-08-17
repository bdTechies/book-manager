import {
  GET_DATA,
  SET_DATA,
  SAVE_BOOK,
  ADD_BOOK,
  BOOK_EXISTS,
  RESET_BOOK_SAVED,
  HIDE_MESSAGE_DIALOG,
} from './types';
const electron = window.require('electron');
const { ipcRenderer } = electron;

export function initMainProcessListeners() {
  return dispatch => {
    ipcRenderer.on('initialized-app', (event, data) => {
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
  };
}

export function getData() {
  ipcRenderer.send('init-app', 'init app');
  return {
    type: GET_DATA,
  };
}

export function saveBook(newBook) {
  ipcRenderer.send('save-book', newBook);
  return {
    type: SAVE_BOOK,
  };
}

export function setData(data) {
  return {
    type: SET_DATA,
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

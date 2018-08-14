import {
  GET_DATA,
  SET_DATA,
  SAVE_BOOK,
  ADD_BOOK,
  RESET_BOOK_SAVED,
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

export function resetBookSaved() {
  return {
    type: RESET_BOOK_SAVED,
  };
}

import { SET_DATA, SAVE_TASK, ADD_TASK, CREATE_TASK } from './types';
const electron = window.require('electron');
const { ipcRenderer } = electron;

export function getData() {
  ipcRenderer.send('init-app', 'init app');
  return dispatch => {
    ipcRenderer.on('initialized-app', (event, data) => {
      dispatch(setData(data));
      return data;
    });
  };
}

export function getSavedTask() {
  return dispatch => {
    ipcRenderer.on('task-saved', (event, data) => {
      dispatch(addNewTask(data));
      return data;
    });
  };
}

export function saveTask(task) {
  ipcRenderer.send('save-task', task);
  return {
    type: SAVE_TASK,
  };
}

export function setData(data) {
  return {
    type: SET_DATA,
    payload: data,
  };
}

export function createNewTask(value) {
  return {
    type: CREATE_TASK,
    payload: value,
  };
}

export function addNewTask(newTask) {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
}

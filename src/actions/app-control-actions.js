import {
  EXIT_APP,
  MINIMIZE_APP,
  MAXIMIZE_APP,
  UN_MAXIMIZE_APP,
  TOGGLE_MAXIMIZE,
} from './types';
const electron = window.require('electron');
const { ipcRenderer } = electron;

export function minimizeApp() {
  ipcRenderer.send('MINIMIZE_APP', 'Minimizing the app');
  return {
    type: MINIMIZE_APP,
  };
}

export function toggleMaximize(isMaximized) {
  return {
    type: TOGGLE_MAXIMIZE,
    payload: isMaximized,
  };
}

export function maximizeApp() {
  ipcRenderer.send('MAXIMIZE_APP', 'Maximizing the app');
  return {
    type: MAXIMIZE_APP,
  };
}

export function unMaximizeApp() {
  ipcRenderer.send('UN_MAXIMIZE_APP', 'Unmaximizing the app');
  return {
    type: UN_MAXIMIZE_APP,
  };
}

export function exitApp() {
  ipcRenderer.send('EXIT_APP', 'Closing the app');
  return {
    type: EXIT_APP,
  };
}

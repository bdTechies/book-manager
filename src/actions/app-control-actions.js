import { EXIT_APP } from './types';
const electron = window.require('electron');
const { ipcRenderer } = electron;

export function exitApp() {
  ipcRenderer.send('EXIT_APP', 'Closing the app');
  return {
    type: EXIT_APP,
  };
}

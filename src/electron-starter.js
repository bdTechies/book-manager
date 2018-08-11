const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
const dataPath = app.getPath('userData');
const db = require('./config/db');
const datastore = db.createDatabase(dataPath, 'book-manager');

const startUrl =
  `http://localhost:3000` ||
  url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true,
  });
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1152,
    height: 700,
    minWidth: 1152,
    minHeight: 700,
    frame: false,
  });
  mainWindow.loadURL(startUrl);
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on('init-app', (event, data) => {
  datastore
    .find({})
    .sort({ createdAt: 1 })
    .then(data => {
      event.sender.send('initialized-app', data);
    })
    .catch(err => console.log(err));
});

ipcMain.on('save-book', (event, data) => {
  console.log(data);
  datastore
    .insert(data)
    .then(data => {
      event.sender.send('book-saved', data);
    })
    .catch(err => console.log(err));
});

ipcMain.on('MINIMIZE_APP', (event, data) => {
  mainWindow.minimize();
});

ipcMain.on('MAXIMIZE_APP', (event, data) => {
  mainWindow.maximize();
});

ipcMain.on('UN_MAXIMIZE_APP', (event, data) => {
  mainWindow.unmaximize();
});

ipcMain.on('EXIT_APP', (event, data) => {
  app.quit();
});

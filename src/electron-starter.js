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

ipcMain.on('get-all-books', (event, data) => {
  datastore
    .find({})
    .sort({ createdAt: 1 })
    .then(data => {
      event.sender.send('receive-all-books', data);
    })
    .catch(err => console.log(err));
});

ipcMain.on('get-book-by-id', (event, id) => {
  datastore
    .findOne({ _id: id })
    .then(data => {
      event.sender.send('found-book-by-id', data);
    })
    .catch(err => console.log(err));
});

ipcMain.on('save-book', (event, data) => {
  datastore
    .findOne({
      title: data.title,
      author: data.author,
      publisher: data.publisher,
    })
    .then(book => {
      if (book) {
        event.sender.send('book-exists', book);
      } else {
        datastore.insert(data).then(data => {
          event.sender.send('book-saved', data);
        });
      }
    })
    .catch(err => console.log(err));
});

ipcMain.on('delete-book-by-id', (event, id) => {
  datastore
    .remove({ _id: id })
    .then(data => {
      event.sender.send('book-deleted', data);
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

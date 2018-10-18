const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');
const dataPath = app.getPath('userData');
const db = require('./config/db');
const datastore = db.createDatabase(dataPath, 'book-manager');

const startUrl = isDev
  ? 'http://localhost:3000'
  : url.format({
      pathname: path.join(__dirname, './../build/index.html'),
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
    icon: path.join(__dirname, './assets/icons/icon.png'),
  });
  mainWindow.loadURL(startUrl);
  // Open the DevTools.
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

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

ipcMain.on('get-all-books', (event, options) => {
  const perPage = options.perPage || 4;
  const currentPage = options.currentPage || 1;
  const skip = (currentPage - 1) * perPage;
  const sortBy = options.sortBy || { createdAt: 1 };
  datastore
    .find({})
    .skip(skip)
    .limit(perPage)
    .sort(sortBy)
    .then(data => {
      event.sender.send('show-all-books', data);
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

ipcMain.on('search-book', (event, options) => {
  const regexQuery = new RegExp(options.queryText, 'i');
  const perPage = options.perPage || 4;
  const currentPage = options.currentPage || 1;
  const skip = (currentPage - 1) * perPage;
  const sortBy = options.sortBy || { createdAt: 1 };
  datastore
    .find({
      $or: [
        {
          title: regexQuery,
        },
        {
          author: regexQuery,
        },
        {
          categories: regexQuery,
        },
      ],
    })
    .skip(skip)
    .limit(perPage)
    .sort(sortBy)
    .then(data => {
      event.sender.send('show-all-books', data);
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

ipcMain.on('import-book-list', (event, data) => {
  let c = 0;
  data.map(book => {
    c++;
    datastore
      .findOne({
        title: book.title,
        author: book.author,
        publisher: book.publisher,
      })
      .then(bookFound => {
        if (!bookFound) {
          datastore.insert(book).then(newBook => {});
        }
      })
      .catch(err => console.log(err));
    if (data.length === c) {
      event.sender.send('import-completed', {});
    }
  });
});

ipcMain.on('delete-book-by-id', (event, id) => {
  datastore
    .remove({ _id: id })
    .then(data => {
      event.sender.send('book-deleted', data);
    })
    .catch(err => console.log(err));
});

ipcMain.on('update-book', (event, book) => {
  datastore
    .update({ _id: book._id }, book)
    .then(() => {
      datastore.findOne({ _id: book._id }).then(data => {
        event.sender.send('book-updated', data);
      });
    })
    .catch(err => console.log(err));
});

ipcMain.on('add-note', (event, bookWithNote) => {
  datastore
    .update({ _id: bookWithNote._id }, bookWithNote)
    .then(() => {
      datastore.findOne({ _id: bookWithNote._id }).then(data => {
        event.sender.send('note-added', data);
      });
    })
    .catch(err => console.log(err));
});

ipcMain.on('get-all-notes', (event, options) => {
  const perPage = options.perPage || 10;
  const currentPage = options.currentPage || 1;
  const skip = (currentPage - 1) * perPage;
  const sortBy = options.sortBy || { createdAt: 1 };
  datastore
    .find({
      note: {
        $exists: true,
        $ne: '',
      },
    })
    .skip(skip)
    .limit(perPage)
    .sort(sortBy)
    .then(data => {
      event.sender.send('show-all-notes', data);
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

const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");
const dataPath = app.getPath("userData");
const db = require("./config/db");

const startUrl =
  `http://localhost:3000` ||
  url.format({
    pathname: path.join(__dirname, "/../build/index.html"),
    protocol: "file:",
    slashes: true
  });
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 1152, height: 700 });
  mainWindow.loadURL(startUrl);
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  mainWindow.on("closed", function() {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", function() {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
  if (mainWindow === null) {
    createWindow();
  }
});

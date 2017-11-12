const electron = require('electron');
const path = require('path');
const url = require('url');
var exec = require('child_process').exec;

function isDevelopment() {
  return process.env.NODE_ENV === 'development'
}
const APP_NAME = isDevelopment() ? 'React example (development)' : 'React example'

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

exec('ls -l', function(err, stdout, stderr){
  /* some process */
  // console.log(err);
  console.log(stdout);
  // console.log(stderr);
});

function createWindow() {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  if (isDevelopment()) {
    mainWindow.loadURL(`http://localhost:${process.env.PORT || 3000}/`);
    mainWindow.webContents.openDevTools();
  } else {
    // Load prod build
    mainWindow.loadURL(`file://${__dirname}/build/index.html`)
  }

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}


app.on('ready', createWindow);

// 全てのウィンドウが閉じたときの処理
app.on('window-all-closed', function () {
  // macOSのとき以外はアプリケーションを終了させます
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  /// メインウィンドウが消えている場合は再度メインウィンドウを作成する
  if (mainWindow === null) {
    createWindow();
  }
});

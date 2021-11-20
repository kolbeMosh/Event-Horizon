const path = require('path');
const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');

function createWindow() {
  // Create the browser window.
  const { screen } = require('electron')
  

  // Dividing the width and height by this factor allows
  // Electron app pixels to scale directly with the computer pixels
  let factor = screen.getPrimaryDisplay().scaleFactor;

  const win = new BrowserWindow({
    titleBarStyle: 'hidden',
    frame: true, // removes the app frame from the window if false- set to true for dev -KH
    width: 500 / factor, 
    height: 700 / factor, 
    webPreferences: {
      // implement dark mode later on https://www.electronjs.org/docs/latest/tutorial/dark-mode
      nodeIntegration: true,
      zoomFactor: 1.00 / factor 
    },
  });

  // and load the index.html of the app.
  // win.loadFile("index.html");
  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
  // Open the DevTools.
  // if (isDev) {
  //   win.webContents.openDevTools({ mode: 'detach' });
  // }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
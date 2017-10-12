const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;
const app = electron.app;

const path = require('path');
const url = require('url');
let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({width: 800, height: 600, frame: false});
    mainWindow.openDevTools({mode: "detach"});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
    mainWindow.on('closed', function () {
        mainWindow = null
    });
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});
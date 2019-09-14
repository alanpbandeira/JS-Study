const electron = require('electron');

const {app, BrowserWindow} = electron;


let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        webPreferences: {
            // Enables the code to keep runing when the window is not focused.
            backgroundThrottling: false 
        }
    });

    mainWindow.loadURL(`file://${__dirname}/src/index.html`);
});
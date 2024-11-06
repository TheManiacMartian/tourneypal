/** The main file that initializes electron. */
const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let window;

/** Create new desktop window.
 * @param width the width of the application window.
 * @param height the height of the application window.
 */
const createWindow = () => {
    setTimeout(() => {
    window = new BrowserWindow({width: 1280, height: 720, icon:'./src/favicon.ico'});
    //window.loadFile('dist/tourneypal/browser/index.html');
    window.loadURL(url.format({pathname: 'localhost:4200',protocol: 'http:',slashes: true}));
    
    //window.webContents.openDevTools();

    window.on('closed', () => {
        // dereference window object
        window = null;
    });
    }, 10000); // timeout so we wait for the page to load
}

/** When the app is ready, we can create the window */
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') 
        {
            app.quit();
        }
    }
);

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) 
        {
            createWindow();
        }
    }
)
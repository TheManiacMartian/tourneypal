/** The main file that initializes electron. */
const { app, BrowserWindow } = require('electron');

/** Create new desktop window.
 * @param width the width of the application window.
 * @param height the height of the application window.
 */
function createWindow(width, height) {
    const window = new BrowserWindow({width: width, height: height});
    window.loadFile('dist/tourneypal/browser/index.html');
}

/** When the app is ready, we can create the window */
app.whenReady().then(() => {
    createWindow(1280, 720);
});
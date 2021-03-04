import { app, BrowserWindow, ipcMain } from 'electron';
import isDev from 'electron-is-dev';
import { createMainWindow } from './modules/createWindows';

if (require('electron-squirrel-startup')) app.quit();

/**
 * Check whether other app instance is running.
 * If true, quit the second app instance.
 */
if (!app.requestSingleInstanceLock()) app.quit();

app.on('ready', () => {
  createMainWindow();

  if (isDev) {
    const {
      default: installExtension,
      REACT_DEVELOPER_TOOLS,
    } = require('electron-devtools-installer');

    installExtension(REACT_DEVELOPER_TOOLS)
      .then((name: string) => console.log(`extension: ${name} added`))
      .catch((err: any) => console.log(`extension: ${err}`));
  }
});

app.on('second-instance', () => {
  createMainWindow();
});

app.on('activate', (e, hasVisibleWindow) => {
  if (!hasVisibleWindow) createMainWindow();
});

ipcMain.on('window-close', (e) =>
  BrowserWindow.fromWebContents(e.sender).close()
);

ipcMain.on('window-minimize', (e) =>
  BrowserWindow.fromWebContents(e.sender).minimize()
);

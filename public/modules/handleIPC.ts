import { ipcMain, BrowserWindow } from 'electron';

ipcMain.on('window-close', (e) => {
  const window = BrowserWindow.getFocusedWindow();
  window?.close();
});

ipcMain.on('window-maximize', (e) => {
  const window = BrowserWindow.getFocusedWindow();

  if (window?.isMaximized()) window?.unmaximize();
  else window?.maximize();
});

ipcMain.on('window-minimize', (e) => {
  const window = BrowserWindow.getFocusedWindow();
  window?.minimize();
});

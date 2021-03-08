import { ipcMain, BrowserWindow } from 'electron';
import isDev from 'electron-is-dev';
import path from 'path';
import { createSettingsWindow } from './createSettings';

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

ipcMain.on('openScheduleEdit', (e) => {
  console.log('IPC :: openScheduleEdit called!');

  createSettingsWindow();
});

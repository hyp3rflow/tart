import {BrowserWindow} from "electron";
import windowStateKeeper from "electron-window-state";
import isDev from "electron-is-dev";
import path from "path";

let mainWindow: BrowserWindow | undefined;

export function createMainWindow() {
    if (mainWindow !== undefined) {
        mainWindow.show();
        return;
    }

    const windowState = windowStateKeeper({
        defaultWidth: 1024,
        defaultHeight: 768,
        file: "mainWindow.json"
    });

    mainWindow = new BrowserWindow({
        x: windowState.x,
        y: windowState.y,
        width: windowState.width,
        height: windowState.height,
        title: "TART",
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: true,
            devTools: isDev
        },
        show: false,
        resizable: true,
        backgroundColor: "#fff"
    });

    windowState.manage(mainWindow);

    if (isDev) {
        mainWindow.loadURL("http://localhost:3000")
            .catch(error => console.error(error));
        mainWindow.webContents.openDevTools({mode: "undocked"});
    }
    else {
        const url = new URL(`file://${path.join(__dirname, "../../build/index.html")}`);
        mainWindow.loadURL(url.toString())
            .catch(error => console.error(error));
    }

    mainWindow.once("ready-to-show", () => {
        mainWindow?.show();
    });

    mainWindow.once("closed", () => {
        mainWindow = undefined;
    })
}
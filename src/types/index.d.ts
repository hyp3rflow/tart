declare global {
  interface Window {
    ipcAPI: {
      send: (channel: string, ...args: any[]) => void;
      sendSync: (channel: string, ...args: any[]) => any;
    };
  }
}

export {};

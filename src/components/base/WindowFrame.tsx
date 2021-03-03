import React from 'react';

const WindowFrame: React.FC = () => {
  const onMinimize = () => {
    window.ipcAPI.send('window-minimize');
  };

  const onMaximize = () => {
    window.ipcAPI.send('window-maximize');
  };

  const onClose = () => {
    window.ipcAPI.send('window-close');
  };

  return (
    <div>
      <button className="frame-button-minimize" onClick={onMinimize}>
        -
      </button>
      <button className="frame-button-maximize" onClick={onMaximize}>
        +
      </button>
      <button className="frame-button-close" onClick={onClose}>
        x
      </button>
    </div>
  );
};

export default WindowFrame;

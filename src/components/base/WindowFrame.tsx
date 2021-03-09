import React, { useRef } from 'react';
import styled from 'styled-components';
import { VscChromeClose, VscChromeMinimize } from 'react-icons/vsc';

const WindowFrameWrapper = styled.div`
  -webkit-app-region: drag;

  width: calc(100vw - 5px);
  height: 25px;
  margin-left: 5px;
  margin-top: 5px;
  background-color: #343a40;

  display: flex;
  align-items: center;
`;

const WindowTitle = styled.p`
  padding-left: 10px;
  font-size: 14px;
  font-weight: 300;
  color: #adb5bd;
`;

const FrameButtonWrapper = styled.div`
  margin-left: auto;
  display: flex;
`;

interface FrameButtonProps {
  isClose?: boolean;
}

const FrameButton = styled.button<FrameButtonProps>`
  -webkit-app-region: none;
  background: none;
  width: 45px;
  height: 30px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: #f8f9fa;
    width: 15px;
    height: 15px;
  }

  &:hover {
    background: ${(props) => props.isClose && '#fa5252'};
  }
`;

const WindowFrame: React.FC = () => {
  const minimizeRef = useRef<HTMLButtonElement>(null);

  const onClose = () => {
    window.ipcAPI.send('window-close');
  };

  const onMinimize = () => {
    if (minimizeRef.current)
      minimizeRef.current.style.background = 'none';

    window.ipcAPI.send('window-minimize');
  };

  const onMinimizeMouseOver = () => {
    if (minimizeRef.current)
      minimizeRef.current.style.background = '#495057';
  };

  const onMinimizeMouseLeave = () => {
    if (minimizeRef.current)
      minimizeRef.current.style.background = 'none';
  };

  return (
    <WindowFrameWrapper>
      <WindowTitle>TART</WindowTitle>
      <FrameButtonWrapper>
        <FrameButton onClick={onMinimize} onMouseOver={onMinimizeMouseOver} onMouseLeave={onMinimizeMouseLeave}
                     ref={minimizeRef}>
          <VscChromeMinimize />
        </FrameButton>
        <FrameButton onClick={onClose} isClose>
          <VscChromeClose />
        </FrameButton>
      </FrameButtonWrapper>
    </WindowFrameWrapper>
  );
};

export default WindowFrame;

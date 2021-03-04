import React from 'react';
import styled from 'styled-components';
import { VscChromeMinimize, VscChromeClose } from 'react-icons/vsc';

const WindowFrameWrapper = styled.div`
  -webkit-app-region: drag;

  width: 100%;
  height: 30px;
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
    background: ${(props) => (props.isClose ? '#fa5252' : '#495057')};
  }
`;

const WindowFrame: React.FC = () => {
  const onMinimize = () => {
    window.ipcAPI.send('window-minimize');
  };

  const onClose = () => {
    window.ipcAPI.send('window-close');
  };

  return (
    <WindowFrameWrapper>
      <WindowTitle>TART</WindowTitle>
      <FrameButtonWrapper>
        <FrameButton onClick={onMinimize}>
          <VscChromeMinimize />
        </FrameButton>
        <FrameButton onClick={onClose}>
          <VscChromeClose />
        </FrameButton>
      </FrameButtonWrapper>
    </WindowFrameWrapper>
  );
};

export default WindowFrame;

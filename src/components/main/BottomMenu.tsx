import React from 'react';
import styled from 'styled-components';
import RoundButton from 'components/base/RoundButton';

const StyledButton = styled(RoundButton)`
  & + & {
    margin-left: 14px;
  }
`;

interface ButtonListWrapperProps {
  isOpened?: boolean;
}

const ButtonListWrapper = styled.div<ButtonListWrapperProps>`
  display: flex;
  overflow: hidden;
  flex-shrink: 0;

  height: ${(props) => (props.isOpened ? '64px' : '0px')};

  transition: height 0.25s linear;

  ${StyledButton} {
    margin-top: 14px;
  }
`;

interface BottomMenuProps {
  opened: boolean;
}

const BottomMenu: React.FC<BottomMenuProps> = (props) => {
  const { opened } = props;

  return (
    <ButtonListWrapper isOpened={opened}>
      <StyledButton
        onClick={() => {
          window.ipcAPI.send('openDiscordSettings');
        }}
      >
        디스코드 설정
      </StyledButton>
      <StyledButton
        onClick={() => {
          window.ipcAPI.send('openScheduleEdit');
        }}
      >
        일정 관리
      </StyledButton>
    </ButtonListWrapper>
  );
};

export default BottomMenu;

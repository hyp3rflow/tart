import Card from 'components/base/Card';
import RoundButton from 'components/base/RoundButton';
import WindowTemplate from 'components/base/WindowTemplate';
import Clock from 'components/main/Clock';
import PendingSchedules from 'components/main/PendingSchedules';
import React, { useState } from 'react';
import { VscSettingsGear } from 'react-icons/vsc';
import styled from 'styled-components';

const MainHeader = styled.div`
  display: flex;
`;

const ScheduleTime = styled.div`
  color: #adb5bd;
`;

const MainTitle = styled.h1`
  font-weight: 800;
`;

const SettingRoundButton = styled(RoundButton)`
  svg {
    width: 18px;
    height: 18px;
  }

  margin-left: auto;
`;

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
  overflow: ${(props) => (props.isOpened ? 'inherit' : 'hidden')};

  margin-top: ${(props) => (props.isOpened ? '14px' : '0')};
  height: ${(props) => (props.isOpened ? 'auto' : '0px')};
`;

const HoverButton = styled(RoundButton)`
  position: absolute;
  right: 14px;
  bottom: 14px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const MainContainer: React.FC = () => {
  const [opened, setOpened] = useState(false);

  return (
    <WindowTemplate>
      <MainHeader>
        <MainTitle>타르트</MainTitle>
        <SettingRoundButton
          onClick={() => {}}
          width="50px"
          height="50px"
          padding="0"
          shadow
          flex
        >
          <VscSettingsGear />
        </SettingRoundButton>
      </MainHeader>
      <div>
        현재 시각
        <Clock />
      </div>
      <Card>
        <ScheduleTime>현재 진행 중인 일정</ScheduleTime>
        <h2>정보대학 상임위원회 회의</h2>
      </Card>
      <PendingSchedules />
      <HoverButton onClick={() => setOpened(!opened)} shadow></HoverButton>
      <ButtonListWrapper isOpened={opened}>
        <StyledButton onClick={() => {}}>디스코드 설정</StyledButton>
        <StyledButton onClick={() => {}}>일정 관리</StyledButton>
      </ButtonListWrapper>
    </WindowTemplate>
  );
};

export default MainContainer;

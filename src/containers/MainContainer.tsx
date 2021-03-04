import Card from 'components/base/Card';
import RoundButton from 'components/base/RoundButton';
import WindowTemplate from 'components/base/WindowTemplate';
import Clock from 'components/main/Clock';
import React from 'react';
import { VscSettingsGear } from 'react-icons/vsc';
import styled from 'styled-components';

const SettingRoundButton = styled(RoundButton)`
  svg {
    width: 18px;
    height: 18px;
  }

  margin-left: auto;
`;

const MainButtonListWrapper = styled.div`
  display: flex;
  margin-bottom: 14px;
`;

const MainContainer: React.FC = () => {
  return (
    <WindowTemplate>
      <MainButtonListWrapper>
        <RoundButton onClick={() => {}} shadow backgroundColor="#2f9e44">
          디스코드 전송 중!
        </RoundButton>
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
      </MainButtonListWrapper>
      <Card>
        안녕하세요, tartUser님.
        <Clock />
      </Card>
    </WindowTemplate>
  );
};

export default MainContainer;

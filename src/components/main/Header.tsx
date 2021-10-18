import React from 'react';
import styled from 'styled-components';
import { VscSettingsGear } from 'react-icons/vsc';

import RoundButton from 'components/base/RoundButton';

const MainHeader = styled.div`
  display: flex;
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

const Header: React.FC = () => {
  return (
    <MainHeader>
      <MainTitle>타르트</MainTitle>
      <SettingRoundButton
        onClick={() => {
          window.ipcAPI.send('openSettings');
        }}
        width="50px"
        height="50px"
        padding="0"
        shadow
        flex
      >
        <VscSettingsGear />
      </SettingRoundButton>
    </MainHeader>
  );
};

export default Header;

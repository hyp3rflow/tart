import React, { useState } from 'react';
import styled from 'styled-components';
import Header from 'components/main/Header';
import Clock from 'components/main/Clock';
import CurrentSchedule from 'components/main/CurrentSchedule';
import PendingSchedules from 'components/main/PendingSchedules';
import RoundButton from 'components/base/RoundButton';
import BottomMenu from 'components/main/BottomMenu';

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
    <>
      <Header />
      <Clock />
      <CurrentSchedule />
      <PendingSchedules />
      <HoverButton onClick={() => setOpened(!opened)} shadow></HoverButton>
      <BottomMenu opened={opened} />
    </>
  );
};

export default MainContainer;

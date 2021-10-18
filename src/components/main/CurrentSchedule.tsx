import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { ColorPalette } from 'utils/ColorUtils';
import Card from 'components/base/Card';

const ScheduleTime = styled.div`
  color: #adb5bd;
`;

const ScheduleInput = styled.input`
  border: none;
  background: none;
  font-size: 24px;
  font-weight: bold;
  padding: 0;
  color: ${ColorPalette.WHITE};

  &:focus {
    background-color: ${ColorPalette.GRAY_BACKGROUND};
    box-shadow: -2px 2px 0 3px ${ColorPalette.GRAY_BACKGROUND};
    border-radius: 4px;
  }
`;

const CurrentSchedule: React.FC = () => {
  const [currentSchedule, setCurrentSchedule] = useState({
    title: 'TART 실행 중',
  });

  useEffect(() => {
    window.ipcAPI.send('changeCurrentSchedule', {
      ...currentSchedule,
      startTimestamp: new Date(),
    });
  }, [currentSchedule]);

  return (
    <Card>
      <ScheduleTime>현재 진행 중인 일정</ScheduleTime>
      <ScheduleInput
        value={currentSchedule.title}
        onChange={e => {
          setCurrentSchedule({
            ...currentSchedule,
            title: e.currentTarget.value,
          });
        }}
      />
    </Card>
  );
};

export default CurrentSchedule;

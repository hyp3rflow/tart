import React, { useState } from 'react';
import styled from 'styled-components';

import Card from 'components/base/Card';
import { Schedule } from 'models/schedule';

const ScheduleTopWrapper = styled.div`
  cursor: pointer;
`;

const ScheduleTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
`;

const ScheduleTime = styled.div`
  color: #adb5bd;
`;

const ScheduleDetailWrapper = styled.div`
  border-top: 1px solid #adb5bd;
  margin-top: 8px;
  padding-top: 8px;
`;

const ScheduleTimeSelect = styled.div``;

interface ScheduleItemProps {
  schedule: Schedule;
}

const ScheduleItem: React.FC<ScheduleItemProps> = props => {
  const { title, startTimestamp, endTimestamp } = props.schedule;
  const [open, setOpen] = useState(false);

  return (
    <Card>
      <ScheduleTopWrapper onClick={() => setOpen(!open)}>
        <ScheduleTitle>{title}</ScheduleTitle>
        <ScheduleTime>{startTimestamp.toLocaleString()}</ScheduleTime>
      </ScheduleTopWrapper>
      {open && (
        <ScheduleDetailWrapper>
          <ScheduleTimeSelect>
            시작 시간 : {startTimestamp.toLocaleString()}
          </ScheduleTimeSelect>
        </ScheduleDetailWrapper>
      )}
    </Card>
  );
};

export default ScheduleItem;

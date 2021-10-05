import React from 'react';
import styled from 'styled-components';

import ScheduleItem from './ScheduleItem';

const PendingSchedulesWrapper = styled.div`
  margin-top: 14px;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  transition: color 0.3s ease;

  &:hover {
    overflow-y: overlay;
  }
`;

const PendingSchedules: React.FC = () => {
  return (
    <PendingSchedulesWrapper>
      <ScheduleItem
        schedule={{
          title: '정보대학 감사원 회의',
          startTimestamp: new Date(),
        }}
      />
      <ScheduleItem
        schedule={{
          title: '정보대학 감사원 회의',
          startTimestamp: new Date(),
        }}
      />
      <ScheduleItem
        schedule={{
          title: '정보대학 감사원 회의',
          startTimestamp: new Date(),
        }}
      />
      <ScheduleItem
        schedule={{
          title: '정보대학 감사원 회의',
          startTimestamp: new Date(),
        }}
      />
      <ScheduleItem
        schedule={{
          title: '정보대학 감사원 회의',
          startTimestamp: new Date(),
        }}
      />
      <ScheduleItem
        schedule={{
          title: '정보대학 감사원 회의',
          startTimestamp: new Date(),
        }}
      />
      <ScheduleItem
        schedule={{
          title: '정보대학 감사원 회의',
          startTimestamp: new Date(),
        }}
      />
      <ScheduleItem
        schedule={{
          title: '정보대학 감사원 회의',
          startTimestamp: new Date(),
        }}
      />
      <ScheduleItem
        schedule={{
          title: '정보대학 감사원 회의',
          startTimestamp: new Date(),
        }}
      />
      <ScheduleItem
        schedule={{
          title: '정보대학 감사원 회의',
          startTimestamp: new Date(),
        }}
      />
    </PendingSchedulesWrapper>
  );
};

export default PendingSchedules;

import React from 'react';
import styled from 'styled-components';
import Card from 'components/base/Card';

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

const ScheduleTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
`;

const ScheduleTime = styled.div`
  color: #adb5bd;
`;

const PendingSchedules: React.FC = () => {
  return (
    <PendingSchedulesWrapper>
      <Card>
        <ScheduleTitle>정보대학 감사원 회의</ScheduleTitle>
        <ScheduleTime>오전 3시 (32분 이후)</ScheduleTime>
      </Card>
      <Card>
        <ScheduleTitle>정보대학 감사원 회의</ScheduleTitle>
        <ScheduleTime>오전 3시 (32분 이후)</ScheduleTime>
      </Card>
      <Card>
        <ScheduleTitle>정보대학 감사원 회의</ScheduleTitle>
        <ScheduleTime>오전 3시 (32분 이후)</ScheduleTime>
      </Card>
      <Card>
        <ScheduleTitle>정보대학 감사원 회의</ScheduleTitle>
        <ScheduleTime>오전 3시 (32분 이후)</ScheduleTime>
      </Card>
      <Card>
        <ScheduleTitle>정보대학 감사원 회의</ScheduleTitle>
        <ScheduleTime>오전 3시 (32분 이후)</ScheduleTime>
      </Card>
      <Card>
        <ScheduleTitle>정보대학 감사원 회의</ScheduleTitle>
        <ScheduleTime>오전 3시 (32분 이후)</ScheduleTime>
      </Card>
      <Card>
        <ScheduleTitle>정보대학 감사원 회의</ScheduleTitle>
        <ScheduleTime>오전 3시 (32분 이후)</ScheduleTime>
      </Card>
      <Card>
        <ScheduleTitle>정보대학 감사원 회의</ScheduleTitle>
        <ScheduleTime>오전 3시 (32분 이후)</ScheduleTime>
      </Card>
      <Card>
        <ScheduleTitle>정보대학 감사원 회의 10</ScheduleTitle>
        <ScheduleTime>오전 3시 (32분 이후)</ScheduleTime>
      </Card>
    </PendingSchedulesWrapper>
  );
};

export default PendingSchedules;

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ClockWrapper = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.3;
  margin-bottom: 14px;
`;

const Clock: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds().toString().padStart(2, '0');
  const period = hours > 12 ? '오후' : '오전';
  const displayHours = hours % 12;

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  return (
    <ClockWrapper>
      {period} {displayHours}시 {minutes}분 {seconds}초
    </ClockWrapper>
  );
};

export default Clock;

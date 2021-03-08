import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  background-color: #495057;
  padding: 14px;
  border-radius: 4px;

  box-shadow: rgba(20, 20, 20, 4%) 2px 7px 16px 0px,
    rgba(20, 20, 20, 0%) 0px 1px 5px 0px;

  & + & {
    margin-top: 14px;
  }
`;

interface CardProps {
  onClick?: () => void;
}

const Card: React.FC<CardProps> = (props) => {
  const { children, onClick } = props;

  return <CardWrapper onClick={onClick}>{children}</CardWrapper>;
};

export default Card;

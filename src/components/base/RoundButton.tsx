import React from 'react';
import styled, { css, CSSProperties } from 'styled-components';

interface ButtonProps {
  width?: string;
  height?: string;
  margin?: string;
  backgroundColor?: string;
  onHoverBackgroundColor?: string;
  onActiveBackgroundColor?: string;
  padding?: string;
  color?: string;
  flex?: boolean;
  shadow?: boolean;
}

const Button = styled.button<ButtonProps>`
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || '50px'};
  padding: ${(props) => props.padding || '14px 18px'};
  margin: ${(props) => props.margin || '0'};
  background-color: ${(props) => props.backgroundColor || '#495057'};
  color: ${(props) => props.color || 'inherit'};
  border-radius: 500px;
  font-size: 16px;

  transition: all 0.1s ease 0s;

  ${(props) =>
    props.shadow &&
    css`
      box-shadow: rgb(20, 20, 20, 30%) 2px 7px 16px 0px;
    `};

  ${(props) =>
    props.flex &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}

  &:hover {
    background-color: ${(props) => props.onHoverBackgroundColor || '#565f69'};
  }

  &:active {
    background-color: ${(props) => props.onActiveBackgroundColor || '#41454a'};
  }
`;

interface RoundButtonProps extends ButtonProps {
  onClick: (...args: any[]) => void;
  style?: CSSProperties;
}

const RoundButton: React.FC<RoundButtonProps> = (props) => {
  const { children } = props;

  return <Button {...props}>{children}</Button>;
};

export default RoundButton;

import React from 'react';
import styled, { css, CSSProperties } from 'styled-components';

interface ButtonProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  padding?: string;
  color?: string;
  flex?: boolean;
  shadow?: boolean;
}

const Button = styled.button<ButtonProps>`
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || '50px'};
  padding: ${(props) => props.padding || '14px 18px'};
  background-color: ${(props) => props.backgroundColor || '#495057'};
  color: ${(props) => props.color || 'inherit'};
  border-radius: 500px;
  font-size: 16px;

  ${(props) =>
    props.shadow &&
    css`
      box-shadow: rgb(20, 20, 20, 4%) 2px 7px 16px 0px,
        rgb(20, 20, 20, 0%) 0px 1px 5px 0px;
    `};

  ${(props) =>
    props.flex &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
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

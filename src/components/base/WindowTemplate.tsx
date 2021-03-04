import React from 'react';
import styled from 'styled-components';

interface WindowTemplateWrapperProps {
  padding?: string;
  backgroundColor?: string;
  width?: string;
}

const WindowTemplateWrapper = styled.div<WindowTemplateWrapperProps>`
  width: ${(props) => props.width || '100%'};
  padding: ${(props) => props.padding || '14px'};
  background-color: ${(props) => props.backgroundColor || '#343a40'};
`;

interface WindowTemplateProps extends WindowTemplateWrapperProps {}

const WindowTemplate: React.FC<WindowTemplateProps> = (props) => {
  const { children } = props;

  return <WindowTemplateWrapper {...props}>{children}</WindowTemplateWrapper>;
};

export default WindowTemplate;

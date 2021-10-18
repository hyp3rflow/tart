import React from 'react';
import GlobalStyle from 'components/base/GlobalStyle';

export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      {Story()}
    </>
  ),
];
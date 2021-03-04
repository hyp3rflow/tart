import React from 'react';
import GlobalStyle from 'components/base/GlobalStyle';
import WindowFrame from 'components/base/WindowFrame';
import Card from 'components/base/Card';
import WindowTemplate from 'components/base/WindowTemplate';
import MainContainer from 'containers/MainContainer';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <WindowFrame />
      <MainContainer />
    </>
  );
};

export default App;

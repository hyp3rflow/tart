import React from 'react';
import GlobalStyle from 'components/base/GlobalStyle';
import WindowFrame from 'components/base/WindowFrame';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <WindowFrame />
      <div>Hi</div>
    </>
  );
};

export default App;

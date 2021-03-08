import React from 'react';
import { Route, Switch } from 'react-router';
import GlobalStyle from 'components/base/GlobalStyle';
import WindowFrame from 'components/base/WindowFrame';
import MainPage from 'pages/MainPage';
import SettingsPage from 'pages/SettingsPage';
import WindowTemplate from 'components/base/WindowTemplate';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <WindowFrame />
      <WindowTemplate>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/settings" exact component={SettingsPage} />
        </Switch>
      </WindowTemplate>
    </>
  );
};

export default App;

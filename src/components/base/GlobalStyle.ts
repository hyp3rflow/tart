import { createGlobalStyle } from 'styled-components';

import { ColorPalette } from 'utils/ColorUtils';

export default createGlobalStyle`
  html {
    font-size: 16px;
    height: 100%;
  }

  body {
    background: ${ColorPalette.GRAY_BACKGROUND};
    min-height: 100%;
    color: ${ColorPalette.WHITE};

    margin: 0;
    padding: 0;
    font-family: "Inter", "Noto Sans KR", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    scrollbar-width: none;
  }

  textarea, button, button:active, input {
    resize: none;
    outline: none;
    border: none;

    font-family: "Inter", "Noto Sans KR", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }

  a, a:visited {
    color: inherit;
    text-decoration: none;
  }

  input, textarea {
    border: none;

    :focus {
      outline: none;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;

    ::selection {
      background: ${ColorPalette.GRAY_BACKGROUND};
      color: ${ColorPalette.WHITE};
    }
  }

  ::-webkit-scrollbar {
    background: none;
    
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border: solid 2px transparent;
    box-shadow: 0 0 10px 10px #2c2f33 inset;
  }

  ::-webkit-scrollbar:window-inactive {
    width: 0;
  }
  
  ::-webkit-scrollbar-thumb:window-inactive{
    background: none;
  }
`;

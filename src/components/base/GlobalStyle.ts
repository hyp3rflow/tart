import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html {
    font-size: 16px;
    height: 100%;
  }

  body {
    background: #f8f9fa;
    min-height: 100%;
    color: #222222;

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
      background: #222222;
      color: #f1f3f5;
    }
  }

  #root {
    overflow-y: auto;
  }
`;

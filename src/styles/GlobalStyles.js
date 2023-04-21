import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset};
  body {
    background-color: #1C1C27;
    font-family: 'NotoKR';
    font-weight: 300;
    box-sizing: border-box;
    color: #fff;
  }
  a {
    text-decoration:none;
    color:inherit;
  }
  button {
    padding:0;
    background: inherit;
    border:none;
    border-radius:0;
    box-shadow:none;
    overflow:visible;
    cursor: pointer;
  }
`;

export default GlobalStyles;

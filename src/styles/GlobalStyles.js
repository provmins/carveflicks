import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset};
  body {
    background: #11092f;
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
  input {
    font-family: 'NotoKR';
    font-weight: 300;
    &::-webkit-input-placeholder {
      color: #ccc;
    }
  }
  input[type=password] {
    letter-spacing: 3px;
    &::-webkit-input-placeholder {
      letter-spacing: 0;
    }
  }
`;

export default GlobalStyles;

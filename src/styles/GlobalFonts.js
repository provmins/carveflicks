import { createGlobalStyle } from 'styled-components';
import Bold from '../assets/fonts/NotoSansKR-Bold.otf';
import Medium from '../assets/fonts/NotoSansKR-Medium.otf';
import Light from '../assets/fonts/NotoSansKR-Light.otf';

// 전역으로 사용할 Font 스타일
const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'NotoKR';
    src: url(${Bold}) format('woff');
    font-weight: 1000;
  }
  @font-face {
    font-family: 'NotoKR';
    src: url(${Medium}) format('woff');
    font-weight: 500;
  }
  @font-face {
    font-family: 'NotoKR';
    src: url(${Light}) format('woff');
    font-weight: 300;
  }
`;

export default GlobalFonts;

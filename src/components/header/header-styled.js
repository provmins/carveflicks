import styled, { css } from 'styled-components';
import { imgClose } from '../../assets/images';

const HeaderContainer = styled.header`
  position: fixed;
  padding: 10px 20px;
  z-index: 2;
  width: 100vw;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.2);
`;

const HeaderMobile = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    height: 26px;
  }
`;

const PopupContainer = styled.div`
  position: absolute;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  transition: all 0.3s;

  ${props =>
    props.active
      ? css`
          top: 0;
          opacity: 1;
        `
      : css`
          top: 100%;
          opacity: 0;
        `}
`;

const PopupHeader = styled.div`
  padding: 20px;
  box-sizing: border-box;
  background: linear-gradient(to right, #0e0520 0, #11092f 30%, #11092f 80%, #0e0520 100%);
  p {
    font-size: 20px;
    font-weight: 500;
  }
  button {
    width: 22px;
    height: 22px;
    background: url(${imgClose}) no-repeat;
  }

  img {
    width: 22px;
  }

  div {
    /* margin-bottom: 20px; */
  }

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    ul {
      display: flex;
      li:not(:last-child) {
        margin-right: 15px;
      }
    }
  }

  & > div:last-child {
    margin-top: 35px;
    font-size: 14px;
    ul {
      display: flex;
      li {
        margin-right: 20px;
      }
      li:not(:last-child)::after {
        content: '';
        position: absolute;
        width: 1px;
        height: 12px;
        transform: translate(10px, 2px);
        background-color: #fff;
      }
    }
  }
`;

const PopupContent = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1f232b;
`;

export { HeaderContainer, HeaderMobile, PopupContainer, PopupHeader, PopupContent };

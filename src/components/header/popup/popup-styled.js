import styled, { css } from 'styled-components';
import { imgClose } from '../../../assets/images';

const PopupContainer = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #0e0520 0, #11092f 30%, #11092f 80%, #0e0520 100%);
  transition: all 0.3s;
  overflow-y: hidden;

  ${props =>
    props.active
      ? css`
          left: 0;
          opacity: 1;
          visibility: visible;
        `
      : css`
          left: -100%;
          opacity: 0;
          visibility: hidden;
        `}
`;

const PopupHeader = styled.div`
  padding: 20px;
  box-sizing: border-box;

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
`;

const PTopBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul {
    display: flex;
    li:not(:last-child) {
      margin-right: 15px;
    }
  }
`;

const PBottomBox = styled.div`
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
`;

const PopupContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  color: #1c1c27;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export { PopupContainer, PopupHeader, PopupContent, PTopBox, PBottomBox };

import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { imgClose } from '../../assets/images';

const TicketContainer = styled.div``;

const TicketPlace = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: #222030;
  box-sizing: border-box;
  font-size: 0.9rem;
  ${props =>
    !props.open &&
    css`
      display: none;
    `}

  ul {
    background: rgba(255, 255, 255, 0.2);
    li {
      padding: 15px 0 15px 20px;
      border-bottom: 1px solid #e0e0e0;
      box-sizing: border-box;
    }
    li.focus {
      background: #ffb43a;
      color: #222030;
      font-weight: 500;
    }
  }

  p {
    height: 4%;
    border-bottom: 1px solid #e0e0e0;
    text-align: center;
  }
`;

const TicketTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  font-size: 1.2rem;
`;

const TicketBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 80%;
  & > div {
    height: 96%;
  }
`;

const TicketRegion = styled.div`
  width: 40%;
  ul {
    border-right: 1px solid #e0e0e0;
    min-height: 100%;
  }
`;

const TicketZone = styled.div`
  width: 60%;
  ul {
    height: 100%;
    overflow-y: scroll;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 10%;
  /* padding: 20px; */
  font-size: 1rem;
  color: #fff;
`;

const ButtonClose = styled(Link)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 22px;
  height: 22px;
  background: url(${imgClose}) no-repeat;
`;

export {
  TicketContainer,
  TicketPlace,
  TicketTitle,
  TicketBox,
  TicketRegion,
  TicketZone,
  Button,
  ButtonClose
};

import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  padding: 20px;
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

export { HeaderContainer, HeaderMobile };

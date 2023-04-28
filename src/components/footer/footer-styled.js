import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  margin-top: 10px;
  padding: 20px;
  background-color: #1c1c27;
  box-sizing: border-box;
`;

const FooterContent = styled.div`
  font-size: 0.9rem;
  img {
    width: 8rem;
  }

  ul {
    margin-top: 15px;
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

const BusinessInfo = styled.div`
  p:first-child {
    margin: 15px 0;
    font-size: 0.9rem;
  }
  p:not(:first-child) {
    font-size: 0.7rem;
    margin-bottom: 0.5rem;
  }
`;

export { FooterContainer, FooterContent, BusinessInfo };

import styled from 'styled-components';

const BottomContents = styled.div`
  padding: 20px;
  font-size: 0.9rem;
  ul {
    li {
      display: flex;
    }
    li:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  span {
    display: inline-block;
    min-width: 3rem;
    color: #ddd;
  }
`;

export { BottomContents };

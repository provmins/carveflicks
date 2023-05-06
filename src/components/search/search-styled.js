import styled from 'styled-components';

const SearchContainer = styled.div`
  /* padding: 20px; */
`;

const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid #413e5c;
  box-sizing: border-box;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #413e5c;
    padding: 0 10px;
    margin-left: 10px;
    border-radius: 0.5rem;
    box-sizing: border-box;
    input {
      width: 100%;
      border: none;
      outline: none;
      font-size: 16px;
      padding: 10px 15px;
      color: #ffb43a;
      background: #413e5c;
    }

    & > img {
      width: 15px;
    }
  }

  img {
    width: 30px;
  }
`;

const SearchContent = styled.div`
  padding: 20px;
`;

const SearchMovies = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 300px;

  & > div {
    width: 48%;
    margin-bottom: 10%;

    p {
      margin-top: 0.3rem;
      line-height: 1.3rem;
      font-size: 0.9rem;
    }

    img {
      width: 100%;
      border-radius: 5px;
    }
  }

  & > div:nth-child(2n) {
    margin-left: 4%;
  }
`;

const PopularMovies = styled.div`
  p {
    margin-bottom: 10px;
    color: #ffb43a;
    font-weight: 500;
  }

  span {
    margin-right: 0.8rem;
    font-weight: 500;
  }

  & > div {
    padding: 12px 5px;
  }
`;

export { SearchContainer, SearchHeader, SearchContent, SearchMovies, PopularMovies };

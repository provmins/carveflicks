import styled, { css } from 'styled-components';
import { imgArrowDown, imgArrowUp } from '../../assets/images';

const MovieDetailContainer = styled.div``;

const TopContent = styled.div``;

const TopPoster = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 0;
  background-size: cover;
  padding-top: calc(1.5 * 100%);
  ${props => css`
    background-image: linear-gradient(90deg, rgba(34, 32, 48, 0.7) 0%, rgba(34, 32, 48, 0) 0%),
      linear-gradient(rgba(34, 32, 48, 0) 20%, rgba(34, 32, 48, 0.9999999) 90%),
      linear-gradient(rgba(34, 32, 48, 0.7) 10%, rgba(34, 32, 48, 0) 20%), url(${props.image});
  `}
`;

const TopTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  padding-top: 100%;
  margin-bottom: 2%;
  p:nth-child(2) {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 15px;
  }
  p:not(:nth-child(2)) {
    font-size: 0.8rem;
    margin-bottom: 10px;
  }
`;

const TextGenres = styled.div`
  margin-bottom: 10px;
  & > div {
    display: inline-block;
    padding: 2px 5px;
    margin-left: 0.2rem;
    font-size: 0.8rem;
    border: 1px solid #ffb43a;
    border-radius: 10px;
  }
`;

const TextBox = styled.p`
  display: flex;
  align-items: center;
  & > span {
    display: flex;
  }
  & > span:not(:last-child) {
    margin-right: 10px;
  }

  ${({ title }) =>
    title &&
    css`
      color: #ccc;
      padding-bottom: 10px;
    `}
`;

const TextIcon = styled.span`
  display: block;
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 0.2rem;
  background-size: cover;
  ${({ image }) =>
    css`
      background-image: url(${image});
    `}
`;

const DiscriptBox = styled.div`
  padding: 20px;
  background: #222030;
  & > div {
    max-height: 5rem;
    overflow: hidden;
    color: #ddd;
    font-size: 0.9rem;
    white-space: pre-wrap;
    line-height: 1.2rem;
    box-sizing: border-box;
    ${({ open }) =>
      open &&
      css`
        max-height: initial;
        overflow: initial;
      `}
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    margin-top: 20px;
    padding: 15px;
    color: #fff;
    border: 1px solid #fff;
    span {
      position: absolute;
      right: 0.5rem;
      width: 1rem;
      height: 1rem;
      margin-right: 0.2rem;
      background-size: cover;
      ${({ open }) =>
        open
          ? css`
              background-image: url(${imgArrowUp});
            `
          : css`
              background-image: url(${imgArrowDown});
            `}
    }
  }
`;

const ButtomContent = styled.div`
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

const StillCutBox = styled.div`
  padding: 20px;
  margin-bottom: 2rem;
  p {
    font-weight: 500;
    margin-bottom: 0.9rem;
  }
`;

const TrailerBox = styled.div`
  padding: 20px;
  height: 18rem;
  margin-bottom: 2rem;
  p {
    margin-bottom: 10px;
  }
`;

export {
  MovieDetailContainer,
  TopContent,
  TopPoster,
  TopTitle,
  TextGenres,
  TextBox,
  TextIcon,
  DiscriptBox,
  ButtomContent,
  StillCutBox,
  TrailerBox
};

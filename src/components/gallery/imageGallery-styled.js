import styled, { css } from 'styled-components';
import { imgArrowDown, imgArrowUp } from '../../assets/images';

const GalleryContainer = styled.div`
  & > div {
    display: flex;
    flex-wrap: wrap;
  }
`;

const GalleryBox = styled.div`
  /* max-height: 20rem;
  overflow: hidden;
  ${({ open }) =>
    open &&
    css`
      max-height: initial;
      overflow: initial;
    `} */
`;

const GalleryImage = styled.div`
  flex-basis: 48%;
  margin-bottom: 4%;
  transition: all 0.3s;
  &:nth-child(2n) {
    margin-left: 4%;
  }
  img {
    width: 100%;
    border-radius: 5%;
  }
  ${({ open }) =>
    !open
      ? css`
          &:nth-child(n + 5) {
            opacity: 0;
            height: 0;
            margin-bottom: 0;
            img {
              width: 0%;
            }
          }
        `
      : css`
          &:nth-child(n + 5) {
            opacity: 1;
            img {
              width: 100%;
            }
          }
        `}
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
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
`;

export { GalleryContainer, GalleryBox, GalleryImage, Button };

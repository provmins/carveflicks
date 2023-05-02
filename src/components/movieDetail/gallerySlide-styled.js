import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { imgClose } from '../../assets/images';

const GalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: -1;
  width: 100%;
  height: 0;
  background: rgba(0, 0, 0, 0.9);
  opacity: 0;
  transition: all 0.2s;
  ${({ active }) =>
    active &&
    css`
      opacity: 1;
      height: 100vh;
      z-index: 10;
    `}

  button {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 22px;
    height: 22px;
    background: url(${imgClose}) no-repeat;
  }

  .swiper-pagination-progressbar-fill {
    --swiper-theme-color: #ffb43a;
  }
`;

const SliderStyled = styled(Swiper)``;
const SlideList = styled(SwiperSlide)`
  img {
    width: 100%;
  }
`;

export { GalleryContainer, SliderStyled, SlideList };

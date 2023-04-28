import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { imgCrown } from '../../assets/images';

const SliderContainer = styled.div`
  padding: 20px 0 20px 20px;
  & > p {
    margin-bottom: 20px;
    font-size: 1.25rem;
    font-weight: 500;
  }
`;

const SliderStyled = styled(Swiper)``;

const SlideImage = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  background-size: cover;
  padding-top: calc(1.5 * 100%);
  ${props => css`
    background-image: linear-gradient(90deg, rgba(18, 18, 18, 0.7) 0%, rgba(18, 18, 18, 0) 49.03%),
      linear-gradient(rgba(18, 18, 18, 0) 50%, rgba(18, 18, 18, 0.7) 100%),
      linear-gradient(rgba(18, 18, 18, 0.7) 0%, rgba(18, 18, 18, 0) 32.71%), url(${props.image});
  `}
  border-radius: 5px;

  & > div {
    position: absolute;
    bottom: 0.5rem;
    width: 100%;
    font-size: 0.9rem;
    text-align: center;
  }
`;

const SlideList = styled(SwiperSlide)``;

const SlideContent = styled.div`
  position: relative;
  margin-top: 10px;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 0.3rem;
  }

  span {
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    margin-right: 0.2rem;
    background-size: cover;
    background-image: url(${imgCrown});
  }
`;

const LinkStyle = styled(Link)`
  display: block;
  margin-top: 0.7rem;
  text-align: center;
  padding: 0.4rem 0.7rem;
  color: #262328;
  background: #ffb43a;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 5px;
  box-sizing: border-box;
`;

export { SliderContainer, SlideImage, SliderStyled, SlideList, SlideContent, LinkStyle };

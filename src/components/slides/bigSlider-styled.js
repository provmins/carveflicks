import styled, { css } from 'styled-components';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const SliderStyled = styled(Slider)`
  .slick-dots {
    bottom: 0;
    li {
      width: 0px;
      height: 0px;
      button::before {
        color: #fff;
        transition: all 0.3s;
        content: '';
        width: 4px;
        height: 4px;
        background-color: #fff;
      }
      &.slick-active {
        button:before {
          background-color: #ebcf71;
        }
      }
    }
  }

  .slick-current {
    a {
      display: block;
      position: absolute;
      top: 0;
      z-index: 5;
      width: 100%;
      height: 100%;
    }
  }
`;

const Slide = styled.div`
  width: 100%;
  height: 0;
  background-size: cover;
  padding-top: calc(1.5 * 100%);
  ${props => css`
    background-image: linear-gradient(90deg, rgba(18, 18, 18, 0.7) 0%, rgba(18, 18, 18, 0) 49.03%),
      linear-gradient(rgba(18, 18, 18, 0) 50%, rgba(18, 18, 18, 0.7) 100%),
      linear-gradient(rgba(18, 18, 18, 0.7) 0%, rgba(18, 18, 18, 0) 32.71%), url(${props.image});
  `}
`;

const LinkStyle = styled(Link)``;

export { SliderStyled, Slide, LinkStyle };

import styled, { css } from 'styled-components';
import Slider from 'react-slick';

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
`;

const SlideImage = styled.div`
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

export { SliderStyled, SlideImage };

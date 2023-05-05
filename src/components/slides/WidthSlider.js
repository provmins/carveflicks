import React from 'react';
import {
  SliderContainer,
  SliderStyled,
  SlideList,
  SlideImage,
  SlideContent
} from './widthSlider-styled';
import { Link } from 'react-router-dom';
import { dayDiff } from '../../utils/date';

import { FreeMode, Pagination } from 'swiper';
import 'swiper/css';

const WidthSlider = ({ title, movies, reserve }) => {
  const IMAGE_URL = process.env.REACT_APP_TMDB_IMAGE_URL;

  return (
    <SliderContainer>
      <p>{title}</p>
      <SliderStyled
        slidesPerView={2.2}
        spaceBetween={20}
        freeMode={true}
        modules={[FreeMode, Pagination]}
      >
        {movies.map(slide => (
          <SlideList key={slide.id}>
            <Link to={`/movie/detail/${slide.id}`}>
              <SlideImage image={IMAGE_URL + slide.poster_path}>
                <div>{`${slide.release_date} 개봉`}</div>
                {reserve || <div>{`D${dayDiff(slide.release_date)}`}</div>}
              </SlideImage>
              <SlideContent>
                <p>{slide.title}</p>
                <p>
                  <span />
                  {slide.popularity.toFixed(2)}
                </p>
              </SlideContent>
            </Link>
          </SlideList>
        ))}
      </SliderStyled>
    </SliderContainer>
  );
};

export default WidthSlider;

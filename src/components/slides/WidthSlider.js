import React, { useEffect, useState } from 'react';
import {
  SliderContainer,
  SliderStyled,
  SlideList,
  SlideImage,
  SlideContent,
  LinkStyle
} from './widthSlider-styled';
import { Link } from 'react-router-dom';
import { FreeMode, Pagination } from 'swiper';
import 'swiper/css';

const WidthSlider = ({ movies }) => {
  const [slides, setSlides] = useState([]);
  const IMAGE_URL = process.env.REACT_APP_TMDB_IMAGE_URL;

  useEffect(() => {
    setSlides(movies);
  }, [movies]);

  return (
    <SliderContainer>
      <p>최신 영화</p>
      <SliderStyled
        slidesPerView={1.7}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true
        }}
        modules={[FreeMode, Pagination]}
      >
        {slides.map(slide => (
          <SlideList key={slide.id}>
            <Link to={`/movie/detail/${slide.id}`}>
              <SlideImage image={IMAGE_URL + slide.poster_path}>
                <div>{`${slide.release_date} 개봉`}</div>
              </SlideImage>
              <SlideContent>
                <p>{slide.title}</p>
                <p>
                  <span />
                  {slide.popularity.toFixed(2)}
                </p>
              </SlideContent>
            </Link>
            <LinkStyle to="/">예매하기</LinkStyle>
          </SlideList>
        ))}
      </SliderStyled>
    </SliderContainer>
  );
};

export default WidthSlider;

import React, { useEffect, useState } from 'react';
import { SliderStyled, Slide } from './bigSlider-styled';
import { Link } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BigSlider = ({ movies }) => {
  const [slides, setSlides] = useState([]);
  const IMAGE_URL = process.env.REACT_APP_TMDB_IMAGE_URL;
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 5000
  };

  useEffect(() => {
    setSlides(movies);
  }, [movies]);

  return (
    <SliderStyled {...settings}>
      {slides.map(slide => (
        <Slide image={IMAGE_URL + slide.poster_path} key={slide.id}>
          <Link to={`/movie/detail/${slide.id}`} />
        </Slide>
      ))}
    </SliderStyled>
  );
};

export default BigSlider;

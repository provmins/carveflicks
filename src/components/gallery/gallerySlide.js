import React from 'react';
import { FreeMode, Pagination } from 'swiper';
import 'swiper/css';

const WidthSlider = ({ images }) => {
  const IMAGE_URL = process.env.REACT_APP_TMDB_IMAGE_URL;

  return (
    <div>
      <p>{title}</p>
      <div
        slidesPerView={2.2}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true
        }}
        modules={[FreeMode, Pagination]}
      >
        {movies.map(slide => (
          <div key={slide.id}></div>
        ))}
      </div>
    </div>
  );
};

export default WidthSlider;

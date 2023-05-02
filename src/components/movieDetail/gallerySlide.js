import React, { useEffect, useRef } from 'react';
import { Pagination, Navigation, EffectFade } from 'swiper';
import { SlideList, SliderStyled } from './gallerySlide-styled';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { GalleryContainer } from './gallerySlide-styled';
import { useDispatch, useSelector } from 'react-redux';
import { isSlideOpen } from '../../store/reducer/popupSlice';

const GallerySlide = ({ images }) => {
  const IMAGE_URL = process.env.REACT_APP_TMDB_IMAGE_URL;
  const open = useSelector(state => state.popup.slide.open);
  const select = useSelector(state => state.popup.slide.select);
  const dispatch = useDispatch();
  const swiper = useRef(null);

  useEffect(() => {
    swiper.current.swiper.slideToLoop(select);
  }, [select]);

  return (
    <GalleryContainer active={open}>
      <button onClick={() => dispatch(isSlideOpen({ number: select }))} />
      <SliderStyled
        slidesPerView={1}
        loop={true}
        effect={'fade'}
        pagination={{
          type: 'progressbar'
        }}
        navigation={false}
        modules={[Pagination, Navigation, EffectFade]}
        className="mySwiper"
        ref={swiper}
      >
        {images.map((item, idx) => (
          <SlideList key={idx}>
            <img src={IMAGE_URL + item.file_path} alt="" />
          </SlideList>
        ))}
      </SliderStyled>
    </GalleryContainer>
  );
};

export default GallerySlide;

import React, { useEffect, useState } from 'react';
import { MainContainer } from './main-styled';
import { getRelease, getReserve } from '../../apis/tmdbApi';
import BigSlider from '../../components/slides/BigSlider';
import WidthSlider from '../../components/slides/WidthSlider';
import Footer from '../../components/footer/Footer';
import { useDispatch } from 'react-redux';
import { loading, loaded } from '../../store/reducer/loaderSlice';

const Main = () => {
  const [popular, setPopular] = useState([]);
  const [latest, setLatest] = useState([]);
  const [reserve, setReserve] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const setMovies = async () => {
      dispatch(loading());
      try {
        const releaseData = await getRelease();
        const reserveData = await getReserve();
        setPopular(releaseData.sort((a, b) => b.popularity - a.popularity).slice(0, 10));
        setLatest(
          releaseData
            .sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
            .slice(0, 15)
        );
        setReserve(
          reserveData
            .sort((a, b) => new Date(a.release_date) - new Date(b.release_date))
            .slice(0, 15)
        );
        dispatch(loaded());
      } catch (err) {}
    };
    setMovies();
  }, []);

  return (
    <MainContainer>
      <BigSlider movies={popular} />
      <WidthSlider title={'최신영화'} movies={latest} reserve={true} />
      <WidthSlider title={'개봉예정'} movies={reserve} reserve={false} />
      <Footer />
    </MainContainer>
  );
};

export default Main;

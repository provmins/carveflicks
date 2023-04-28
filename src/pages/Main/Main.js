import React, { useEffect, useState } from 'react';
import { MainContainer } from './main-styled';
import { getRelease, getReserve } from '../../apis/tmdbApi';
import BigSlider from '../../components/slides/BigSlider';
import WidthSlider from '../../components/slides/WidthSlider';
import Footer from '../../components/footer/Footer';

const Main = () => {
  const [popular, setPopular] = useState([]);
  const [latest, setLatest] = useState([]);
  const [reserve, setReserve] = useState([]);

  useEffect(() => {
    getRelease().then(movie => {
      setPopular(movie.sort((a, b) => b.popularity - a.popularity).slice(0, 10));
      setLatest(
        movie.sort((a, b) => new Date(b.release_date) - new Date(a.release_date)).slice(0, 15)
      );
    });
    getReserve().then(movie =>
      setReserve(
        movie.sort((a, b) => new Date(a.release_date) - new Date(b.release_date)).slice(0, 15)
      )
    );
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

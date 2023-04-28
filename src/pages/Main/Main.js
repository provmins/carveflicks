import React, { useEffect, useState } from 'react';
import { MainContainer } from './main-styled';
import BigSlider from '../../components/slides/BigSlider';
import { getRelease } from '../../apis/tmdbApi';
import WidthSlider from '../../components/slides/WidthSlider';

const Main = () => {
  const [popularMoives, setpopularMoives] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);

  useEffect(() => {
    getRelease().then(movie => {
      setpopularMoives(movie.sort((a, b) => b.popularity - a.popularity).slice(0, 10));
      setLatestMovies(
        movie.sort((a, b) => new Date(b.release_date) - new Date(a.release_date)).slice(0, 15)
      );
    });
  }, []);

  return (
    <MainContainer>
      <BigSlider movies={popularMoives} />
      <WidthSlider movies={latestMovies} />
    </MainContainer>
  );
};

export default Main;

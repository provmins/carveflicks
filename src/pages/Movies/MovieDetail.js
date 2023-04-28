import React, { useEffect, useState } from 'react';
import { MovieDetailContainer } from './movieDetail-styled';
import { useParams } from 'react-router-dom';
import { getMoive } from '../../apis/tmdbApi';

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMoive(id).then(movie => setMovie(movie));
    console.log(movie);
  }, []);

  return (
    <MovieDetailContainer>
      <div></div>
    </MovieDetailContainer>
  );
};

export default MovieDetail;

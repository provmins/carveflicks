import React, { useEffect, useState } from 'react';
import { MovieDetailContainer, StillCutBox, TrailerBox } from './movieDetail-styled';
import { useParams } from 'react-router-dom';
import { getPoster, getMoive, getCredit, getVideos } from '../../apis/tmdbApi';
import { useDispatch } from 'react-redux';
import { loading, loaded } from '../../store/reducer/loaderSlice';
import ReactPlayer from 'react-player/youtube';

import TopContent from '../../components/movieDetail/TopContent';
import BottomContent from '../../components/movieDetail/BottomContent';
import PosterGallery from '../../components/movieDetail/ImageGallery';
import GallerySlide from '../../components/movieDetail/gallerySlide';

const MovieDetail = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState();
  const [posterList, setPosterList] = useState();
  const [credit, setCredit] = useState([]);
  const [video, setVideo] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loading());
    const setMovies = async () => {
      try {
        const movieData = await getMoive(id);
        const posterData = await getPoster(id);
        const creditData = await getCredit(id);
        const videoData = await getVideos(id);
        setMovieInfo(movieData);
        setPosterList(posterData.posters);
        setCredit(creditData);
        setVideo(videoData);
        dispatch(loaded());
      } catch (err) {}
    };
    setMovies();
  }, [dispatch, id]);

  return (
    <MovieDetailContainer>
      {movieInfo && (
        <>
          <TopContent posters={posterList} movies={movieInfo} />
          <BottomContent movies={movieInfo} credit={credit} />

          {video !== undefined && (
            <TrailerBox>
              <p>예고편</p>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${video.key}`}
                width="100%"
                height="100%"
                controls={true}
                muted={true}
              />
            </TrailerBox>
          )}

          <StillCutBox>
            <p>스틸컷</p>
            <PosterGallery images={posterList} />
          </StillCutBox>
          <GallerySlide images={posterList} />
        </>
      )}
    </MovieDetailContainer>
  );
};

export default MovieDetail;

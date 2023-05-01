import React, { useEffect, useState } from 'react';
import {
  MovieDetailContainer,
  TextBox,
  TextIcon,
  TopContent,
  TopPoster,
  TextGenres,
  TopTitle,
  DiscriptBox,
  ButtomContent,
  StillCutBox,
  TrailerBox
} from './movieDetail-styled';
import { useParams } from 'react-router-dom';
import { getPoster, getMoive, getCredit, getVideos } from '../../apis/tmdbApi';
import { useDispatch } from 'react-redux';
import { loading, loaded } from '../../store/reducer/loaderSlice';
import { runningTime } from '../../utils/date';

import { imgCrown, imgTicket, imgWatch } from '../../assets/images';

import PosterGallery from '../../components/gallery/ImageGallery';

import ReactPlayer from 'react-player/youtube';

const MovieDetail = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState({ genres: [] });
  const [posterList, setPosterList] = useState([{ file_path: '' }, { file_path: '' }]);
  const [runTime, setRunTime] = useState({});
  const [overview, setOverview] = useState('');
  const [credit, setCredit] = useState([]);
  const [video, setVideo] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const IMAGE_URL = process.env.REACT_APP_TMDB_IMAGE_URL;
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
        setRunTime(runningTime(movieData.runtime));
        setOverview(movieData.overview.replace(/\. /g, '.\n\n'));
        dispatch(loaded());
      } catch (err) {}
    };
    setMovies();
  }, [dispatch, id]);

  return (
    <MovieDetailContainer>
      <TopContent>
        <TopPoster
          image={
            IMAGE_URL +
            (posterList.length > 1
              ? posterList[1].file_path
              : posterList.length === 0
              ? ''
              : posterList[0].file_path)
          }
        />
        <TopTitle>
          <TextGenres>
            {movieInfo.genres.map(({ id, name }) => (
              <div key={id}>#{name}</div>
            ))}
          </TextGenres>
          <TextBox>{movieInfo.title}</TextBox>
          <TextBox title={1}>{movieInfo.original_title}</TextBox>
          <TextBox>
            <TextIcon image={imgCrown} />
            {movieInfo.popularity}
          </TextBox>
          <TextBox>
            <span>
              <TextIcon image={imgWatch} />
              {runTime.hour}시간 {runTime.minute}분
            </span>
            <span>
              <TextIcon image={imgTicket} />
              {movieInfo.release_date}
            </span>
          </TextBox>
        </TopTitle>
        <DiscriptBox open={isOpen}>
          <div>
            <p>{overview}</p>
            <br />
            <p>{movieInfo.tagline}</p>
          </div>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '닫기' : '더보기'}
            <span />
          </button>
        </DiscriptBox>
      </TopContent>
      <ButtomContent>
        <div>
          <ul>
            <li>
              <span>개봉</span>
              {movieInfo.release_date}
            </li>
            <li>
              <span>장르</span>
              {movieInfo.genres.map(({ name }) => name + ' ')}
            </li>
            <li>
              <span>출연</span>
              {credit.map(({ name }, idx) => {
                if (idx === credit.length - 1) return name;
                return name + ', ';
              })}
            </li>
            {movieInfo.budget > 0 && (
              <li>
                <span>제작비</span>
                {movieInfo.budget}
              </li>
            )}
            {movieInfo.revenue > 0 && (
              <li>
                <span>수익</span>
                {movieInfo.revenue}
              </li>
            )}
          </ul>
        </div>
      </ButtomContent>
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
    </MovieDetailContainer>
  );
};

export default MovieDetail;

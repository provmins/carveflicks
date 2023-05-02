import { useEffect, useState } from 'react';
import {
  TopContents,
  DiscriptBox,
  TextBox,
  TextGenres,
  TextIcon,
  TopPoster,
  TopTitle
} from './topContent-styled';

import { imgCrown, imgTicket, imgWatch } from '../../assets/images';
import { runningTime } from '../../utils/date';

const TopContent = ({ posters, movies }) => {
  const [overview, setOverview] = useState('');
  const [runTime, setRunTime] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const IMAGE_URL = process.env.REACT_APP_TMDB_IMAGE_URL;

  useEffect(() => {
    if (movies.length !== 0) {
      setRunTime(runningTime(movies.runtime));
      setOverview(movies.overview.replace(/\. /g, '.\n\n'));
    }
  }, [posters, movies]);

  return (
    <TopContents>
      {posters.length !== 0 && (
        <TopPoster
          image={
            IMAGE_URL +
            (posters.length > 1
              ? posters[1].file_path
              : posters.length === 0
              ? ''
              : posters[0].file_path)
          }
        />
      )}
      {movies.length !== 0 && (
        <>
          <TopTitle>
            <TextGenres>
              {movies.genres.map(({ id, name }) => (
                <div key={id}>#{name}</div>
              ))}
            </TextGenres>
            <TextBox>{movies.title}</TextBox>
            <TextBox title={1}>{movies.original_title}</TextBox>
            <TextBox>
              <TextIcon image={imgCrown} />
              {movies.popularity}
            </TextBox>
            <TextBox>
              <span>
                <TextIcon image={imgWatch} />
                {runTime.hour}시간 {runTime.minute}분
              </span>
              <span>
                <TextIcon image={imgTicket} />
                {movies.release_date}
              </span>
            </TextBox>
          </TopTitle>
          <DiscriptBox open={isOpen}>
            <div>
              <p>{overview}</p>
              <br />
              <p>{movies.tagline}</p>
            </div>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? '닫기' : '더보기'}
              <span />
            </button>
          </DiscriptBox>
        </>
      )}
    </TopContents>
  );
};

export default TopContent;

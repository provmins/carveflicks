import React, { useEffect, useState } from 'react';
import {
  PopularMovies,
  SearchContainer,
  SearchContent,
  SearchHeader,
  SearchMovies
} from './search-styled';
import { imgArrowLeft, imgSearch } from '../../assets/images';
import { Link } from 'react-router-dom';
import { getSearch, getTopRate } from '../../apis/tmdbApi';

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const [keywordItem, setKeywordItem] = useState();
  const [topItem, setTopItem] = useState();

  const IMAGE_URL = process.env.REACT_APP_TMDB_IMAGE_URL;

  const onChangeData = e => {
    setKeyword(e.target.value);
  };

  const updateData = async keyword => {
    const data = await getSearch(keyword);
    setKeywordItem(data);
  };

  const topReteData = async () => {
    const data = await getTopRate();
    setTopItem(data);
  };

  useEffect(() => {}, []);

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (keyword) updateData(keyword);
      if (!keyword) {
        topReteData();
        setKeywordItem('');
      }
    }, 200);
    return () => {
      clearTimeout(debounce);
    };
  }, [keyword]);

  return (
    <SearchContainer>
      <SearchHeader>
        <Link to="/">
          <img src={imgArrowLeft} alt="" />
        </Link>
        <div>
          <img src={imgSearch} alt="" />
          <input type="text" onChange={onChangeData} />
        </div>
      </SearchHeader>

      <SearchContent>
        {keywordItem ? (
          <SearchMovies>
            {keywordItem.results.map(
              item =>
                item.backdrop_path !== null && (
                  <div key={item.id}>
                    <Link to={`/movie/detail/${item.id}`}>
                      <div>
                        <img src={IMAGE_URL + item.backdrop_path} alt="" />
                        <p>{item.title}</p>
                      </div>
                    </Link>
                  </div>
                )
            )}
          </SearchMovies>
        ) : (
          topItem && (
            <PopularMovies>
              <p>가장 인기있는 영화</p>
              {topItem.map((item, idx) => (
                <div key={item.id}>
                  <Link to={`/movie/detail/${item.id}`}>
                    <div>
                      <span>{idx + 1}</span>
                      {item.title}
                    </div>
                  </Link>
                </div>
              ))}
            </PopularMovies>
          )
        )}
      </SearchContent>
    </SearchContainer>
  );
};
export default Search;

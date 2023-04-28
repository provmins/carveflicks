import axios from 'axios';

import { dayDiff } from '../utils/date';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const API_URL = process.env.REACT_APP_TMDB_API_URL;

export const getMoive = async movie => {
  try {
    const response = await axios.get(`${API_URL}/search/movie?${API_KEY}&query=${movie}`);
    const data = response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getRelease = async () => {
  try {
    let response = await axios.get(`${API_URL}/movie/now_playing?${API_KEY}&language=ko&region=KR`);
    const data = response.data.results;
    const totalPage = response.data.total_pages;
    for (let i = 2; i <= totalPage; i++) {
      response = await axios.get(
        `${API_URL}/movie/now_playing?${API_KEY}&language=ko&region=KR&page=${i}`
      );
      response.data.results.forEach(movie => data.push(movie));
    }

    return data.filter(data => dayDiff(data.release_date) > 0);
  } catch (err) {
    console.log(err);
  }
};

export const getReserve = async () => {
  try {
    const response = await axios.get(`${API_URL}/movie/upcoming?${API_KEY}&language=ko&region=KR`);
    const data = response.data.results;
    return data;
  } catch (err) {
    console.log(err);
  }
};

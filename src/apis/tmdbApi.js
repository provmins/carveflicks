import axios from 'axios';

import { dayDiff } from '../utils/date';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const API_URL = process.env.REACT_APP_TMDB_API_URL;

export const getMoive = async movie => {
  try {
    const response = await axios.get(`${API_URL}/movie/${movie}?${API_KEY}&language=ko`);
    const data = response.data;
    return data;
  } catch (err) {}
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
  } catch (err) {}
};

export const getReserve = async () => {
  try {
    const response = await axios.get(`${API_URL}/movie/upcoming?${API_KEY}&language=ko&region=KR`);
    const data = response.data.results;
    return data.filter(data => dayDiff(data.release_date) < 0);
  } catch (err) {}
};

export const getPoster = async movie => {
  try {
    const response = await axios.get(
      `${API_URL}/movie/${movie}/images?${API_KEY}&language=ko&region=KR`
    );
    const data = response.data;
    return data;
  } catch (err) {}
};

export const getVideos = async movie => {
  try {
    const response = await axios.get(`${API_URL}/movie/${movie}/videos?${API_KEY}&language=ko`);
    const data = response.data;
    return data.results[0];
  } catch (err) {}
};

export const getCredit = async movie => {
  try {
    const response = await axios.get(`${API_URL}/movie/${movie}/credits?${API_KEY}&language=ko`);
    const data = response.data;
    return data.cast.slice(0, 10);
  } catch (err) {}
};

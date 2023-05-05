import { Main, AccountPage, MovieDetail } from '../pages';

// Router 정보
const ROUTER = {
  MAIN: {
    path: '/',
    element: Main
  },
  AUTH_ACCOUNT: {
    path: '/auth/:flag',
    element: AccountPage
  },
  MOVIE_DETAIL: {
    path: '/movie/detail/:id',
    element: MovieDetail
  }
};

export const ROUTER_VALUE = Object.values(ROUTER);

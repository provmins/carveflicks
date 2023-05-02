import { Main, AccountPage, MovieDetail, Ticket } from '../pages';

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
  },
  TICKET: {
    path: '/ticket/:id',
    element: Ticket
  }
};

export const ROUTER_VALUE = Object.values(ROUTER);

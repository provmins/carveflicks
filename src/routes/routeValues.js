import { Main, AccountPage } from '../pages';

// Router 정보
const ROUTER = {
  MAIN: {
    path: '/',
    element: Main
  },
  AUTH_ACCOUNT: {
    path: '/auth/:flag',
    element: AccountPage
  }
};

export const ROUTER_VALUE = Object.values(ROUTER);

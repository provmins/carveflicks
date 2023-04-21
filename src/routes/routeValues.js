import { Main, Login } from '../pages';

// Router 정보
const ROUTER = {
  MAIN: {
    path: '/',
    element: Main
  },
  AUTH_LOGIN: {
    path: '/auth/login',
    element: Login
  }
};

export const ROUTER_VALUE = Object.values(ROUTER);

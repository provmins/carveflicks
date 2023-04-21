import { Route, Routes } from 'react-router-dom';
import { ROUTER_VALUE } from './routeValues';

export const ROUTES = () => {
  return (
    <Routes>
      {ROUTER_VALUE.map((route, index) => (
        <Route exact path={route.path} element={<route.element />} key={index} />
      ))}
    </Routes>
  );
};

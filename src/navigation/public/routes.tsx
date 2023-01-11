import {
  createBrowserRouter,
  RouteObject
} from 'react-router-dom';

import Home from 'pages/Home';

const mappedRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Home>Homepage</Home>,
  }
];

export const publicRouter = createBrowserRouter(mappedRoutes);
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "pages/Home";
import Login from "pages/Login";
import Dashboard from "pages/Dashboard";

const NotFound = () => {
  return <div><h1>Page not found</h1></div>
}

const PrivatePage = () => {
  return (
    <div style={{ backgroundColor: 'red' }}>
      <h1>This is a private page inside of dashboard</h1>
    </div>
  );
}

export const mappedRoutes = createRoutesFromElements(
  <>
    <Route path="/" element={<Home />} />
    <Route path="login" element={<Login />} />
    <Route path='dashboard' element={<Dashboard />}>
      <Route path='' element={<PrivatePage />} />
    </Route>
    <Route path='*' element={<NotFound />} />
  </>
);

export const publicRouter = createBrowserRouter(mappedRoutes);

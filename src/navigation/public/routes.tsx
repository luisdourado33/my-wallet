import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "pages/Home";
import Login from "pages/Login";

export const mappedRoutes = createRoutesFromElements(
  <>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
  </>
);

export const publicRouter = createBrowserRouter(mappedRoutes);

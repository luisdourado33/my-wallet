import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import PrivateRoute from "navigation/PrivateRoute";

import Home from "pages/Home";
import Login from "pages/Login";
import Dashboard from "pages/Dashboard";

export const mappedRoutes = createRoutesFromElements(
  <>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/dash" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
  </>
);

export const publicRouter = createBrowserRouter(mappedRoutes);

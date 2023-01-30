import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "pages/Home";
import Login from "pages/Login";
import Dashboard from "pages/Dashboard";
import PrivateRoute from "navigation/PrivateRoute";
import DashboardHome from "components/templates/dashboard/DashboardHome";

const NotFound = () => {
  return (
    <div>
      <h1>Page not found</h1>
    </div>
  );
};

export const mappedRoutes = createRoutesFromElements(
  <>
    <Route path="/" element={<Home />} />
    <Route path="login" element={<Login />} />
    <Route
      path="dashboard"
      element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }
    >
      <Route path="" element={<DashboardHome />} />
      <Route path="transactions" element={<DashboardHome />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </>
);

export const publicRouter = createBrowserRouter(mappedRoutes);

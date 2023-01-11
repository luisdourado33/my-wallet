import React from 'react';
import { Route, Routes } from 'react-router-dom';

const HomeElement = () => {
  return (
    <div>Home</div>
  );
};

const PublicNavigation = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeElement />} />
    </Routes>
  );
};

export default PublicNavigation;
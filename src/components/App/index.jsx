import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from '../Footer';
import { RouterProvider, Link } from 'react-router-dom';
import { Header } from '../Header';
import { Hero } from '../Hero';

export const App = () => {
  const location = useLocation();
  const showFooter = location.pathname !== '/interview';

  return (
    <>
      <Header />
      <Outlet />
      {showFooter && <Footer />}
    </>
  );
};

import React from 'react';
import { useLocation } from 'react-router-dom';
import TopAppBar from './TopAppBar';
import BottomNavBar from './BottomNavBar';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideNav = location.pathname === '/login';

  return (
    <div className="min-h-screen bg-surface font-sans pb-24">
      {!hideNav && <TopAppBar />}
      <main className="container mx-auto">
        {children}
      </main>
      {!hideNav && <BottomNavBar />}
    </div>
  );
};

export default Layout;

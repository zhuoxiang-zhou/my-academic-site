import React, { useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Research from './pages/Research';
import Teaching from './pages/Teaching';
import Photography from './pages/Photography';
import { SITE_CONFIG } from './constants';

const pageTitles: Record<string, string> = {
  '/': 'Home',
  '/research': 'Research',
  '/teaching': 'Teaching',
  '/photography': 'Photography',
};

// Keep the sidebar mounted while route changes replace the content to its right.
export const SiteLayout: React.FC = () => {
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  const previousPath = useRef(pathname);

  useEffect(() => {
    document.title = pathname === '/'
      ? SITE_CONFIG.name
      : `${pageTitles[pathname] || 'Page'} | ${SITE_CONFIG.name}`;

    if (previousPath.current !== pathname) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      mainRef.current?.focus({ preventScroll: true });
      previousPath.current = pathname;
    }
  }, [pathname]);

  return (
    <div className="site-shell">
      <a
        href="#main-content"
        className="skip-link"
        onClick={(event) => {
          // HashRouter owns the URL fragment; focus without changing the route.
          event.preventDefault();
          mainRef.current?.focus({ preventScroll: true });
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }}
      >
        Skip to content
      </a>
      <Navbar />
      <div className="site-content">
        <main id="main-content" ref={mainRef} tabIndex={-1} className="site-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/photography" element={<Photography />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
};

const App: React.FC = () => (
  <Router>
    <SiteLayout />
  </Router>
);

export default App;

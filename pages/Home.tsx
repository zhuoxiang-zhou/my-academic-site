import React from 'react';
import { SITE_CONFIG } from '../constants';

const Home: React.FC = () => (
  <div className="site-page home-page">
    <h1 className="sr-only">{SITE_CONFIG.name}</h1>
    <div className="home-grid">
      <div className="home-profile">
        <img
          src="/images/bio.jpg"
          alt={SITE_CONFIG.name}
          width={1022}
          height={1015}
          className="home-portrait"
        />
        <div className="home-links" aria-label="Contact and curriculum vitae">
          <a href={`mailto:${SITE_CONFIG.email}`}>Email</a>
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">CV</a>
          {SITE_CONFIG.linkedin && (
            <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          )}
        </div>
      </div>

      <div className="home-biography">
        <p className="home-greeting">
          Hello, I'm Zhuoxiang (<em>Jwo-shyang</em>). I also go by Shawn.
        </p>
        <p>{SITE_CONFIG.bio}</p>
        <p>{SITE_CONFIG.bio2}</p>
      </div>
    </div>
  </div>
);

export default Home;

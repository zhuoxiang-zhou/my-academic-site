import React from 'react';
import { SITE_CONFIG } from '../constants';

const Footer: React.FC = () => (
  <footer className="site-footer">
    <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name} · {SITE_CONFIG.institution}</p>
    <p>All rights reserved.</p>
  </footer>
);

export default Footer;

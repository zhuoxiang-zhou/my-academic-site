import React from 'react';
import { SITE_CONFIG } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-stone-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-serif font-bold text-academic-900">{SITE_CONFIG.name}</h3>
            <p className="text-stone-500 text-base mt-2">{SITE_CONFIG.title}</p>
            <p className="text-stone-500 text-base">{SITE_CONFIG.institution}</p>
          </div>
          
          {/* Social icons removed as per request */}
        </div>
        <div className="mt-10 border-t border-stone-100 pt-8 text-center">
          <p className="text-sm text-stone-400">&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
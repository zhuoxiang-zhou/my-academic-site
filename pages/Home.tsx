import React from 'react';
import { SITE_CONFIG } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="w-full md:w-80 shrink-0">
          <div className="aspect-[3/4] w-full relative rounded-lg overflow-hidden shadow-md border-4 border-white">
             {/* Professional headshot placeholder */}
            <img 
              src="https://picsum.photos/600/800?grayscale" 
              alt={SITE_CONFIG.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-6 flex justify-center gap-8">
            <a 
              href={`mailto:${SITE_CONFIG.email}`} 
              className="text-xl text-academic-700 hover:text-academic-900 font-sans transition-colors"
            >
              Email
            </a>
            <a 
              href="#" 
              className="text-xl text-academic-700 hover:text-academic-900 font-sans transition-colors"
            >
              CV
            </a>
            <a 
              href={SITE_CONFIG.linkedin || "#"} 
              className="text-xl text-academic-700 hover:text-academic-900 font-sans transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-academic-900">{SITE_CONFIG.name}</h1>
            <p className="text-lg sm:text-xl text-academic-600 mt-3 font-light leading-snug">
              {SITE_CONFIG.title}, <br />
              {SITE_CONFIG.institution}
            </p>
          </div>

          <div className="prose prose-stone leading-relaxed text-stone-700 max-w-none">
            <p className="text-lg leading-relaxed">
              Hello, I'm Shawn!
            </p>
            <p className="text-lg leading-relaxed">
              {SITE_CONFIG.bio}
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
            <Link to="/research" className="group p-6 bg-white border border-stone-200 rounded-lg hover:border-academic-300 hover:shadow-sm transition-all">
              <h3 className="font-serif font-semibold text-academic-800 group-hover:text-academic-600 flex items-center gap-2 text-lg">
                Latest Research <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-stone-500 mt-2">Read my working papers on digital assets.</p>
            </Link>
            
            <div className="p-6 bg-white border border-stone-200 rounded-lg hover:border-academic-300 hover:shadow-sm transition-all">
              <h3 className="font-serif font-semibold text-academic-800 flex items-center gap-2 text-lg">
                Recently Reading
              </h3>
              <div className="mt-2 text-stone-600">
                <p className="font-medium italic">The Capital Order</p>
                <p className="text-sm text-stone-500">by Clara E. Mattei</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News Section Removed */}
    </div>
  );
};

export default Home;
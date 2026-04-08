import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOtherDropdownOpen, setIsOtherDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOtherDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsOtherDropdownOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path ? 'text-academic-800 font-semibold' : 'text-stone-600 hover:text-academic-700';

  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-serif text-2xl font-bold text-academic-900 tracking-tight">
              Shawn Zhou<span className="text-academic-500">.</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            <Link to="/" className={`text-lg transition-colors ${isActive('/')}`}>
               Home
            </Link>
            <Link to="/research" className={`text-lg transition-colors ${isActive('/research')}`}>
               Research
            </Link>
            <Link to="/teaching" className={`text-lg transition-colors ${isActive('/teaching')}`}>
               Teaching
            </Link>
            
            {/* Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsOtherDropdownOpen(!isOtherDropdownOpen)}
                className={`flex items-center gap-1 text-lg transition-colors focus:outline-none ${
                  location.pathname.includes('/other') ? 'text-academic-800 font-semibold' : 'text-stone-600 hover:text-academic-700'
                }`}
              >
                Other <ChevronDown size={16} className={`transition-transform duration-200 ${isOtherDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isOtherDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-stone-100 py-1 ring-1 ring-black ring-opacity-5 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link to="/photography" className="block px-4 py-2 text-base text-stone-700 hover:bg-academic-50 hover:text-academic-800">
                     Photography
                  </Link>
                  <Link to="/notes" className="block px-4 py-2 text-base text-stone-700 hover:bg-academic-50 hover:text-academic-800">
                     Notes
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-stone-500 hover:text-academic-700 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-lg font-medium text-stone-700 hover:text-academic-900 hover:bg-stone-50">Home</Link>
            <Link to="/research" className="block px-3 py-2 rounded-md text-lg font-medium text-stone-700 hover:text-academic-900 hover:bg-stone-50">Research</Link>
            <Link to="/teaching" className="block px-3 py-2 rounded-md text-lg font-medium text-stone-700 hover:text-academic-900 hover:bg-stone-50">Teaching</Link>
            <div className="border-t border-stone-100 my-2 pt-2">
              <span className="px-3 text-sm font-semibold text-stone-400 uppercase tracking-wider">Other</span>
              <Link to="/photography" className="block px-3 py-2 rounded-md text-lg font-medium text-stone-700 hover:text-academic-900 hover:bg-stone-50">
                 Photography
              </Link>
              <Link to="/notes" className="block px-3 py-2 rounded-md text-lg font-medium text-stone-700 hover:text-academic-900 hover:bg-stone-50">
                 Notes
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
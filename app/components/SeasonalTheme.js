'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const SeasonalContext = createContext();

export const useSeasonalTheme = () => useContext(SeasonalContext);

// Christmas tree component (separate for easier placement)
export function ChristmasTree({ activeTab }) {
  const { currentSeason } = useSeasonalTheme();
  
  // Only show on Bio page during Christmas
  if (currentSeason !== 'christmas' || activeTab !== 'bio') return null;
  
  return (
    <div className="flex justify-end mt-0 -mb-33 -mr-25">
      <div className="christmas-tree text-9xl opacity-80 animate-pulse-slow">
        🎄
      </div>
      {/* <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style> */}
    </div>
  );
}

export function SeasonalThemeProvider({ children }) {
  const [currentSeason, setCurrentSeason] = useState('spring');
  const [manualOverride, setManualOverride] = useState(false);

  // Detect season based on current date
  const detectSeason = () => {
    const month = new Date().getMonth() + 1; // 1-12
    const day = new Date().getDate();
    const year = new Date().getFullYear();
    
    // Chinese New Year dates (approximately Jan 21 - Feb 20)
    // This is a simplified check - CNY dates vary by year
    // Extended period: 2 weeks before to 2 weeks after CNY
    const cnyDates = {
      2024: { month: 2, day: 10 },  // Feb 10, 2024
      2025: { month: 1, day: 29 },  // Jan 29, 2025
      2026: { month: 2, day: 17 },  // Feb 17, 2026
      2027: { month: 2, day: 6 },   // Feb 6, 2027
      2028: { month: 1, day: 26 },  // Jan 26, 2028
    };
    
    const cny = cnyDates[year];
    if (cny) {
      const cnyDate = new Date(year, cny.month - 1, cny.day);
      const twoWeeksBefore = new Date(cnyDate);
      twoWeeksBefore.setDate(twoWeeksBefore.getDate() - 14);
      const twoWeeksAfter = new Date(cnyDate);
      twoWeeksAfter.setDate(twoWeeksAfter.getDate() + 14);
      const today = new Date(year, month - 1, day);
      
      if (today >= twoWeeksBefore && today <= twoWeeksAfter) {
        return 'chinese-new-year';
      }
    }
    
    // Christmas: Dec 10 - Dec 31
    if (month === 12 && day >= 10) {
      return 'christmas';
    }
    // Winter: Dec - Feb (excluding Christmas period)
    if (month === 12 || month === 1 || month === 2) {
      return 'winter';
    }
    // Spring: Mar - May
    if (month >= 3 && month <= 5) {
      return 'spring';
    }
    // Summer: Jun - Aug
    if (month >= 6 && month <= 8) {
      return 'summer';
    }
    // Fall: Sep - Nov
    if (month >= 9 && month <= 11) {
      return 'fall';
    }
    return 'spring';
  };

  // Initialize season
  useEffect(() => {
    const saved = localStorage.getItem('seasonalTheme');
    const savedManual = localStorage.getItem('seasonalManualOverride');
    
    if (savedManual === 'true' && saved) {
      setCurrentSeason(saved);
      setManualOverride(true);
    } else {
      setCurrentSeason(detectSeason());
    }
  }, []);

  // Update season
  const changeSeason = (season) => {
    setCurrentSeason(season);
    setManualOverride(true);
    localStorage.setItem('seasonalTheme', season);
    localStorage.setItem('seasonalManualOverride', 'true');
  };

  // Reset to auto
  const resetToAuto = () => {
    setManualOverride(false);
    localStorage.removeItem('seasonalManualOverride');
    setCurrentSeason(detectSeason());
  };

  // Season configurations
  const seasons = {
    spring: {
      name: 'Spring',
      colors: {
        primary: '#ffc1cc', // Soft pink
        secondary: '#a8e6cf', // Fresh green
        accent: '#ff69b4',
        gradient: 'from-pink-50 via-green-50 to-blue-50',
        headerGradient: 'from-pink-100/30 to-green-100/30'
      },
      icon: '🌸',
      animation: 'petals'
    },
    summer: {
      name: 'Summer',
      colors: {
        primary: '#ffd93d', // Sunny yellow
        secondary: '#6bcfff', // Ocean blue
        accent: '#ff6b35',
        gradient: 'from-yellow-50 via-orange-50 to-blue-50',
        headerGradient: 'from-yellow-100/30 to-blue-100/30'
      },
      icon: '☀️',
      animation: 'none'
    },
    fall: {
      name: 'Fall',
      colors: {
        primary: '#d4a574', // Amber
        secondary: '#c9785d', // Rust
        accent: '#8b4513',
        gradient: 'from-orange-50 via-amber-50 to-yellow-50',
        headerGradient: 'from-orange-100/30 to-amber-100/30'
      },
      icon: '🍂',
      animation: 'leaves'
    },
    winter: {
      name: 'Winter',
      colors: {
        primary: '#b8d8e8', // Cool blue
        secondary: '#e0f2f7', // Icy white
        accent: '#4a90a4',
        gradient: 'from-blue-50 via-cyan-50 to-slate-50',
        headerGradient: 'from-blue-100/30 to-cyan-100/30'
      },
      icon: '❄️',
      animation: 'snow'
    },
    christmas: {
      name: 'Christmas',
      colors: {
        primary: '#c41e3a', // Christmas red
        secondary: '#0f8a5f', // Christmas green
        accent: '#ffd700', // Gold
        gradient: 'from-red-50 via-green-50 to-red-50',
        headerGradient: 'from-red-100/30 to-green-100/30'
      },
      icon: '🎄',
      animation: 'snow'
    },
    'chinese-new-year': {
      name: 'Chinese New Year',
      colors: {
        primary: '#dc143c', // Chinese red
        secondary: '#ffd700', // Gold
        accent: '#8b0000',
        gradient: 'from-red-50 via-yellow-50 to-orange-50',
        headerGradient: 'from-red-100/30 to-yellow-100/30'
      },
      icon: '🧧',
      animation: 'lanterns'
    }
  };

  const theme = seasons[currentSeason];

  return (
    <SeasonalContext.Provider 
      value={{ 
        currentSeason, 
        theme, 
        changeSeason, 
        resetToAuto, 
        manualOverride,
        allSeasons: seasons
      }}
    >
      {children}
    </SeasonalContext.Provider>
  );
}

// Season selector component
export function SeasonSelector() {
  const { currentSeason, changeSeason, resetToAuto, manualOverride, allSeasons } = useSeasonalTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
      >
        <span>Theme:</span>
        <span>{allSeasons[currentSeason].icon}</span>
        <span className="hidden sm:inline">{allSeasons[currentSeason].name}</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setOpen(false)}
          />
          <div className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-lg border border-gray-200 p-3 z-50 min-w-[200px]">
            <p className="text-xs text-gray-500 mb-2 font-medium">Season Theme</p>
            <div className="space-y-1">
              {Object.entries(allSeasons).map(([key, season]) => (
                <button
                  key={key}
                  onClick={() => {
                    changeSeason(key);
                    setOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded text-sm hover:bg-gray-100 transition-colors flex items-center gap-2 ${
                    currentSeason === key ? 'bg-gray-100 font-medium' : ''
                  }`}
                >
                  <span>{season.icon}</span>
                  <span>{season.name}</span>
                </button>
              ))}
              {manualOverride && (
                <>
                  <div className="border-t border-gray-200 my-2" />
                  <button
                    onClick={() => {
                      resetToAuto();
                      setOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded text-sm hover:bg-gray-100 transition-colors text-gray-600"
                  >
                    ↻ Auto-detect season
                  </button>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// Animated background component
export function SeasonalAnimation() {
  const { theme, currentSeason } = useSeasonalTheme();
  const [mounted, setMounted] = useState(false);

  // Only render animations on client side to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {(theme.animation && theme.animation !== 'none') && (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
          {theme.animation === 'petals' && (
            <div className="petals-container">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i} 
                  className="petal"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 10}s`,
                    animationDuration: `${15 + Math.random() * 10}s`
                  }}
                >
                  🌸
                </div>
              ))}
            </div>
          )}

          {theme.animation === 'leaves' && (
            <div className="leaves-container">
              {[...Array(10)].map((_, i) => (
                <div 
                  key={i} 
                  className="leaf"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 8}s`,
                    animationDuration: `${12 + Math.random() * 8}s`,
                    fontSize: `${20 + Math.random() * 20}px`
                  }}
                >
                  🍂
                </div>
              ))}
            </div>
          )}

          {theme.animation === 'snow' && (
            <div className="snow-container">
              {[...Array(15)].map((_, i) => (
                <div 
                  key={i} 
                  className="snowflake"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 10}s`,
                    animationDuration: `${10 + Math.random() * 10}s`,
                    fontSize: `${20 + Math.random() * 20}px`
                  }}
                >
                  ❄
                </div>
              ))}
            </div>
          )}

          {theme.animation === 'lanterns' && (
            <div className="lanterns-container">
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i} 
                  className="lantern"
                  style={{
                    left: `${15 + i * 15}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${4 + Math.random() * 2}s`
                  }}
                >
                  🏮
                </div>
              ))}
            </div>
          )}

          <style jsx>{`
            .petal, .leaf, .snowflake {
              position: absolute;
              top: -50px;
              animation: fall linear infinite;
              opacity: 0.6;
            }

            .sparkle {
              position: absolute;
              animation: twinkle 3s ease-in-out infinite;
            }

            .lantern {
              position: absolute;
              top: 0;
              animation: sway ease-in-out infinite;
              opacity: 0.7;
              font-size: 24px;
            }

            @keyframes fall {
              to {
                transform: translateY(100vh) rotate(360deg);
              }
            }

            @keyframes twinkle {
              0%, 100% { opacity: 0; }
              50% { opacity: 0.8; }
            }

            @keyframes sway {
              0%, 100% { transform: translateX(-10px) rotate(-5deg); }
              50% { transform: translateX(10px) rotate(5deg); }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
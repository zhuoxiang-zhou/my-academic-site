'use client';

import React, { useState } from 'react';
import { Mail, ExternalLink } from 'lucide-react';
import Other from './components/Other';
import { SeasonalThemeProvider, useSeasonalTheme, SeasonalAnimation, SeasonSelector, ChristmasTree } from './components/SeasonalTheme';

export default function AcademicWebsite() {
  return (
    <SeasonalThemeProvider>
      <AcademicWebsiteContent />
    </SeasonalThemeProvider>
  );
}

function AcademicWebsiteContent() {
  const { theme } = useSeasonalTheme();
  const [activeTab, setActiveTab] = useState('bio');
  const [expandedAbstracts, setExpandedAbstracts] = useState({});

  const toggleAbstract = (paperId) => {
    setExpandedAbstracts(prev => ({
      ...prev,
      [paperId]: !prev[paperId]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SeasonalAnimation />

      {/* Header */}
      <header className={`border-b border-gray-200 bg-gradient-to-r ${theme.colors.headerGradient}`}>
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-serif text-gray-900 mb-1">Zhuoxiang (Shawn) Zhou</h1>
              <p className="text-base text-gray-700">National School of Development, Peking University</p>
            </div>
            <nav className="flex gap-8">
              <button
                onClick={() => setActiveTab('bio')}
                className={`text-base pb-1 ${
                  activeTab === 'bio'
                    ? 'border-b-2 border-gray-900 font-medium text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Bio
              </button>
              <button
                onClick={() => setActiveTab('research')}
                className={`text-base pb-1 ${
                  activeTab === 'research'
                    ? 'border-b-2 border-gray-900 font-medium text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Research
              </button>
              <button
                onClick={() => setActiveTab('teaching')}
                className={`text-base pb-1 ${
                  activeTab === 'teaching'
                    ? 'border-b-2 border-gray-900 font-medium text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Teaching
              </button>
              <button
                onClick={() => setActiveTab('other')}
                className={`text-base pb-1 ${
                  activeTab === 'other'
                    ? 'border-b-2 border-gray-900 font-medium text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Other
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-16">
        {activeTab === 'bio' && (
          <>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'Person',
                  name: 'Zhuoxiang Zhou',
                  alternateName: 'Shawn Zhou',
                  url: 'https://shawn-zhou.com',
                  jobTitle: 'Undergraduate in Economics',
                  affiliation: {
                    '@type': 'EducationalOrganization',
                    name: 'Peking University',
                  },
                  knowsAbout: ['Economics', 'Labor Economics', 'Innovation Economics'],
                })
              }}
            />

            <div className="flex gap-16">
              {/* Photo */}
              <div className="w-80 flex-shrink-0">
                <div className="w-80 h-80 rounded-full bg-gray-200 overflow-hidden mb-8">
                    <img 
                      src="/bio_photo.jpg" 
                      alt="Zhuoxiang (Shawn) Zhou" 
                      className="w-full h-full object-cover"
                    />
                </div>
                
                {/* Contact Links */}
                <div className="flex justify-center gap-6 text-gray-700">
                  <a href="mailto:zhuoxiang.zhou@gmail.com" className="hover:text-gray-900 text-lg font-medium">
                    Email
                  </a>
                  <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 text-lg font-medium">
                    CV
                  </a>
                  <a href="https://linkedin.com/in/zhuoxiang-zhou-b25478288/" className="hover:text-gray-900">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 max-w-3xl">
                <h2 className="text-4xl font-serif text-gray-900 mb-12">Zhuoxiang Zhou</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-serif text-gray-900 mb-6">About Me</h3>
                    <div className="space-y-4 text-gray-900 leading-relaxed">
                      <p>
                        Hello, I'm Shawn! 
                      </p>
                      <p>
                        I'm currently completing my senior year in Economics at the{" "}
                        <a 
                          href="https://en.nsd.pku.edu.cn/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-800 hover:text-gray-900 underline"
                        >
                          <b>National School of Development (NSD)</b>
                        </a>, Peking University. I spent Fall 2024 as a visiting student at UC Berkeley and Spring 2025 at Harvard University.
                      </p>
                      <p>
                        My work focuses on <b>labor economics</b> and <b>the economics of science and innovation</b>. I study two broad questions: (i) how policy instruments influence individual behavior and shape human capital formation, and (ii) how technological access and adoption affect productivity, welfare, and inequality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ChristmasTree activeTab={activeTab} />
          </>
        )}

        {activeTab === 'research' && (
          <div>
            <div className="flex gap-12 border-b border-gray-300 pb-8 mb-12">
              <h2 className="text-4xl font-serif text-gray-900 w-64 flex-shrink-0">Research</h2>
              <div className="flex-1"></div>
            </div>

            <div className="space-y-16">
              <div className="flex gap-12">
                <h3 className="text-2xl font-serif text-gray-900 w-64 flex-shrink-0">Working Papers</h3>
                <div className="flex-1 space-y-12">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2"><b>Crossing the Line: The Role of Academic Excellence Recognition in Shaping Academic and Career Trajectories</b></h4>
                    <p className="text-md text-gray-600 mb-2">(with Wei Huang)</p>
                    
                    <div className="flex gap-3 items-center text-base">
                      {/* <a href="#" className="text-gray-700 hover:text-gray-900 inline-flex items-center gap-1">
                        Manuscript
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <span className="text-gray-400">·</span> */}
                      <span className="text-md text-gray-600 mb-2">Reject and Resubmit, <b><i>American Economic Journal: Economic Policy</i></b></span>
                    </div>

                    {/* Abstract Toggle Button */}
                    <button
                      onClick={() => toggleAbstract('paper1')}
                      className="flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-3 transition-colors"
                    >
                      <span className="text-md font-medium">Abstract</span>
                      <svg 
                        className={`w-5 h-5 transition-transform duration-300 ${expandedAbstracts['paper1'] ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Collapsible Abstract */}
                    <div className={`overflow-hidden transition-all duration-300 ${expandedAbstracts['paper1'] ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                      <p className="text-md text-gray-700 leading-relaxed bg-gray-100 p-4 rounded-lg">
                        This study examines the impact of early academic recognition on student outcomes, exploiting a score threshold in the Principles of Economics course within an economics minor program. Using a natural experiment approach, we find that students achieving this threshold outperform peers in subsequent courses, secure more scholarships, and access top post-graduation opportunities, including elite graduate programs and economics-related employment. Recognition at this threshold significantly boosts motivation, with students who value it achieving even stronger results. These findings underscore the role of non-material recognition in enhancing student engagement, academic performance, and favorable career trajectories in educational settings.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2"><b>Contraceptive Methods, Health, and Welfare: Evidence from India's NFHS</b></h4>
                    <p className="text-md text-gray-600 mb-4">(with David I. Levine)</p>
                    
                    {/* Abstract Toggle Button */}
                    {/* <button
                      onClick={() => toggleAbstract('paper2')}
                      className="flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-3 transition-colors"
                    >
                      <span className="font-medium">Abstract</span>
                      <svg 
                        className={`w-5 h-5 transition-transform duration-300 ${expandedAbstracts['paper2'] ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button> */}
                    
                    {/* Collapsible Abstract */}
                    {/* <div className={`overflow-hidden transition-all duration-300 ${expandedAbstracts['paper2'] ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                      <p className="text-lg text-gray-700 leading-relaxed bg-gray-100 p-4 rounded-lg">
                        Another abstract describing this paper's contribution to the field. Include the main argument and methodology used in the research. This collapsible format keeps the page clean while allowing readers to access detailed information when needed.
                      </p>
                    </div> */}
                    
                    {/* <div className="flex gap-3 items-center text-base">
                      <a href="#" className="text-gray-700 hover:text-gray-900 inline-flex items-center gap-1">
                        Paper
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <span className="text-gray-400">·</span>
                      <span className="text-gray-600">Revise and Resubmit</span>
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="flex gap-12">
                <h3 className="text-2xl font-serif text-gray-900 w-64 flex-shrink-0">Work in Progress</h3>
                <div className="flex-1 space-y-12">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2"><b>Equalizer or Concentrator? Artificial Intelligence and Scientific Inequality</b></h4>
                    <p className="text-md text-gray-600 mb-6">(with Richard B. Freeman)</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2"><b>The Economic Incidence of Excise Taxes: Tax Pass-Through, Consumer Behavior, and Welfare Impacts</b></h4>
                    {/* <p className="text-lg text-gray-700 leading-relaxed">
                      Description of research question and approach for this early-stage project.
                    </p> */}
                    <p className="text-md text-gray-600 mb-6">(with Wei Huang)</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-12">
                <h3 className="text-2xl font-serif text-gray-900 w-64 flex-shrink-0">Book Chapters</h3>
                <div className="text-lg flex-1 space-y-8">
                  <div>
                    <p>
                      <b>Zhou, Zhuoxiang</b>, Jianduo Li, and Zhaohan Ran.{" "}
                      <span className="font-medium">“Property and Inheritance.”</span>{" "}
                      <i><b>Rural Survey in Huoliu Village, Yanling County, Henan Province.</b></i>{" "}
                      China Social Sciences Press, 2025, 46–78.
                    </p>
                    {/* <a href="#" className="text-base text-gray-700 hover:text-gray-900 inline-flex items-center gap-1">
                      Paper
                      <ExternalLink className="w-4 h-4" />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'teaching' && (
          <div className="max-w-4xl">
            <h2 className="text-4xl font-serif text-gray-900 mb-12">Teaching</h2>

            <div className="space-y-12">
              <div>
                <p className="text-gray-700 leading-relaxed mb-12">
                  I am passionate about teaching and have served as a teaching assistant for students from diverse cultural backgrounds and academic levels.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif text-gray-900 mb-6">Peking University</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-900 font-medium mb-1">Applied Econometrics (PhD-level), Fall 2025</p>
                    <p className="text-gray-600 text-sm">Taught in English; led weekly tutorial and Q&A sessions. Topics cover randomized controlled trials (RCT), instrumental variables (IV), regression discontinuity (RD), difference-in-differences (DiD), and event-study designs.</p>
                  </div>

                  <div>
                    <p className="text-gray-900 font-medium mb-1">Econometrics, Fall 2025</p>
                    <p className="text-gray-600 text-sm">Led weekly tutorial sessions. Topics include ordinary least squares (OLS), multiple regression, dummy variables, heteroskedasticity, panel data, and causal inference methods.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'other' && <Other />}
      </main>


      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-8 py-8 flex justify-between items-center">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Zhuoxiang Zhou. All rights reserved.</p>
          <SeasonSelector />
        </div>
      </footer>
    </div>
  );
}
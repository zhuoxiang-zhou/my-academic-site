'use client';

import React, { useState } from 'react';
import { Mail, ExternalLink } from 'lucide-react';

export default function AcademicWebsite() {
  const [activeTab, setActiveTab] = useState('bio');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-serif text-gray-900 mb-1">Zhuoxiang (Shawn) Zhou</h1>
              <p className="text-base text-gray-700">China Center for Economic Research, Peking University</p>
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
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-16">
        {activeTab === 'bio' && (
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
              <h2 className="text-4xl font-serif text-gray-900 mb-12">Your Name</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-serif text-gray-900 mb-6">About</h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Your Name is a PhD Candidate in [Your Field], jointly appointed by [University Name]'s Department of [Your Department] and the [School Name], and a member of [any research centers or labs].
                    </p>
                    <p>
                      [Your Name]'s work focuses on [your research areas] and explores [specific topics]. Before joining [University], [Your Name] worked as [previous position]. [He/She/They] hold[s] a [degree] from [University]. [His/Her/Their] dissertation [brief description of dissertation].
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                    <h4 className="text-2xl font-medium text-gray-900 mb-4">Paper Title Goes Here</h4>
                    <p className="text-lg text-gray-600 mb-6">with Co-Author Name</p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Brief abstract or description of the paper. This should summarize the main research question, methodology, and key findings or contributions of the work.
                    </p>
                    <div className="flex gap-3 items-center text-base">
                      <a href="#" className="text-gray-700 hover:text-gray-900 inline-flex items-center gap-1">
                        Paper
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <span className="text-gray-400">·</span>
                      <span className="text-gray-600">Under Review</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-2xl font-medium text-gray-900 mb-4">Another Working Paper Title</h4>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Another abstract describing this paper's contribution to the field. Include the main argument and methodology used in the research.
                    </p>
                    <div className="flex gap-3 items-center text-base">
                      <a href="#" className="text-gray-700 hover:text-gray-900 inline-flex items-center gap-1">
                        Paper
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <span className="text-gray-400">·</span>
                      <span className="text-gray-600">Revise and Resubmit</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-12">
                <h3 className="text-2xl font-serif text-gray-900 w-64 flex-shrink-0">Work in Progress</h3>
                <div className="flex-1 space-y-12">
                  <div>
                    <h4 className="text-2xl font-medium text-gray-900 mb-4">Ongoing Project Title</h4>
                    <p className="text-lg text-gray-600 mb-6">with Co-Author Name</p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Brief description of the project, current status, and expected contributions. This can be more preliminary than working papers.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-2xl font-medium text-gray-900 mb-4">Early Stage Research Project</h4>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Description of research question and approach for this early-stage project.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-12">
                <h3 className="text-2xl font-serif text-gray-900 w-64 flex-shrink-0">Publications</h3>
                <div className="flex-1 space-y-8">
                  <div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-2">
                      <span className="font-medium">"Publication Title,"</span> Journal Name, Volume(Issue), pages, Year.
                    </p>
                    <a href="#" className="text-base text-gray-700 hover:text-gray-900 inline-flex items-center gap-1">
                      Paper
                      <ExternalLink className="w-4 h-4" />
                    </a>
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
                  I am passionate about teaching and have experience as both a teaching assistant and instructor. My teaching approach emphasizes [your teaching philosophy or methods].
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif text-gray-900 mb-6">Princeton University</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-900 font-medium">Course Title</p>
                    <p className="text-gray-600 text-sm">Teaching Assistant, Fall 2024</p>
                  </div>

                  <div>
                    <p className="text-gray-900 font-medium">Another Course Title</p>
                    <p className="text-gray-600 text-sm">Instructor of Record, Spring 2024</p>
                  </div>

                  <div>
                    <p className="text-gray-900 font-medium">Previous Course</p>
                    <p className="text-gray-600 text-sm">Teaching Assistant, Fall 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-8 py-8 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
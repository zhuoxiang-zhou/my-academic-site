import React, { useState } from 'react';
import { PAPERS, BOOK_CHAPTERS, SITE_CONFIG } from '../constants';
import { Paper } from '../types';
import { FileText, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

interface ResearchPanelProps {
  paper: Paper;
  isWip?: boolean;
}

const ResearchPanel: React.FC<ResearchPanelProps> = ({ paper, isWip = false }) => {
  // Working Papers start closed. WIP doesn't use toggle.
  const [isOpen, setIsOpen] = useState(false);

  // Filter out the site owner from authors list
  const otherAuthors = paper.authors.filter(a => a !== SITE_CONFIG.name);

  const handleToggle = () => {
    if (!isWip) {
      setIsOpen(!isOpen);
    }
  };

  // Status color dot
  const dotColor = paper.status === 'Working Paper' ? 'bg-amber-400' : 'bg-stone-300';

  return (
    <div 
      className={`bg-white border border-stone-200 rounded-xl p-6 shadow-sm mb-6 transition-all duration-200 ${!isWip ? 'cursor-pointer hover:shadow-md' : ''}`} 
      onClick={handleToggle}
    >
      <div className="flex justify-between items-start mb-3">
        {/* Topic Pills */}
        <div className="flex flex-wrap gap-2">
           {paper.topics && paper.topics.map(topic => (
             <span key={topic} className="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium bg-stone-100 text-stone-600 tracking-wide">
               {topic}
             </span>
           ))}
           {(!paper.topics || paper.topics.length === 0) && (
              <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium bg-stone-100 text-stone-600 tracking-wide">
               General
             </span>
           )}
        </div>

        {/* Toggle Icon for Non-WIP */}
        {!isWip && (
          <button className="text-stone-400 hover:text-stone-600 p-1">
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        )}
      </div>

      {/* Title - Black, Serif */}
      <h3 className="text-2xl font-serif font-bold text-black mb-2 leading-snug">
        {paper.title}
      </h3>
      
      {/* Authors - Sans Serif */}
      {!isWip && otherAuthors.length > 0 && (
        <p className="text-lg font-sans text-stone-600 italic mb-4">
          with {otherAuthors.map((author, i) => {
            const url = paper.authorLinks?.[author];
            return (
              <span key={author}>
                {i > 0 && ", "}
                {url ? (
                  <a href={url} target="_blank" rel="noopener noreferrer" className="underline">
                    {author}
                  </a>
                ) : author}
              </span>
            );
          })}
        </p>
      )}

      {/* Status Line */}
      {paper.journal && (
        <div className="flex items-center gap-2 mb-4">
          <div className={`w-2 h-2 rounded-full ${dotColor}`} />
          <span className="text-sm font-medium text-stone-500">
            {paper.journalStatus && <>{paper.journalStatus} </>}<em>{paper.journal}</em>
          </span>
        </div>
      )}

      {/* Abstract & Actions - Only for non-WIP items when open */}
      {!isWip && isOpen && (
        <div className="mt-5 pt-5 border-t border-stone-100 animate-in fade-in slide-in-from-top-1 duration-200">
          {/* <div className="text-stone-700 leading-relaxed text-base">
            <span className="font-bold text-stone-900 text-xs uppercase tracking-wider mr-2">Abstract:</span>
            {paper.abstract}
          </div> */}

          <div className="flex gap-4 mt-4 pt-2">
             {paper.pdfUrl && (
               <a 
                 href={paper.pdfUrl} 
                 className="flex items-center gap-2 text-sm font-medium text-academic-600 hover:text-academic-800 transition-colors border border-stone-200 px-3 py-1.5 rounded-md hover:bg-stone-50"
                 onClick={(e) => e.stopPropagation()}
               >
                 <FileText size={16} /> Download PDF
               </a>
             )}
             {/* {paper.link && (
               <a
                 href={paper.link}
                 className="flex items-center gap-2 text-sm font-medium text-academic-600 hover:text-academic-800 transition-colors border border-stone-200 px-3 py-1.5 rounded-md hover:bg-stone-50"
                 onClick={(e) => e.stopPropagation()}
               >
                 <ExternalLink size={16} /> External Link
               </a>
             )} */}
          </div>
        </div>
      )}
    </div>
  );
};

const ResearchSection: React.FC<{ title: string; papers: Paper[]; isWip?: boolean }> = ({ title, papers, isWip = false }) => {
  if (papers.length === 0) return null;
  return (
    <section className="flex flex-col md:flex-row gap-8 md:gap-12 border-t border-stone-200 pt-10 first:border-0 first:pt-0">
      <div className="md:w-64 shrink-0">
        <h2 className="text-2xl font-serif font-bold text-academic-900 sticky top-24">
          {title}
        </h2>
      </div>
      <div className="flex-1">
        {papers.map(p => <ResearchPanel key={p.id} paper={p} isWip={isWip} />)}
      </div>
    </section>
  );
};

const Research: React.FC = () => {
  // Filter papers
  const working = PAPERS.filter(p => p.status === 'Working Paper');
  const wip = PAPERS.filter(p => p.status === 'Work in Progress');
  
  // Note: "Publications" section is removed as per request.

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-16 border-b border-stone-200 pb-10">
        <h1 className="text-4xl font-serif font-bold text-academic-900 mb-4">Research</h1>
        <p className="text-stone-500 text-xl">
          My research focuses on labor economics and the economics of technology and innovation.
        </p>
      </div>

      <div className="space-y-12">
        <ResearchSection title="Working Papers" papers={working} />
        <ResearchSection title="Work in Progress" papers={wip} isWip={true} />
        <ResearchSection title="Book Chapters" papers={BOOK_CHAPTERS} />
      </div>
    </div>
  );
};

export default Research;
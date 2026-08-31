import React from 'react';
import { PAPERS, BOOK_CHAPTERS, CHINESE_PUBLICATIONS, SITE_CONFIG } from '../constants';
import { Paper } from '../types';

const ResearchEntry: React.FC<{ paper: Paper }> = ({ paper }) => {
  const otherAuthors = paper.authors.filter(author => author !== SITE_CONFIG.name);

  return (
    <li className="font-research text-base sm:text-lg leading-relaxed text-stone-600">
      <h3 className="inline font-bold text-stone-800">
        {paper.title}{/[.!?。！？]$/.test(paper.title) ? '' : '.'}
      </h3>
      {otherAuthors.length > 0 && (
        <span>
          {' with '}
          {otherAuthors.map((author, i) => {
            const url = paper.authorLinks?.[author];
            const isLast = i === otherAuthors.length - 1;
            const separator = i === 0 ? '' : otherAuthors.length > 2 ? ', ' : ' ';
            const prefix = isLast && i > 0 ? separator + 'and ' : separator;

            return (
              <React.Fragment key={author}>
                {prefix}
                {url ? (
                  <a href={url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-academic-800">
                    {author}
                  </a>
                ) : author}
              </React.Fragment>
            );
          })}
          .
        </span>
      )}
      {paper.journal && (
        <span>
          {' '}
          {paper.journalStatus && `${paper.journalStatus.trim()} `}
          <em className="font-bold text-stone-800">{paper.journal}</em>.
        </span>
      )}
      {paper.pdfUrl && (
        <>
          {' '}
          <a href={paper.pdfUrl} className="font-medium text-academic-700 underline underline-offset-2 hover:text-academic-900" aria-label={`Download PDF: ${paper.title}`}>
            [PDF]
          </a>
        </>
      )}
    </li>
  );
};

const ResearchSection: React.FC<{ title: React.ReactNode; children: React.ReactNode }> = ({ title, children }) => (
  <section className="flex flex-col md:flex-row gap-4 md:gap-10 border-t border-stone-200 pt-8 first:border-0 first:pt-0">
    <div className="md:w-64 shrink-0">
      <h2 className="text-2xl font-serif font-bold text-academic-900 sticky top-24">
        {title}
      </h2>
    </div>
    <ul className="flex-1 min-w-0 list-disc space-y-5 pl-5 marker:text-stone-600">
      {children}
    </ul>
  </section>
);

const Research: React.FC = () => {
  const working = PAPERS.filter(paper => paper.status === 'Working Paper');
  const wip = PAPERS.filter(paper => paper.status === 'Work in Progress');

  return (
    <div className="max-w-7xl mx-auto px-4 pt-6 pb-12 sm:px-6 sm:pt-8 sm:pb-16 lg:px-8">
      <div className="mb-6 border-b border-stone-200 pb-4">
        <h1 className="text-4xl font-serif font-bold text-academic-900 mb-2">Research</h1>
        <p className="text-stone-500 text-xl">
          My research focuses on labor economics and the economics of technology and innovation.
        </p>
      </div>

      <div className="space-y-8">
        {working.length > 0 && (
          <ResearchSection title="Working Papers">
            {working.map(paper => <ResearchEntry key={paper.id} paper={paper} />)}
          </ResearchSection>
        )}
        {wip.length > 0 && (
          <ResearchSection title="Selected Work in Progress">
            {wip.map(paper => <ResearchEntry key={paper.id} paper={paper} />)}
          </ResearchSection>
        )}
        {BOOK_CHAPTERS.length > 0 && (
          <ResearchSection title="Book Chapters">
            {BOOK_CHAPTERS.map(paper => <ResearchEntry key={paper.id} paper={paper} />)}
          </ResearchSection>
        )}
        {CHINESE_PUBLICATIONS.length > 0 && (
          <ResearchSection title={<><span lang="zh-Hans" className="font-research">中文发表</span><br />Chinese Publications</>}>
            {CHINESE_PUBLICATIONS.map(publication => (
              <li key={publication.id} lang="zh-Hans" className="font-research text-base sm:text-lg text-stone-600 leading-relaxed">
                <strong className="font-bold text-stone-800">{publication.citation}</strong>
                {publication.status ? `，${publication.status}。` : '。'}
              </li>
            ))}
          </ResearchSection>
        )}
      </div>
    </div>
  );
};

export default Research;

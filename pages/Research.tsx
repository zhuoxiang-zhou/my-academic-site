import React from 'react';
import { PAPERS, BOOK_CHAPTERS, CHINESE_PUBLICATIONS, SITE_CONFIG } from '../constants';
import { Paper } from '../types';

type ResearchEntryData = Pick<
  Paper,
  'title' | 'authors' | 'authorLinks' | 'journal' | 'journalStatus' | 'pdfUrl'
>;

export const ResearchEntry: React.FC<{
  paper: ResearchEntryData;
  language?: string;
  className?: string;
}> = ({ paper, language, className }) => {
  const otherAuthors = paper.authors.filter(author => author !== SITE_CONFIG.name);
  const journalStatus = paper.journalStatus?.trim().replace(/[,.;:]+$/, '');
  const isChinese = language?.startsWith('zh') ?? false;

  return (
    <li
      lang={language}
      className={`research-entry${className ? ` ${className}` : ''}`}
    >
      <h3 className="research-paper-title">{paper.title}</h3>
      {otherAuthors.length > 0 && (
        <p className="research-authors">
          {isChinese ? '(与 ' : '(with '}
          {otherAuthors.map((author, i) => {
            const url = paper.authorLinks?.[author];
            const isLast = i === otherAuthors.length - 1;
            const separator = i === 0
              ? ''
              : isChinese
                ? '、'
                : otherAuthors.length > 2 ? ', ' : ' ';
            const prefix = !isChinese && isLast && i > 0
              ? separator + 'and '
              : separator;

            return (
              <React.Fragment key={author}>
                {prefix}
                {url ? (
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {author}
                  </a>
                ) : author}
              </React.Fragment>
            );
          })}
          {isChinese ? '）' : ')'}
        </p>
      )}
      {(paper.journal || journalStatus) && (
        <p className="research-journal">
          {paper.journal && <em>{paper.journal}</em>}
          {paper.journal && '.'}
          {paper.journal && journalStatus && ' '}
          {journalStatus && `${journalStatus}.`}
        </p>
      )}
      {paper.pdfUrl && (
        <p className="research-download">
          <a href={paper.pdfUrl} aria-label={`Download PDF: ${paper.title}`}>
            [PDF]
          </a>
        </p>
      )}
    </li>
  );
};

const ResearchSection: React.FC<{
  id: string;
  title: React.ReactNode;
  children: React.ReactNode;
}> = ({ id, title, children }) => (
  <section className="research-section" aria-labelledby={id}>
    <h2 id={id}>{title}</h2>
    <ul className="research-list" role="list">
      {children}
    </ul>
  </section>
);

const Research: React.FC = () => {
  const working = PAPERS.filter(paper => paper.status === 'Working Paper');
  const wip = PAPERS.filter(paper => paper.status === 'Work in Progress');

  return (
    <div className="site-page research-page">
      <h1 className="sr-only">Research</h1>
      <div className="research-sections">
        {working.length > 0 && (
          <ResearchSection id="working-papers" title="Working Papers">
            {working.map(paper => <ResearchEntry key={paper.id} paper={paper} />)}
          </ResearchSection>
        )}
        {wip.length > 0 && (
          <ResearchSection id="work-in-progress" title="Selected Work in Progress">
            {wip.map(paper => <ResearchEntry key={paper.id} paper={paper} />)}
          </ResearchSection>
        )}
        {BOOK_CHAPTERS.length > 0 && (
          <ResearchSection id="book-chapters" title="Book Chapters">
            {BOOK_CHAPTERS.map(paper => <ResearchEntry key={paper.id} paper={paper} />)}
          </ResearchSection>
        )}
        {CHINESE_PUBLICATIONS.length > 0 && (
          <ResearchSection id="chinese-publications" title={<><span lang="zh-Hans" className="font-research">中文发表</span><br />Chinese Publications</>}>
            {CHINESE_PUBLICATIONS.map(publication => (
              <ResearchEntry
                key={publication.id}
                paper={publication}
                language="zh-Hans"
                className="font-research"
              />
            ))}
          </ResearchSection>
        )}
      </div>
    </div>
  );
};

export default Research;

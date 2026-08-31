import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { SiteLayout } from '../App';
import { ResearchEntry } from '../pages/Research';
import { Paper } from '../types';
import * as content from '../constants';

export { content };
export { getPhotoColumnCount } from '../pages/Photography';

/** Render the production layout with a deterministic, browser-free route. */
export function renderPage(pathname: string): string {
  return renderToStaticMarkup(
    <MemoryRouter initialEntries={[pathname]}>
      <SiteLayout />
    </MemoryRouter>,
  );
}

/** Exercise optional paper metadata without adding test records to the site. */
export function renderResearchEntry(paper: Paper): string {
  return renderToStaticMarkup(<ResearchEntry paper={paper} />);
}

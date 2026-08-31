import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { SiteLayout } from '../App';
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

import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { before, test } from 'node:test';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { build } from 'vite';

let renderPage;
let content;
let getPhotoColumnCount;
let stylesheet;

before(async () => {
  // Use the production compiler without a browser, network port, or generated
  // files. CommonJS keeps the router and renderer on the same module instance.
  const bundle = await build({
    root: fileURLToPath(new URL('..', import.meta.url)),
    configFile: false,
    logLevel: 'silent',
    build: {
      ssr: fileURLToPath(new URL('./layout-renderer.tsx', import.meta.url)),
      write: false,
      minify: false,
      rollupOptions: { output: { format: 'cjs' } },
    },
  });
  const chunks = bundle.output.filter(output => output.type === 'chunk');
  assert.equal(chunks.length, 1);
  const compiledModule = { exports: {} };
  const runModule = new Function('require', 'module', 'exports', chunks[0].code);
  runModule(createRequire(import.meta.url), compiledModule, compiledModule.exports);
  ({ renderPage, content, getPhotoColumnCount } = compiledModule.exports);
  stylesheet = await readFile(new URL('../index.css', import.meta.url), 'utf8');
});

function escapeText(text) {
  return renderToStaticMarkup(React.createElement('span', null, text))
    .replace(/^<span>|<\/span>$/g, '');
}

for (const pathname of ['/', '/research', '/teaching', '/photography']) {
  test(`${pathname} retains the name, all navigation links, and one active page`, () => {
    const html = renderPage(pathname);
    assert.ok(html.includes('class="site-sidebar"'));
    assert.ok(html.includes(escapeText(`${content.SITE_CONFIG.name} — Home`)));
    assert.ok(html.includes('<nav class="sidebar-navigation" aria-label="Main navigation">'));
    for (const label of ['Home', 'Research', 'Teaching', 'Photography']) {
      assert.ok(html.includes(`>${label}</a>`), `Missing navigation: ${label}`);
    }
    const activeLinks = html.match(/<a\b[^>]*aria-current="page"[^>]*>/g) || [];
    assert.equal(activeLinks.length, 1);
    assert.ok(activeLinks[0].includes(`href="${pathname}"`));
    assert.match(html, /<main id="main-content" tabindex="-1"/);
    assert.ok(html.includes('Skip to content'));
    assert.ok(html.includes('class="site-footer"'));
  });
}

test('home preserves the biography, portrait, full name, and contact links', () => {
  const html = renderPage('/');
  assert.equal(content.SITE_CONFIG.name, 'Zhuoxiang (Shawn) Zhou');
  assert.ok(html.includes(escapeText(content.SITE_CONFIG.bio)));
  assert.ok(html.includes(escapeText(content.SITE_CONFIG.bio2)));
  assert.ok(html.includes('src="/images/bio.jpg"'));
  assert.ok(html.includes(`<h1 class="sr-only">${content.SITE_CONFIG.name}</h1>`));
  assert.ok(html.includes(`href="mailto:${content.SITE_CONFIG.email}"`));
  assert.ok(html.includes('href="/cv.pdf"'));
  assert.ok(html.includes(`href="${content.SITE_CONFIG.linkedin}"`));
});

test('research preserves papers, collaborators, and Chinese publications', () => {
  const html = renderPage('/research');
  for (const paper of [...content.PAPERS, ...content.BOOK_CHAPTERS]) {
    assert.ok(html.includes(escapeText(paper.title)), paper.title);
    for (const author of paper.authors) assert.ok(html.includes(escapeText(author)), author);
  }
  for (const publication of content.CHINESE_PUBLICATIONS) {
    assert.ok(html.includes(escapeText(publication.citation)));
  }
  assert.ok(!html.includes('sticky top-24'), 'Section headings must not overlap other content');
});

test('teaching preserves each course and its description', () => {
  const html = renderPage('/teaching');
  for (const course of content.COURSES) {
    assert.ok(html.includes(escapeText(course.title)));
    assert.ok(html.includes(escapeText(course.description)));
    assert.ok(html.includes(escapeText(course.semester)));
  }
});

test('photography preserves featured images, quotations, and the expand control', () => {
  const html = renderPage('/photography');
  const featured = content.PHOTOS.filter(photo => photo.featured);
  for (const photo of featured) {
    assert.ok(html.includes(`src="${photo.url}"`));
    assert.ok(html.includes(escapeText(photo.literaryQuote.text)));
  }
  assert.ok(html.includes(`View ${content.PHOTOS.length - featured.length} more photographs`));
});

test('photography columns adapt to available gallery width at both boundaries', () => {
  for (const [width, expected] of [[0, 1], [180, 1], [599, 1], [600, 2], [959, 2], [960, 3], [1400, 3]]) {
    assert.equal(getPhotoColumnCount(width), expected, `Gallery width ${width}`);
  }
});

test('layout contract fixes the rail and reserves the same width in the page', () => {
  const sidebar = stylesheet.match(/\.site-sidebar\s*\{([^}]+)\}/)[1];
  const page = stylesheet.match(/\.site-content\s*\{([^}]+)\}/)[1];
  assert.match(sidebar, /position:\s*fixed/);
  assert.match(sidebar, /width:\s*var\(--sidebar-width\)/);
  assert.match(page, /margin-left:\s*var\(--sidebar-width\)/);
  assert.match(sidebar, /overflow-y:\s*auto/);
  assert.doesNotMatch(page, /overflow(?:-y)?:\s*(?:auto|scroll|hidden)/);
});

test('narrow-screen layout keeps a compact rail and stacks the home content', () => {
  assert.match(stylesheet, /@media \(max-width: 600px\)/);
  assert.match(stylesheet, /--sidebar-width:\s*7\.5rem/);
  assert.match(stylesheet, /@container site-content \(max-width: 42rem\)/);
  assert.match(stylesheet, /\.home-grid\s*\{\s*grid-template-columns:\s*minmax\(0, 1fr\)/);
});

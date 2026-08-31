import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { before, test } from 'node:test';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { build } from 'vite';

let renderPage;
let renderResearchEntry;
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
  ({ renderPage, renderResearchEntry, content, getPhotoColumnCount } = compiledModule.exports);
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
    assert.doesNotMatch(html, /<footer\b|site-footer|All rights reserved\./);
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

test('home contact links replace the job caption directly below the portrait', () => {
  const html = renderPage('/');
  const profile = html.match(/<div class="home-profile">([\s\S]*?)<div class="home-biography">/)[1];
  assert.ok(profile.includes('src="/images/bio.jpg"'));
  assert.ok(profile.indexOf('class="home-portrait"') < profile.indexOf('class="home-links"'));
  assert.equal((html.match(/class="home-links"/g) || []).length, 1);
  for (const [label, href] of [
    ['Email', `mailto:${content.SITE_CONFIG.email}`],
    ['CV', '/cv.pdf'],
    ['LinkedIn', content.SITE_CONFIG.linkedin],
  ]) {
    assert.ok(profile.includes(`href="${href}"`));
    assert.equal((html.match(new RegExp(`>${label}</a>`, 'g')) || []).length, 1);
  }
  assert.doesNotMatch(profile, /home-affiliation|Predoctoral Research Fellow/);
  assert.ok(!profile.includes(escapeText(content.SITE_CONFIG.title)));
  assert.doesNotMatch(stylesheet, /\.home-affiliation\b|\.site-footer\b/);
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

test('desktop proportions use a narrower rail and a bounded portrait column', () => {
  const root = stylesheet.match(/:root\s*\{([^}]+)\}/)[1];
  const grid = stylesheet.match(/\.home-grid\s*\{([^}]+)\}/)[1];
  const portrait = stylesheet.match(/\.home-portrait\s*\{([^}]+)\}/)[1];
  assert.match(root, /--sidebar-width:\s*clamp\(12\.5rem, 20vw, 20rem\)/);
  assert.match(root, /--portrait-width:\s*17rem/);
  assert.match(grid, /grid-template-columns:\s*minmax\(0, var\(--portrait-width\)\) minmax\(0, 1fr\)/);
  assert.match(portrait, /width:\s*100%/);
  assert.match(portrait, /max-width:\s*var\(--portrait-width\)/);
});

test('page uses the smaller right gutter to widen the content area', () => {
  const root = stylesheet.match(/:root\s*\{([^}]+)\}/)[1];
  const page = stylesheet.match(/\.site-page\s*\{([^}]+)\}/)[1];
  assert.match(root, /--content-right-inset:\s*clamp\(1rem, 2vw, 2rem\)/);
  assert.match(page, /max-width:\s*90rem/);
  assert.match(page, /padding:\s*4\.5rem var\(--content-right-inset\) 3rem var\(--content-inset\)/);
});

test('reference sidebar uses a bold uppercase name and undecorated navigation', () => {
  const html = renderPage('/research');
  const sidebar = html.match(/<aside\b[^>]*>([\s\S]*?)<\/aside>/)[1];
  const name = stylesheet.match(/\.sidebar-name\s*\{([^}]+)\}/)[1];
  assert.ok(sidebar.includes(`<span>${content.PROFILE_NAME.given}</span>`));
  assert.ok(sidebar.includes(`<span>${content.PROFILE_NAME.family}</span>`));
  assert.ok(!sidebar.includes('sidebar-nickname'));
  assert.ok(!sidebar.includes('sidebar-affiliation'));
  assert.match(name, /font-family:\s*Arial,/);
  assert.match(name, /font-weight:\s*700/);
  assert.match(name, /text-transform:\s*uppercase/);
  assert.doesNotMatch(stylesheet, /\.sidebar-navigation[^{}]*::before/);
});

test('reference sidebar navigation spacing is independent of the home content', () => {
  const sidebar = stylesheet.match(/\.site-sidebar\s*\{([^}]+)\}/)[1];
  assert.match(sidebar, /grid-template-rows:\s*var\(--sidebar-nav-offset\) auto/);
  assert.match(stylesheet, /--sidebar-nav-offset:\s*clamp\(15rem, 40vh, 30rem\)/);
  assert.match(stylesheet, /--sidebar-nav-offset:\s*8rem/);
});

test('research hides the page title while preserving its description and accessible heading', () => {
  const html = renderPage('/research');
  const header = html.match(/<header class="research-header">([\s\S]*?)<\/header>/)[1];
  assert.ok(html.includes('<h1 class="sr-only">Research</h1>'));
  assert.doesNotMatch(header, /<h1\b/);
  assert.ok(header.includes('Labor economics and the economics of technology and innovation.'));
  assert.doesNotMatch(stylesheet, /\.research-header h1\s*\{/);
});

test('research reference uses unbulleted sections without divider classes', () => {
  const html = renderPage('/research');
  const research = html.match(/<div class="site-page research-page">([\s\S]*?)<\/main>/)[1];
  assert.ok(research.includes('Labor economics and the economics of technology and innovation.'));
  assert.ok(research.includes('<ul class="research-list" role="list">'));
  assert.ok(research.includes('aria-labelledby="working-papers"'));
  assert.ok(research.includes('<h2 id="working-papers">Working Papers</h2>'));
  assert.doesNotMatch(research, /list-disc|border-t|border-b/);
  const listStyles = stylesheet.match(/\.research-list\s*\{([^}]+)\}/)[1];
  assert.match(listStyles, /list-style:\s*none/);
  assert.match(listStyles, /padding:\s*0/);
});

test('research titles, authors, and journal details occupy distinct blocks', () => {
  const paper = content.PAPERS[0];
  const html = renderResearchEntry(paper);
  assert.ok(html.includes(`<h3 class="research-paper-title">${escapeText(paper.title)}</h3>`));
  assert.match(html, /<\/h3><p class="research-authors">with /);
  assert.match(html, /<\/p><p class="research-journal">/);
  assert.ok(html.includes(`<em>${escapeText(paper.journal)}</em>`));
  assert.ok(html.includes(escapeText(paper.journalStatus.trim())));
  assert.ok(html.includes(`href="${paper.authorLinks['Wei Huang']}"`));
});

test('research author rows handle zero, one, two, and three collaborators', () => {
  for (const [authors, expected] of [
    [[], null],
    [[content.SITE_CONFIG.name], null],
    [['Alice'], 'with Alice'],
    [['Alice', 'Bob'], 'with Alice and Bob'],
    [['Alice', content.SITE_CONFIG.name, 'Bob', 'Carol'], 'with Alice, Bob, and Carol'],
  ]) {
    const html = renderResearchEntry({ ...content.PAPERS[4], authors });
    const row = html.match(/<p class="research-authors">([\s\S]*?)<\/p>/);
    assert.equal(row ? row[1].replace(/<[^>]*>/g, '') : null, expected);
  }
});

test('research optional metadata and PDF links do not create empty lines', () => {
  const paper = { ...content.PAPERS[4], authors: [] };
  const plain = renderResearchEntry(paper);
  assert.ok(!plain.includes('research-authors'));
  assert.ok(!plain.includes('research-journal'));
  assert.ok(!plain.includes('research-download'));
  const linked = renderResearchEntry({ ...paper, pdfUrl: '/test-paper.pdf', journalStatus: 'Under review' });
  assert.ok(linked.includes('<p class="research-journal">Under review</p>'));
  assert.ok(linked.includes('href="/test-paper.pdf"'));
  assert.ok(linked.includes(`aria-label="Download PDF: ${escapeText(paper.title)}"`));
});

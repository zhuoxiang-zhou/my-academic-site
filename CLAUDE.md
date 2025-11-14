# CLAUDE.md - AI Assistant Guide

## Project Overview

This is an academic personal website for Zhuoxiang (Shawn) Zhou, built with Next.js. The site showcases academic research, teaching experience, and personal photography. It features a sophisticated seasonal theming system and a single-page application architecture with tab-based navigation.

**Live Site**: https://shawn-zhou.com

## Tech Stack

- **Framework**: Next.js 15.5.4 (App Router)
- **React**: 19.1.0
- **Styling**: Tailwind CSS 4
- **Icons**: lucide-react 0.545.0
- **Build Tools**: Turbopack (Next.js built-in)
- **Font**: Geist Sans & Geist Mono (from next/font)

## Project Structure

```
my-academic-site/
├── app/
│   ├── components/
│   │   ├── SeasonalTheme.js    # Seasonal theming system
│   │   └── Other.js             # Photography gallery component
│   ├── backup/
│   │   └── page_unseasonal.js   # Backup version without seasonal features
│   ├── favicon.ico
│   ├── globals.css              # Global styles & Tailwind imports
│   ├── icon.js                  # Dynamic favicon generation
│   ├── layout.js                # Root layout with metadata
│   ├── page.js                  # Main page component
│   └── sitemap.js               # SEO sitemap generation
├── public/
│   ├── photos/                  # Photography gallery images
│   ├── bio_photo.jpg            # Profile photo
│   ├── cv.pdf                   # Curriculum vitae
│   └── *.svg                    # Icon assets
├── .gitignore
├── eslint.config.mjs            # ESLint configuration
├── jsconfig.json                # JavaScript configuration
├── next.config.mjs              # Next.js configuration
├── package.json
├── postcss.config.mjs           # PostCSS configuration
└── README.md
```

## Key Features

### 1. Single-Page Application with Tabs
- Four main sections: Bio, Research, Teaching, Other
- Tab-based navigation with state management
- Smooth transitions between sections

### 2. Seasonal Theming System
Located in `app/components/SeasonalTheme.js`:
- **Six seasonal themes**: Spring, Summer, Fall, Winter, Christmas, Chinese New Year
- **Auto-detection**: Based on current date
- **Manual override**: User can manually select theme (persisted in localStorage)
- **Animated elements**: Falling petals, leaves, snow, lanterns
- **Color schemes**: Custom gradients and accent colors per season
- **Special features**: Christmas tree on Bio tab during Christmas season

### 3. Photography Gallery
Located in `app/components/Other.js`:
- Manual column-based layout (3 columns on desktop)
- Lightbox modal for full-size viewing
- Keyboard navigation (←/→ arrows, Esc)
- Hover effects and smooth transitions
- Custom aspect ratios per photo

### 4. SEO Optimization
- Structured metadata in `layout.js`
- JSON-LD schema markup for Person type
- Dynamic sitemap generation
- Meta tags for Open Graph
- Robots.txt directives

## Architecture Patterns

### Client-Side Rendering
Most components use `'use client'` directive because they require:
- React hooks (useState, useEffect, useContext)
- Browser APIs (localStorage, window events)
- Interactive features

### Component Organization
- **Layout components**: `layout.js` (Server Component)
- **Page components**: `page.js` (Client Component)
- **Feature components**: `SeasonalTheme.js`, `Other.js` (Client Components)
- **Context providers**: `SeasonalThemeProvider` for global theme state

### State Management
- **Local state**: useState for tab navigation, modal state
- **Context API**: SeasonalContext for theme sharing across components
- **Browser storage**: localStorage for theme persistence

## Development Workflows

### Starting Development Server
```bash
npm run dev
# Server runs on http://localhost:3000
```

### Building for Production
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

### Environment Notes
- ESLint errors are ignored during builds (see `next.config.mjs`)
- Turbopack is enabled for faster development and builds

## Key Conventions for AI Assistants

### 1. Component Structure
- All interactive components must use `'use client'` directive
- Server components for static content and metadata only
- Keep components focused and single-responsibility

### 2. Styling Conventions
- Use Tailwind CSS utility classes
- Follow existing color scheme patterns
- Maintain responsive design (mobile-first approach)
- Use semantic HTML elements

### 3. Content Updates

#### Adding Research Papers
Edit `app/page.js`, Research section:
- Working Papers: Lines 180-254
- Work in Progress: Lines 258-272
- Book Chapters: Lines 275-291

Format:
```jsx
<div>
  <h4 className="text-lg font-medium text-gray-900 mb-2">
    <b>Paper Title</b>
  </h4>
  <p className="text-md text-gray-600 mb-2">(with Co-authors)</p>
  <div className="flex gap-3 items-center text-base">
    <span className="text-md text-gray-600 mb-2">
      Status, <b><i>Journal Name</i></b>
    </span>
  </div>
</div>
```

#### Adding Teaching Experience
Edit `app/page.js`, Teaching section (lines 296-323):
```jsx
<div>
  <p className="text-gray-900 font-medium mb-1">
    Course Name (Level), Semester Year
  </p>
  <p className="text-gray-600 text-sm">
    Description and responsibilities
  </p>
</div>
```

#### Adding Photos to Gallery
1. Add image to `/public/photos/`
2. Edit `app/components/Other.js`, update `photos` array (lines 9-190)
3. Specify: `src`, `caption`, `description`, `column` (1-3), `order`, `size` or `aspectRatio`

Size options:
- `'tall'`: aspect-[3/4]
- `'extra-tall'`: aspect-[2/3]
- `'wide'`: aspect-[4/3]
- `'extra-wide'`: aspect-[16/9]
- `'normal'` or default: aspect-square
- Custom: Use `aspectRatio: '9/20'` format

### 4. Seasonal Theme Customization

To modify seasonal themes, edit `app/components/SeasonalTheme.js`:
- Season dates: Lines 38-90 in `detectSeason()`
- Color schemes: Lines 121-194 in `seasons` object
- Animations: Lines 280-410 in `SeasonalAnimation` component

### 5. SEO Best Practices
- Update metadata in `app/layout.js` when site content changes
- Update sitemap priorities in `app/sitemap.js` for important sections
- Add JSON-LD structured data for new content types

### 6. File Naming Conventions
- Components: PascalCase (e.g., `SeasonalTheme.js`)
- Pages: lowercase (e.g., `page.js`, `layout.js`)
- Images: snake_case with descriptive names (e.g., `bio_photo.jpg`)

### 7. Git Workflow
- Branch naming: Use `claude/` prefix (e.g., `claude/claude-md-mhz2q13t362jx4um-01CyEFX4SPQjjTAQSrRZfPwW`)
- Commit messages: Clear, descriptive (e.g., "Update paper status", "Add new teaching section")
- Always push to designated feature branch

### 8. Common Tasks

#### Update CV
Replace `/public/cv.pdf` with new version

#### Update Profile Photo
Replace `/public/bio_photo.jpg` (recommended: 800x800px, circular crop)

#### Modify Navigation Tabs
Edit `app/page.js` header section (lines 40-81)

#### Change Site Colors
- Seasonal colors: `app/components/SeasonalTheme.js`
- Base styles: `app/globals.css`
- Tailwind config: Uses inline theme in `globals.css`

#### Add New Tab Section
1. Add button in header navigation (line 40-81 in `page.js`)
2. Add corresponding content section (after line 325)
3. Update `activeTab` state handling
4. Update sitemap.js with new section

## Performance Considerations

- Images should be optimized before upload (use WebP or optimized JPEG)
- Photo gallery images: Keep under 500KB each
- Lazy loading is automatic in Next.js for images
- Seasonal animations use CSS transforms for better performance

## Accessibility

- Semantic HTML elements (`<header>`, `<main>`, `<footer>`, `<nav>`)
- ARIA labels on interactive elements
- Keyboard navigation support in lightbox
- Focus states on interactive elements
- Alt text on all images

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for mobile, tablet, desktop
- Graceful degradation for older browsers
- JavaScript required for full functionality

## Common Pitfalls to Avoid

1. **Hydration Errors**: Always use `'use client'` for components with browser APIs
2. **Image Paths**: Use leading slash for public assets (`/photos/image.jpg`)
3. **State Management**: Don't mix server and client state incorrectly
4. **Seasonal Theme**: Check mounted state before rendering animations
5. **Photo Gallery**: Maintain column balance when adding new photos
6. **Build Errors**: Run `npm run build` locally before pushing

## Debugging Tips

- Check browser console for client-side errors
- Use React DevTools for component inspection
- Verify seasonal theme localStorage: `localStorage.getItem('seasonalTheme')`
- Test responsive design at various breakpoints
- Validate HTML structure for SEO

## Deployment

- Platform: Vercel (recommended for Next.js)
- Build command: `npm run build`
- Output directory: `.next`
- Environment variables: None currently required
- Custom domain: shawn-zhou.com

## Contact Information

For questions about the codebase or site updates:
- Email: zhuoxiang.zhou@gmail.com
- LinkedIn: https://linkedin.com/in/zhuoxiang-zhou-b25478288/

## Additional Notes

- The `/app/backup` directory contains previous versions for reference
- ESLint is configured but warnings are not blocking builds
- The site is primarily static with client-side interactivity
- No database or backend API required
- All content is hardcoded in components (future: consider CMS)

## Future Improvements to Consider

1. **Content Management**: Consider headless CMS for easier content updates
2. **Blog Section**: Add markdown-based blog functionality
3. **Analytics**: Integrate privacy-friendly analytics
4. **Performance**: Add image optimization pipeline
5. **Testing**: Add unit tests for components
6. **Internationalization**: Support for multiple languages
7. **Dark Mode**: Complement seasonal themes with dark mode
8. **Animation Performance**: Optimize seasonal animations for mobile

---

**Last Updated**: November 14, 2025
**Version**: 0.1.0
**Maintainer**: Zhuoxiang (Shawn) Zhou

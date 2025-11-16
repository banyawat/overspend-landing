# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **OverSpend Landing Page** - a high-performance, SEO-optimized landing page built with Astro and Tailwind CSS to showcase the OverSpend subscription tracking application. The landing page is designed for conversion and performance.

## Tech Stack

- **Framework**: Astro (static site generation)
- **Styling**: Tailwind CSS v4 with Vite plugin
- **Deployment**: Optimized for Vercel, Netlify, and static hosting
- **Package Manager**: npm (or pnpm preferred)
- **Node.js**: >= 18.0.0 (required)

## Development Commands

```bash
# Install dependencies
npm install

# Development server with hot reload
npm run dev

# Build for production (static site)
npm run build

# Preview production build locally
npm run preview

# Astro CLI commands
npm run astro add [integration]
npm run astro check
```

## Project Architecture

```
├── public/                 # Static assets (images, favicon, etc.)
├── src/
│   ├── layouts/           # Astro layout components
│   │   └── Layout.astro   # Main layout with navigation, footer, SEO meta
│   ├── pages/             # Astro pages (file-based routing)
│   │   └── index.astro    # Main landing page
│   └── styles/
│       └── global.css     # Tailwind CSS imports
├── astro.config.mjs       # Astro configuration (optimized for static)
├── package.json           # Dependencies and scripts
└── README.md             # Project documentation
```

## Key Development Practices

### Astro-Specific Guidelines

1. **Static First**: This is a static site - avoid server-side functionality
2. **Minimal JavaScript**: Only use islands when absolutely necessary
3. **SEO Optimization**: All pages should have proper meta tags and structured data
4. **Performance**: Optimize for Core Web Vitals and fast loading

### File Organization

- **Layouts**: Use `src/layouts/Layout.astro` as the base layout
- **Pages**: File-based routing in `src/pages/`
- **Assets**: Static files go in `public/`
- **Styles**: Global styles in `src/styles/global.css`

### Tailwind CSS Guidelines

- Use utility-first approach for styling
- Maintain consistent spacing and color scheme
- Responsive design with mobile-first approach
- Use semantic color variables for consistency

### Content Management

- **Hero Section**: Update in `src/pages/index.astro`
- **Features**: Modify the features grid in the landing page
- **Pricing**: Update pricing information in the landing page
- **Navigation/Footer**: Edit in `src/layouts/Layout.astro`

## SEO & Performance Optimization

### Built-in Features

- **Static Site Generation**: Pre-built for optimal performance
- **Meta Tags**: Complete Open Graph and Twitter card support
- **Structured Data**: JSON-LD schema for search engines
- **Image Optimization**: Proper sizing and lazy loading
- **Prefetching**: Smart link prefetching enabled

### Customization

Update SEO metadata in `src/layouts/Layout.astro`:
- Change site URL in `astro.config.mjs`
- Update meta descriptions and titles
- Modify structured data for specific applications
- Add custom CSS for performance improvements

## Development Workflow

### When Making Changes

1. **Content Updates**: Edit `.astro` files directly
2. **Style Changes**: Use Tailwind utilities in component classes
3. **New Sections**: Add as new components or inline in pages
4. **Performance**: Test with `npm run build` and `npm run preview`

### Before Deployment

1. Run `npm run build` to ensure no build errors
2. Test with `npm run preview` locally
3. Check SEO meta tags and structured data
4. Validate responsive design on different screen sizes

## Deployment Configuration

### Vercel (Recommended)

- **Build Command**: `npm run build`
- **Output Directory**: `dist/`
- **Node Version**: 18.x or higher

### Static Hosting

- The `dist/` folder contains all static files
- No server-side requirements
- Can be deployed to any static hosting service

## Content Customization Guide

### Colors & Branding

Primary colors used throughout:
- **Blue**: `bg-blue-600`, `text-blue-600`, `border-blue-600`
- **Indigo**: `bg-indigo-600`, `text-indigo-600`
- **Gradients**: `from-blue-600 to-indigo-600`

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: `font-bold` with responsive sizes
- **Body**: `text-gray-600` for secondary text

### Components Structure

1. **Navigation**: Fixed header with smooth scroll
2. **Hero**: Main value proposition with CTA
3. **Features**: 3-column grid with icons
4. **How It Works**: 3-step process
5. **Pricing**: 2-tier comparison table
6. **CTA**: Final conversion section
7. **Footer**: Complete site information

## Testing & Quality Assurance

### Performance Testing

- Use Lighthouse for Core Web Vitals
- Test loading speed on mobile connections
- Verify image optimization
- Check unused CSS/JS

### SEO Testing

- Validate meta tags and titles
- Test structured data with Google's Rich Results Test
- Check Open Graph and Twitter cards
- Verify sitemap generation

### Responsive Testing

- Mobile: 320px and up
- Tablet: 768px and up
- Desktop: 1024px and up
- Test touch targets and navigation

## Important Notes

- This is a **landing page**, not the full application
- Focus on conversion and user experience
- Keep loading times under 2 seconds
- Maintain accessibility standards (WCAG 2.1 AA)
- Test on multiple browsers and devices

## Current Status

✅ Complete landing page with all sections
✅ Responsive design for all devices
✅ SEO optimization with meta tags and structured data
✅ Performance optimization for fast loading
✅ Ready for deployment to static hosting

## Next Steps

1. Replace placeholder images with actual screenshots
2. Update links to point to the actual application
3. Add analytics tracking as needed
4. Set up custom domain and deployment
5. Monitor performance and SEO metrics
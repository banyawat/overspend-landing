# OverSpend Landing Page

> The official landing page for OverSpend - a subscription tracking application that helps users manage and save money on recurring payments.

## 🚀 About This Project

This is a high-performance landing page built with **Astro** and **Tailwind CSS** to showcase the OverSpend subscription tracking application. The landing page is optimized for speed, SEO, and conversion.

### Key Features

- ⚡ **Lightning Fast**: Built with Astro's static site generation for optimal performance
- 🎨 **Modern Design**: Beautiful, responsive design using Tailwind CSS
- 🔍 **SEO Optimized**: Complete with meta tags, structured data, and sitemap
- 📱 **Mobile First**: Fully responsive design that works on all devices
- ♿ **Accessible**: Built with accessibility best practices
- 🌐 **Performance Optimized**: Minimal JavaScript, optimized images, and fast loading

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Deployment**: Optimized for Vercel, Netlify, and other static hosting platforms
- **Icons**: Inline SVG icons for optimal performance

## 📦 Project Structure

```
├── public/                 # Static assets (images, favicons, etc.)
├── src/
│   ├── layouts/           # Astro layout components
│   │   └── Layout.astro   # Main layout with navigation and footer
│   ├── pages/             # Astro pages (auto-routed)
│   │   └── index.astro    # Landing page
│   └── styles/
│       └── global.css     # Global Tailwind styles
├── astro.config.mjs       # Astro configuration
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** version >= 18.0.0
- **npm** or **pnpm** package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/overspend-landing.git
cd overspend-landing

# Install dependencies
npm install

# Start development server
npm run dev

# Open your browser
# Navigate to http://localhost:4321
```

### Development Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Build your production site to `./dist/` |
| `npm run preview` | Preview your build locally, before deploying |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI |

## 🎨 Customization

### Colors

The landing page uses a blue color scheme. You can customize the colors by modifying the Tailwind classes in the Astro components:

- **Primary Blue**: `bg-blue-600`, `text-blue-600`
- **Secondary Indigo**: `bg-indigo-600`, `text-indigo-600`
- **Gradient**: `from-blue-600 to-indigo-600`

### Content

Update the following files to customize the landing page:

1. **`src/pages/index.astro`** - Main landing page content
2. **`src/layouts/Layout.astro`** - Navigation, footer, and meta information
3. **`public/`** - Replace images, favicon, and other static assets

### Typography

The landing page uses the **Inter** font family. You can change this in the Layout component's `<style>` section.

## 📈 SEO & Performance

### Built-in Optimizations

- **Static Site Generation**: Pre-built pages for instant loading
- **Minimal JavaScript**: Only essential interactivity
- **Optimized Images**: Proper image sizing and lazy loading
- **SEO Meta Tags**: Complete meta information for search engines
- **Structured Data**: JSON-LD schema for better search visibility
- **Performance Budget**: Optimized for Core Web Vitals

### Customization

Update the meta tags and structured data in `src/layouts/Layout.astro`:

- Change the site URL in the configuration
- Update Open Graph and Twitter card metadata
- Modify structured data for your specific application

## 🚀 Deployment

This landing page is optimized for deployment on any static hosting platform:

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify

```bash
# Build the site
npm run build

# Deploy the dist/ folder to Netlify
```

### Other Platforms

The `dist/ folder contains all static files ready for deployment to:
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Any static hosting service

## 🌟 Features

### Landing Page Sections

1. **Hero Section**: Eye-catching headline with call-to-action buttons
2. **Features Grid**: Six key features with icons and descriptions
3. **How It Works**: Step-by-step user journey
4. **Pricing Plans**: Free and Pro tier comparison
5. **Call-to-Action**: Final conversion section
6. **Navigation**: Fixed header with smooth scroll navigation
7. **Footer**: Complete site information and links

### Responsive Design

- **Mobile**: Single column layout with collapsible navigation
- **Tablet**: Optimized spacing and touch targets
- **Desktop**: Full multi-column layout with hover effects

### Performance Features

- **Preloading**: Critical resources are preloaded
- **Optimization**: CSS and JavaScript are minified
- **Caching**: Proper cache headers for static assets
- **Compression**: Gzip/Brotli compression support

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Live Demo**: https://overspend.app
- **Main Application**: [OverSpend App Repository](https://github.com/yourusername/overspend-app)
- **Documentation**: [OverSpend Docs](https://docs.overspend.app)
- **Support**: support@overspend.app

---

Built with ❤️ using [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/)
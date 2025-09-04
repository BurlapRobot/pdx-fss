# Sample CMS - Next.js with Decap CMS

A Next.js-based content management system using Decap CMS (formerly Netlify CMS) for easy content editing.

## Features

- 📝 **Decap CMS Integration** - Visual content editor
- 🎨 **Tailwind CSS** - Modern styling with typography plugin
- 📱 **Responsive Design** - Works on all devices
- 🚀 **Next.js 15** - Latest features with Turbopack
- 🔄 **Git-based Content** - Version control for your content
- 🖼️ **Image Upload Support** - Easy media management

## Pages

- **Hero Section** (`/`) - Front page
- **Why It Matters** (`/why-it-matters`) - Why It Matters page
- **Get Involved** (`/get-involved`) - How to participate

## Getting Started

### Prerequisites

- Node.js 18 or higher
- Git
- Netlify account (for deployment)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/sample-cms.git
cd sample-cms
```

2. Install dependencies:
```bash
npm install
```

3. Install global dependencies:
```bash
npm install -g netlify-cli decap-server
```

### Local Development

1. **Start the local CMS backend** (in one terminal):
```bash
decap-server
```

2. **Start the Next.js development server** (in another terminal):
```bash
npm run dev
```

3. **Access your site**:
   - Main site: [http://localhost:3000](http://localhost:3000)
   - CMS: [http://localhost:3000/admin](http://localhost:3000/admin)

### Using the CMS

1. Navigate to `http://localhost:3000/admin`
2. Click "Login with Netlify Identity" (for local development, this will work without authentication)
3. Select a page to edit from the left sidebar
4. Make your changes in the visual editor
5. Click "Publish" to save changes

## Content Structure

All content is stored in Markdown files in the `content/` directory:

```
content/
├── hero-section.md
├── why-it-matters.md
├── dangerous-areas.md
├── our-approach.md
├── action.md
├── volunteer.md
├── calendar.md
├── remember.md
├── stats-section.md
├── content-grid.md
├── navbar.md
└── victims/
    └── [victim files]
```

Each file follows this structure:
```markdown
---
title: "Page Title"
content: >-
# Your content here

This is the main content of the page.
---
```

## Deployment

### Deploy to Netlify

1. **Push your code to GitHub**:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy to Netlify**:
```bash
netlify deploy --prod
```

3. **Enable CMS features**:
   - Go to your Netlify dashboard
   - Navigate to "Site settings" > "Identity"
   - Click "Enable Identity"
   - Go to "Identity" > "Services" > "Git Gateway"
   - Click "Enable Git Gateway"

4. **Access your live CMS**:
   - Visit `https://your-site-name.netlify.app/admin`
   - Sign up for an account
   - Start editing content

### Build Settings

The project is configured with these Netlify build settings:
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: 18 (or higher)

## Configuration

### CMS Configuration

The CMS is configured in `public/admin/config.yml`:
- Backend: GitHub (with local development support)
- Media folder: `public/images/uploads`
- Collections: Pages with title and content fields

### Styling

- **Tailwind CSS** for utility-first styling
- **@tailwindcss/typography** for content styling
- Custom styles in `styles/globals.css`

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
├── components/          # React components
│   ├── Layout.js       # Main layout wrapper
│   ├── Navbar.js       # Navigation component
│   └── PreviewProvider.js # CMS preview handler
├── content/            # Markdown content files
├── pages/              # Next.js pages
│   ├── admin/          # CMS admin interface
│   ├── _app.js         # App wrapper
│   └── [page].js       # Dynamic page routes
├── public/             # Static assets
│   ├── admin/          # CMS configuration
│   └── images/         # Uploaded images
└── styles/             # Global styles
```

## Troubleshooting

### CMS Not Loading
- Ensure `decap-server` is running for local development
- Check that all scripts are loading in browser console
- Verify config.yml is accessible

### Build Errors
- Clear `.next` directory: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check Node.js version compatibility

### Styling Issues
- Ensure Tailwind CSS is properly configured
- Check that `styles/globals.css` is imported in `_app.js`
- Verify PostCSS configuration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `decap-server` and `npm run dev`
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

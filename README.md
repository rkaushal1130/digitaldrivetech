# Digital Drive Resource Tech Private Limited

Modern React website for Digital Drive Resource Tech Private Limited.

## Tech Stack

- React 19
- React Router DOM
- Create React App
- CSS-by-folder structure
- Reusable UI components

## Run project

### Install dependencies
```bash
npm install
```

### Start dev server
```bash
npm start
```

### Build for production
```bash
npm run build
```

### Run tests
```bash
npm test
```

## Project structure

```text
src/
├── assets/               # Images, icons, project media, team images
├── components/           # Page sections and reusable components
│   ├── about/            # About page sections
│   ├── contact/          # Contact page sections
│   ├── home/             # Home page sections
│   ├── layout/           # Navbar and footer
│   ├── portfolio/        # Portfolio page sections
│   ├── pricing/          # Pricing page sections
│   ├── services/         # Services page sections
│   ├── technologies/     # Technologies page sections
│   └── ui/               # Shared UI components
├── data/                 # Static data used by components
├── pages/                # Route-level pages
├── routes/               # React Router routes
├── styles/               # Global styles
└── utils/                # Shared helper functions
```

## How app is built

- `src/index.js` mounts React app into root
- `src/App.js` wraps app with `BrowserRouter`
- `src/components/layout/Navbar.jsx` and `Footer.jsx` stay on every page
- `src/routes/AppRoutes.jsx` maps URLs to pages
- Each page is split into small section components
- Each section keeps its own JSX + CSS file in same folder

## Routes

- `/` Home
- `/about` About
- `/services` Services
- `/portfolio` Portfolio
- `/technologies` Technologies
- `/pricing` Pricing
- `/contact` Contact
- `/website-development` Website Development
- `/blog` Blog & Resources

## Google Search Console Setup

Follow these steps to configure and monitor the production website in Google Search Console:

1. Open [Google Search Console](https://search.google.com/search-console).
2. Add and verify the production property: `https://www.digitaldrivetech.com/` (using DNS TXT record or HTML tag provided by Google).
3. Submit the production sitemap: `https://www.digitaldrivetech.com/sitemap.xml`.
4. Use the **URL Inspection** tool for priority page:
   `https://www.digitaldrivetech.com/website-development`
5. Test Live URL to confirm clean rendering, mobile usability, and structured data detection, then click **Request Indexing**.
6. Periodically monitor the **Page Indexing**, **Core Web Vitals**, and **Enhancements (Schema)** reports for ongoing performance.

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

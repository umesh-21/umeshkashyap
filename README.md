# Umesh Kashyap - Academic Portfolio (React)

A modern, responsive React-based academic portfolio website for Umesh Kashyap, PhD Scholar at IIT Bhilai.

## Features

- ⚡ Built with React for fast, interactive experience
- 🌙 Dark mode support with localStorage persistence
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎯 Publication filtering by category
- 🔗 Links to Google Scholar, GitHub, LinkedIn
- 📰 Easy publication management

## Project Structure

```
portfolio-react/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js & Navbar.css
│   │   ├── Hero.js & Hero.css
│   │   ├── Research.js & Research.css
│   │   ├── Publications.js & Publications.css
│   │   ├── Contact.js & Contact.css
│   │   ├── CV.js
│   │   └── Footer.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## Installation

1. Navigate to the project directory:
```bash
cd portfolio-react
```

2. Install dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

## Building for Production

Create an optimized production build:
```bash
npm run build
```

## Deployment to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Deploy:
```bash
npm run deploy
```

The site will be published at: `https://umesh-21.github.io/academic-portfolio/`

## Features

### Dark Mode
- Toggle between light and dark themes
- Preference is saved to localStorage
- Smooth transitions between themes

### Publication Filtering
- Filter publications by: All, Conference, Journal, Preprint
- Easy to add new publications (edit Publications.js)

### Responsive Design
- Mobile-first approach
- Hamburger menu on smaller screens
- Optimized for all screen sizes

### Navigation
- Smooth scrolling to sections
- Fixed navbar with scroll effect
- Responsive hamburger menu

## Technologies Used

- React 18
- CSS3 with CSS Variables
- JavaScript ES6+

## Customization

Edit the following to customize:
- `src/App.js` - Main app structure
- `src/components/` - Individual section components
- `src/App.css` - Global styles and CSS variables
- Publication data in `src/components/Publications.js`

---

© 2026 Mr. Umesh Kashyap

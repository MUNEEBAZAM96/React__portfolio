# Personal Portfolio Website

A modern, responsive portfolio website built with React and Vite. Showcase your skills, projects, and experience with a beautiful, animated interface.

## Features

- 🎨 Modern and beautiful UI design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast and optimized with Vite
- 🎭 Smooth animations and transitions
- 🌈 Gradient color scheme
- 📧 Contact form
- 🎯 Smooth scrolling navigation
- 💼 Project showcase section
- 🛠️ Skills display with progress bars

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Change "Your Name" to your actual name
   - Update the subtitle and description
   - Update social media links

2. **About Section** (`src/components/About.jsx`):
   - Modify the description text
   - Update statistics (projects, experience, clients)

3. **Skills Section** (`src/components/Skills.jsx`):
   - Add/remove skills
   - Update skill levels (percentage)
   - Add new skill categories if needed

4. **Projects Section** (`src/components/Projects.jsx`):
   - Replace placeholder projects with your actual projects
   - Update project images, descriptions, and links
   - Modify technologies used

5. **Contact Section** (`src/components/Contact.jsx`):
   - Update email, phone, and location
   - Connect the form to a backend service (e.g., Formspree, EmailJS)

6. **Footer** (`src/components/Footer.jsx`):
   - Update social media links
   - Change copyright text

### Styling

- Main color scheme is defined in `src/index.css` under `:root` variables
- Each component has its own CSS file for component-specific styles
- Modify colors, fonts, and spacing as needed

### Colors

The default color scheme uses:
- Primary: Indigo (`#6366f1`)
- Secondary: Purple (`#8b5cf6`)
- Accent: Pink (`#ec4899`)

You can change these in `src/index.css`:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #ec4899;
  /* ... */
}
```

## Project Structure

```
portfolio_site/
├── public/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **React Icons** - Icon library
- **CSS3** - Styling with modern features

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Made with ❤️ using React and Vite


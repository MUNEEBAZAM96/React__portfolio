# Muneeb Ur Rehman - Portfolio Website

A sleek, modern, and animated personal portfolio website built with Next.js, TypeScript, Tailwind CSS, Three.js, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with TypeScript for type safety
- **3D Animations**: Three.js integration with React Three Fiber for interactive 3D elements
- **Smooth Animations**: Framer Motion for beautiful transitions and animations
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode**: Professional dark theme (default) with toggle option
- **SEO Optimized**: Meta tags and server-side rendering
- **Performance**: Lazy loading and optimized images
- **Accessibility**: ARIA labels and keyboard navigation

## 📋 Sections

1. **Hero/Home**: Full-screen hero with 3D animated elements
2. **About**: Personal bio with education and interests
3. **Skills**: Animated skill cards with icons
4. **Experience**: Timeline layout for work experience
5. **Projects**: Interactive project cards with modals
6. **Certificates**: Certificate showcase with flip animations
7. **Contact**: Contact form with EmailJS integration

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MUNEEBAZAM96/React__portfolio.git
   cd portfolio_site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up EmailJS (Optional)**
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Get your Service ID, Template ID, and Public Key
   - Update the values in `components/Contact.tsx`

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Build for Production

```bash
npm run build
npm start
```

## 📦 Dependencies

### Core
- `next` - React framework
- `react` & `react-dom` - UI library
- `typescript` - Type safety

### Styling
- `tailwindcss` - Utility-first CSS framework
- `autoprefixer` & `postcss` - CSS processing

### Animations & 3D
- `framer-motion` - Animation library
- `three` - 3D graphics library
- `@react-three/fiber` - React renderer for Three.js
- `@react-three/drei` - Useful helpers for React Three Fiber

### Forms & Utilities
- `@emailjs/browser` - Email service integration
- `react-scroll` - Smooth scrolling
- `react-icons` - Icon library

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  navy: '#0A192F',
  teal: '#64FFDA',
  // ... more colors
}
```

### Content
Update personal information in:
- `components/Hero.tsx` - Hero section content
- `components/About.tsx` - About section
- `components/Experience.tsx` - Work experience
- `components/Projects.tsx` - Project showcase
- `components/Certificates.tsx` - Certificates
- `components/Contact.tsx` - Contact information

### 3D Elements
Modify Three.js components:
- `components/FloatingCode.tsx` - Hero 3D animation
- `components/ThreeJSBackground.tsx` - Background particles

## 📝 Notes

- Replace placeholder images with actual project screenshots
- Update resume PDF link in Hero section
- Configure EmailJS for contact form functionality
- Add your actual social media links
- Update Google Maps integration in Contact section

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Muneeb Ur Rehman**
- Email: muneebazam96@gmail.com
- Location: Islamabad, Pakistan
- LinkedIn: [Your LinkedIn](https://linkedin.com)
- GitHub: [@MUNEEBAZAM96](https://github.com/MUNEEBAZAM96)

---

Made with ❤️ using Next.js, TypeScript, and Three.js

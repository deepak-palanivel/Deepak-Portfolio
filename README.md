
# Deepak's Professional Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing web development and machine learning projects.

## 🚀 Features

- **Modern Design**: Dark theme with glassmorphism effects and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth scrolling, hover effects, and animated elements
- **Professional**: Clean, minimalistic design focused on showcasing skills and projects
- **Performance**: Optimized for fast loading and smooth user experience

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Shadcn/ui components
- **Icons**: Lucide React icons
- **Build Tool**: Vite
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd deepak-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:8080`

## 🚀 Deployment on Vercel

### Method 1: Deploy from GitHub (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a Vite project
   - Click "Deploy"

### Method 2: Deploy using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow the prompts**
   - Set up and deploy
   - Your site will be live in minutes!

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   └── ui/             # Shadcn UI components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
│   ├── Index.tsx       # Main portfolio page
│   └── NotFound.tsx    # 404 page
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🎨 Customization

### Colors & Theme
- Edit `src/index.css` for custom color schemes
- Modify `tailwind.config.ts` for extended design tokens

### Content
- Update personal information in `src/pages/Index.tsx`
- Replace project data in the `projects` array
- Modify skills in the `skills` array

### Links
- Update social media links in the contact section
- Add actual GitHub and project URLs
- Replace resume download link

## 📱 Sections

1. **Hero Section**: Introduction with call-to-action buttons
2. **About Me**: Personal introduction with profile display
3. **Skills**: Interactive skill bars with proficiency levels
4. **Projects**: Featured projects with tech stacks and links
5. **Experience**: Professional experience and internships
6. **Contact**: Contact form and social media links

## 🔧 Environment Variables

No environment variables required for basic setup. Add any API keys or external service configurations as needed.

## 📈 Performance Optimization

- Images are optimized and use modern formats
- CSS is purged and minified in production
- JavaScript is code-split for faster loading
- Fonts are preloaded for better performance

## 🐛 Troubleshooting

### Build Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Deployment Issues
- Ensure all imports are correct
- Check that build command succeeds locally
- Verify environment variables if using any

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📞 Contact

- **Email**: [your-email@example.com]
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]

---

**Built with ❤️ by Deepak**
```

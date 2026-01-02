# Personal Portfolio Website - Acamaro Cutcher

A modern, responsive personal portfolio website built with Next.js, TypeScript, and TailwindCSS. Features GitHub project integration, dark mode, and a beautiful UI design.

## Features

- 🌟 **Modern UI Design** - Clean, professional interface with smooth animations
- 🌙 **Dark Mode Support** - Toggle between light and dark themes
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🐙 **GitHub Integration** - Dynamically fetch and display repositories from GitHub
- 🔍 **Project Filtering** - Search projects by name, description, language, or sort by stars/updates
- 📧 **Contact Form** - Functional contact form with validation
- ⚡ **Performance Optimized** - Built with Next.js and optimized for speed
- 🎨 **Beautiful Components** - Modern UI with Lucide icons and TailwindCSS

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **API**: GitHub REST API
- **Deployment**: Ready for Vercel/Netlify

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd personal-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure GitHub Username**
   - Open `src/components/sections/Projects.tsx`
   - Replace `'your-github-username'` with your actual GitHub username

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Personal Information
Update the following files with your information:

- **Hero Section**: `src/components/sections/Hero.tsx` - Update name, bio, and links
- **About Section**: `src/components/sections/About.tsx` - Add your education, experience, and skills
- **Contact Section**: `src/components/sections/Contact.tsx` - Update contact information and social links

### Styling
- **Colors**: Modify TailwindCSS color classes in components
- **Fonts**: Update font families in `src/app/globals.css`
- **Dark Mode**: Colors are configured in `tailwind.config.ts`

### GitHub Integration
The GitHub API integration is handled in `src/lib/github.ts`. You can:
- Modify the number of repositories fetched
- Add custom filtering logic
- Include additional GitHub data

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms
The project can be deployed to any platform that supports Next.js applications.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and dark mode
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Navigation header
│   │   └── Footer.tsx       # Footer component
│   └── sections/
│       ├── Hero.tsx         # Hero section
│       ├── Projects.tsx     # GitHub projects grid
│       ├── About.tsx        # About section
│       └── Contact.tsx      # Contact form
└── lib/
    ├── utils.ts             # Utility functions
    └── github.ts            # GitHub API integration
```

## Environment Variables

For production, you may want to add a GitHub personal access token to avoid rate limits:

```env
GITHUB_TOKEN=your_github_token_here
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing the website, feel free to open an issue or reach out.

---

Built with ❤️ using Next.js and TailwindCSS

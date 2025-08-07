# Arul Loomba - Terminal Portfolio (React)

A modern React-based portfolio website featuring an interactive terminal interface and project showcase.

## Features

- **Interactive Terminal**: Command-line interface with autocomplete and command history
- **Project Showcase**: Detailed project cards with descriptions and features
- **About Page**: Comprehensive personal information and skills showcase
- **Contact Form**: Interactive contact form with validation and animations
- **Modern Navigation**: Sleek header with smooth animations and mobile menu
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Sleek black theme with green accents and smooth animations
- **React Router**: Client-side routing between all pages
- **Footer**: Social links and quick navigation

## Available Commands

### System Commands
- `help` or `h` - Show available commands
- `clear` or `cls` - Clear the terminal
- `neofetch` or `fetch` - Display system info (Arch Linux style)

### Personal Information
- `whoami` - Display identity
- `skills` - Show technical skills
- `projects` - List featured projects
- `awards` - Display achievements
- `others` - Show management/soft skills

### Online Profiles
- `linkedin` or `ln` - Open LinkedIn profile
- `github` or `gh` - Open GitHub profile

### Documents
- `resume` or `r` - Download resume

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## Project Structure

```
src/
├── components/
│   ├── Header.js            # Navigation header with mobile menu
│   ├── Header.css           # Header styles
│   ├── Terminal.js          # Terminal component with command processing
│   ├── Terminal.css         # Terminal-specific styles
│   ├── Projects.js          # Projects showcase component
│   ├── Projects.css         # Projects-specific styles
│   ├── About.js             # About page component
│   ├── About.css            # About page styles
│   ├── Contact.js           # Contact form component
│   ├── Contact.css          # Contact form styles
│   ├── Footer.js            # Footer component
│   └── Footer.css           # Footer styles
├── App.js                   # Main app component with routing
├── App.css                  # Global styles
├── index.js                 # App entry point
└── index.css                # Base styles
```

## Technologies Used

- **React 18** - Frontend framework
- **React Router** - Client-side routing
- **CSS3** - Styling with custom animations
- **Fira Code** - Monospace font for terminal aesthetic

## Deployment

The app is configured for deployment on GitHub Pages or any static hosting service. Simply run `npm run build` and deploy the contents of the `build` folder.

## License

This project is open source and available under the [MIT License](LICENSE).

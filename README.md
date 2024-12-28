# La Bataille des Expressions 🇫🇷 🇨🇦

A fun web game that tests your affinity with French and Canadian expressions! Players choose their favorite expressions and discover their linguistic personality profile.

## Features

- 10 rounds of expression choices
- Beautiful animations and transitions using Framer Motion
- Responsive design for all devices
- Celebration confetti on results
- Share functionality for social media
- Personality profiles based on choices
- French and Canadian expression collections

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- Canvas Confetti
- Lucide React Icons

## Project Structure

```
src/
├── components/        # Reusable UI components
├── data/             # Static data (expressions and profiles)
├── pages/            # Main application pages
├── types/            # TypeScript type definitions
└── main.tsx          # Application entry point
```

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Environment Setup

The project uses:
- Node.js 18+
- npm 8+
- Modern browser with ES2020 support

### Code Style

- ESLint configuration for TypeScript and React
- Strict TypeScript configuration
- Tailwind CSS for styling

## Deployment

The project includes a `vercel.json` configuration file for seamless deployment on Vercel, with proper routing setup for the SPA.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
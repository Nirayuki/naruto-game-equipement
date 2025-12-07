# Naruto Game Equipment

A modern React application built with Vite, TypeScript, Tailwind CSS, shadcn/ui, and React Router.

## Tech Stack

- **React 18** - A JavaScript library for building user interfaces
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable components built with Radix UI and Tailwind CSS
- **React Router** - Client-side routing for React

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

Build the project for production:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   └── ui/           # shadcn/ui components
├── lib/
│   └── utils.ts      # Utility functions
├── pages/            # Page components
├── App.tsx           # Main application component
├── main.tsx          # Application entry point
└── index.css         # Global styles with Tailwind directives
```

## Features

- ⚡️ Fast development with Vite and HMR
- 🎨 Styled with Tailwind CSS
- 🧩 Reusable UI components from shadcn/ui
- 🔄 Client-side routing with React Router
- 📦 Path aliases for clean imports (@/)
- 🔒 Type-safe with TypeScript
- 🎯 ESLint for code quality

## Adding shadcn/ui Components

This project is configured to work with shadcn/ui. To add new components:

```bash
npx shadcn@latest add [component-name]
```

For example:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
```

## License

MIT

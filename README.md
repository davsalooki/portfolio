# Portfolio

Personal portfolio website built with React and Express.

## Features

- **React Frontend**: Modern, responsive UI built with React and Vite
- **Express Backend**: RESTful API serving portfolio data
- **Responsive Design**: Mobile-friendly layout
- **Component-based Architecture**: Modular and maintainable code

## Tech Stack

### Frontend
- React 19
- Vite
- CSS3

### Backend
- Node.js
- Express
- CORS

## Project Structure

```
portfolio/
├── client/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── server/          # Express backend
│   ├── index.js
│   └── package.json
└── package.json     # Root package with scripts
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/davsalooki/portfolio.git
cd portfolio
```

2. Install dependencies for both client and server:
```bash
npm run install:all
```

Or install them separately:
```bash
npm run install:server
npm run install:client
```

### Development

Run both client and server in development mode:
```bash
npm run dev
```

This will start:
- Express server on http://localhost:5000
- React app on http://localhost:3000

Or run them separately:
```bash
# Terminal 1 - Start server
npm run dev:server

# Terminal 2 - Start client
npm run dev:client
```

### Production

Build the client for production:
```bash
npm run build:client
```

Start the server:
```bash
npm start
```

## API Endpoints

- `GET /api` - Welcome message
- `GET /api/portfolio` - Get all portfolio data
- `GET /api/projects` - Get projects list
- `GET /api/skills` - Get skills list
- `GET /api/contact` - Get contact information

## Customization

To customize the portfolio with your own information, edit the `portfolioData` object in `server/index.js`:

```javascript
const portfolioData = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio",
  projects: [...],
  skills: [...],
  contact: {...}
};
```

## License

MIT


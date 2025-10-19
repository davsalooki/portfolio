const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Portfolio data
const portfolioData = {
  name: "Your Name",
  title: "Full Stack Developer",
  bio: "Passionate developer with expertise in React and Node.js",
  projects: [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio built with React and Express",
      technologies: ["React", "Express", "Node.js"],
      github: "https://github.com/yourusername/portfolio",
      demo: "https://yourportfolio.com"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce application",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://yourecommerce.com"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative task management tool",
      technologies: ["React", "Express", "PostgreSQL"],
      github: "https://github.com/yourusername/taskapp",
      demo: "https://yourtaskapp.com"
    }
  ],
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "HTML/CSS",
    "Git"
  ],
  contact: {
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername"
  }
};

// Routes
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to Portfolio API' });
});

app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

app.get('/api/projects', (req, res) => {
  res.json(portfolioData.projects);
});

app.get('/api/skills', (req, res) => {
  res.json(portfolioData.skills);
});

app.get('/api/contact', (req, res) => {
  res.json(portfolioData.contact);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

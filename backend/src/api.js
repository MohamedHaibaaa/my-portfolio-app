const express = require("express");
const serverless = require("serverless-http");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const router = express.Router();

dotenv.config();
app.use(cors());

// Dummy project data
const projects = [
  {
    name: "Portfolio Website",
    author: "Mohamed",
    languages: ["React", "CSS"],
    description: "A personal portfolio built with React and styled using Bootstrap."
  },
  {
    name: "Task Manager API",
    author: "Mohamed",
    languages: ["Node.js", "Express"],
    description: "A RESTful API for managing daily tasks and to-dos."
  }
];

// Routes
router.get("/", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

router.get("/projects", (req, res) => {
  res.json(projects);
});

// Bind router
app.use("/.netlify/functions/api", router);

module.exports = app;
module.exports.handler = serverless(app);

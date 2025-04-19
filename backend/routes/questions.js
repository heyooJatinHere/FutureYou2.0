// routes/questions.js
import express from 'express';
import fs from 'fs';
const router = express.Router();

router.get('/', (req, res) => {
  res.send("Questions route working");
});


router.get('/health', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync('./data/health.json', 'utf-8'));
    res.json(data);
  } catch (error) {
    console.error("Error reading health.json:", error);
    res.status(500).json({ error: "Failed to load questions" });
  }
});


export default router;

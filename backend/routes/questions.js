// routes/questions.js
import express from 'express';
import fs from 'fs';
const router = express.Router();

router.get('/', (req, res) => {
  res.send("Questions route working");
});


router.get('/health', (req, res) => {
  const data = JSON.parse(fs.readFileSync('./data/health.json', 'utf-8'));
  res.send("Health Route");
  res.json(data);
});

export default router;

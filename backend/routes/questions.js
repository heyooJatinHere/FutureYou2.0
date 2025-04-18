// routes/questions.js
import express from 'express';
import fs from 'fs';
const router = express.Router();

router.get('/health', (req, res) => {
  const data = JSON.parse(fs.readFileSync('./data/health.json', 'utf-8'));
  res.json(data);
});

export default router;

// routes/questions.js
import express from 'express';
import fs from 'fs';
import path from 'path';
const router = express.Router();

router.get('/health', (req, res) => {
  
const dataPath = path.resolve(process.cwd(), 'data', 'health.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

  res.json(data);
});

export default router;

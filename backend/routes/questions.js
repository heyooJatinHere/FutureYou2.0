// routes/questions.js
import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

router.get('/',(req, res)=>{
  res.send("question route is working!!!")
})

router.get('/health', (req, res) => {
  try {
    const filePath = path.join('public', 'data', 'health.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    console.log(data);
    res.json(data);

  } catch (error) {
    console.error("Error reading health.json:", error);
    res.status(500).json({ error: "Failed to load questions" });
  }
});

export default router;

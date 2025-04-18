import express from "express";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import questionsRoutes from "../routes/questions.js";

dotenv.config();

const app=express();
app.use(cors({origin:"http://localhost:5173"}));
app.use(express.json());

app.use('/api/questions', questionsRoutes);

const ai=new GoogleGenAI({apiKey:process.env.GEMINI_API_KEY})

app.post('/',(req,res)=>{
    
})

app.post("/submit-answers", async (req,res)=>{
    try{
        const answers = req.body;
        // console.log("Received answers:", answers);
        
        const prompt = `You are an AI-powered future prediction system designed to help users visualize their health outcomes based on their current lifestyle, habits, and medical history.  
The user has answered the following health-related questions:

1. Age: ${answers.q1}  
2. Gender: ${answers.q2}  
3. Daily fruit & vegetable intake: ${answers.q3}  
4. Fast food consumption: ${answers.q4}  
5. Water intake: ${answers.q5}  
6. Regular exercise: ${answers.q6}  
7. Type of exercise (if any): ${answers.q7}  
8. Exercise frequency (if not regular): ${answers.q8}  
9. Sedentary lifestyle: ${answers.q9}  
10. Daily sleep duration: ${answers.q10}  
11. Refreshed after sleep: ${answers.q11}  
12. Trouble sleeping: ${answers.q12}  
13. Stress/anxiety frequency: ${answers.q13}  
14. Social connection: ${answers.q14}  
15. Mood swings/sadness: ${answers.q15}  
16. Tobacco use: ${answers.q16}  
17. Alcohol use: ${answers.q17}  
18. Recreational drug use: ${answers.q18}  
19. Diagnosed medical conditions: ${answers.q19}  
20. Current medications: ${answers.q20}  
21. Family history of illness: ${answers.q21}  
22. Height: ${answers.q22}  
23. Weight: ${answers.q23}  
24. Known blood pressure level: ${answers.q24}  
25. Known blood sugar/cholesterol level: ${answers.q25}

---

### Instructions:

1. Analyze the user's raw answers and predict their **health status 10 years from now**, focusing on:
   - **Physical Health**: Based on exercise, nutrition, hydration, weight, sleep, and existing medical conditions.
   - **Mental Health**: Based on sleep quality, stress, social connection, and mood indicators.
   - **Lifestyle Risks**: Based on sedentary habits, substance use, and family/medical history.

2. Speak **directly to the user** in a motivational yet realistic tone. Your role is to help them understand the trajectory they're on and guide them toward better health outcomes.

3. After the prediction, provide a **Recommendations** section with 3–5 actionable tips tailored to the user’s current habits and risks. Focus especially on areas that need improvement.

4. Keep the response concise, around **150–200 words** total.

5. Avoid any playful or vague language—be **clear, encouraging, and specific**.

---

**Health Outlook (10 Years From Now):** [Insert prediction here]  
**Mental Well-being:** [Insert prediction here]  
**Lifestyle Risks and Concerns:** [Insert prediction here]  
**Recommendations:** [3–5 bullet points with clear, actionable advice]
`;

        const result = await ai.models.generateContent({
            model:"gemini-2.0-flash",
            contents:prompt,
        })
        // console.log("Raw result:",result);
        // console.log("Content:",result.candidates[0].content);
        
        const response=result.text;
        console.log("Ai response",response);
        res.status(200).json({ analysis: response });

    }catch(error){
        console.log("Error:",error);
        res.status(500).json({error:"Something went wrong"});
    }
})



// const PORT=5000;

// app.listen(PORT,()=>console.log(`Server is running on ${PORT}`));

export default app;
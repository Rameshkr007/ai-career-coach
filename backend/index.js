require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ INITIALIZE Gemini API with credentials
if (!process.env.GEMINI_API_KEY) {
  console.warn("⚠️  WARNING: GEMINI_API_KEY is not set in .env file!");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ✅ CORS Configuration - Allow frontend origins
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'];
app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true
}));

app.use(express.json());

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ 
    message: "Backend is working",
    apiKeyConfigured: !!process.env.GEMINI_API_KEY
  });
});

// Main roadmap generation endpoint
app.post("/generate-roadmap", async (req, res) => {
  const { role, skills } = req.body;

  // Validate inputs
  if (!role || !skills) {
    return res.status(400).json({
      message: "Missing role or skills"
    });
  }

  // Validate API key exists
  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({
      message: "GEMINI_API_KEY is not configured on the server"
    });
  }

  try {
    // ✅ Correct model initialization
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `
Create a detailed 6-month roadmap for becoming a ${role}.
Current skills: ${skills}.

Include:
- Weekly learning plan
- Best resources (courses, YouTube, docs)
- Project ideas
- Skill gap analysis
`;

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }]
        }
      ]
    });

    const text = result.response.text();

    res.json({ message: text });

  } catch (error) {
    console.error("ERROR:", error);
    
    // Handle rate limiting
    if (error.status === 429) {
      return res.status(429).json({
        message: "API limit exceeded. Please try again later."
      });
    }

    res.status(500).json({
      message: "Error generating roadmap",
      error: error.message,
      status: error.status
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    message: "Internal server error",
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📡 CORS allowed origins: ${allowedOrigins.join(', ')}`);
});
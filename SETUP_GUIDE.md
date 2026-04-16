# 🚀 AI Career Coach - Setup & Deployment Guide

## 🔧 Part 1: Local Development Setup

### Step 1: Get Your Gemini API Key
1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Click "Create API Key"
3. Copy the API key

### Step 2: Configure Backend
```bash
cd backend
```

1. **Update `.env` file** with your API key:
```
GEMINI_API_KEY=your_actual_api_key_here
PORT=5000
NODE_ENV=development
ALLOWED_ORIGINS=http://localhost:3000
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start backend server:**
```bash
npm start
```
You should see: `Server running on port 5000`

### Step 3: Configure & Run Frontend
```bash
cd ../frontend
```

1. **Install dependencies:**
```bash
npm install
```

2. **Start frontend (in new terminal):**
```bash
npm start
```
Should open: `http://localhost:3000`

### Step 4: Test the Connection
1. Go to "Career Roadmap" page
2. Enter a role (e.g., "Full Stack Developer") and skills
3. Click "Generate Roadmap"
4. Should see Gemini AI-generated content

---

## 🌐 Part 2: Deploy to Production

### Option A: Deploy Backend to Railway, Render, or Heroku

#### Using Railway (Recommended - Free tier available):
1. Go to [Railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Set environment variables:
   - `GEMINI_API_KEY`: Your actual API key
   - `NODE_ENV`: production

#### Using Render:
1. Go to [render.com](https://render.com)
2. Click "New" → "Web Service"
3. Connect your GitHub repo
4. Set build command: `npm install`
5. Set start command: `npm start`
6. Add environment variables (same as above)
7. Deploy

### Option B: Deploy Frontend to Vercel or Netlify

#### Using Vercel (Recommended - Easiest React deployment):
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project" → "Import from Git"
3. Select your repository
4. Set root directory: `frontend`
5. Add environment variable:
   - `REACT_APP_API_URL`: Your backend URL (e.g., https://api.railway.app)
6. Deploy

#### Using Netlify:
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Select repository
4. Set build command: `cd frontend && npm run build`
5. Set publish directory: `frontend/build`
6. Add environment variable: `REACT_APP_API_URL=<backend_url>`
7. Deploy

---

## ✅ Checklist

### Before Local Testing:
- [ ] Gemini API key obtained
- [ ] Backend `.env` file configured with API key
- [ ] Backend `npm install` completed
- [ ] Frontend `npm install` completed
- [ ] Backend running on port 5000
- [ ] Frontend running on port 3000

### Before Production Deployment:
- [ ] Backend runs without errors locally
- [ ] Frontend build succeeds: `npm run build`
- [ ] API calls work in development
- [ ] Choose hosting providers
- [ ] Set up environment variables on hosting platforms
- [ ] Test generation feature after deployment

---

## 🐛 Troubleshooting

### "GEMINI_API_KEY is not configured on the server"
**Solution:** Make sure `.env` file exists in backend folder with correct API key

### "Failed to generate roadmap" / CORS error
**Solutions:**
1. Check backend is running: `http://localhost:5000` in browser
2. Verify `REACT_APP_API_URL` is correct in frontend `.env`
3. Clear browser cache and restart dev server

### API Key rate limiting (429 error)
**Solution:** Wait a minute and try again. Gemini API has rate limits for free tier

### Frontend can't reach backend in production
**Solutions:**
1. Verify backend deployment is active
2. Check `REACT_APP_API_URL` environment variable is set correctly
3. Ensure backend CORS allows frontend origin

---

## 📝 Important Files

- **Backend API:** `backend/index.js` (POST /generate-roadmap)
- **Frontend Main App:** `frontend/src/App.jsx` (handleGenerateRoadmap function)
- **Environment Config:** `.env` files (NEVER commit these)

---

## 🔗 Useful Resources

- [Google Generative AI Docs](https://ai.google.dev/docs)
- [Express.js Guide](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [Railway Deployment](https://docs.railway.app/)
- [Vercel Deployment](https://vercel.com/docs)

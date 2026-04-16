# ⚡ Quick Start - AI Career Coach

## 5-Minute Setup

### 1️⃣ Get Gemini API Key (2 min)
```
🔗 Go to: https://aistudio.google.com/app/apikey
📋 Click: "Create API Key"
📋 Copy: The key
```

### 2️⃣ Setup Backend (2 min)
```bash
cd backend
# Edit .env file and paste your API key
# Then run:
npm install
npm start
```
**Expected output:** `✅ Server running on port 5000`

### 3️⃣ Setup Frontend (1 min)
```bash
cd ../frontend
npm install
npm start
```
**Expected output:** Browser opens `http://localhost:3000`

### 4️⃣ Test It!
1. Go to "Career Roadmap"
2. Enter role: "Full Stack Developer"
3. Enter skills: "JavaScript, React, Node.js"
4. Click "Generate Roadmap"
5. ✅ Should show AI-generated roadmap

---

## 🚀 What Was Fixed

| Issue | Fix |
|-------|-----|
| ❌ Gemini API not initialized | ✅ Added `new GoogleGenerativeAI()` initialization |
| ❌ Error handling broken | ✅ Proper error handling with correct response objects |
| ❌ Hardcoded localhost URL | ✅ Uses environment variable `REACT_APP_API_URL` |
| ❌ No configuration files | ✅ Created `.env` and `.env.example` files |
| ❌ Not production-ready | ✅ Added dynamic PORT, proper CORS, health checks |

---

## 📍 File Locations

```
your-project/
├── backend/
│   ├── index.js          ← API Server (FIXED ✅)
│   ├── .env              ← Add your API key here
│   ├── .env.example      ← Template
│   └── package.json      ← Dependencies
│
├── frontend/
│   ├── src/App.jsx       ← Main App (FIXED ✅)
│   ├── .env              ← API URL config
│   └── package.json      ← Dependencies
│
├── SETUP_GUIDE.md        ← Full deployment guide
└── .gitignore            ← Protect .env files
```

---

## ✅ Checklist Before Going Live

- [ ] Added Gemini API key to `backend/.env`
- [ ] Backend starts without errors
- [ ] Frontend starts without errors
- [ ] Can generate roadmap successfully
- [ ] Check console for no CORS errors
- [ ] Choose hosting provider (Railway, Render, Vercel, Netlify)
- [ ] Deploy backend first, get URL
- [ ] Set backend URL in frontend `.env`
- [ ] Deploy frontend

---

## 🆘 Common Issues & Fixes

### Backend won't start
```
Error: GEMINI_API_KEY is not configured
Fix: Check .env file has correct API key
```

### Frontend shows error
```
Error: Failed to reach backend
Fix 1: Ensure backend is running on port 5000
Fix 2: Check REACT_APP_API_URL in frontend/.env
Fix 3: Clear browser cache and restart
```

### API returns 429 (rate limit)
```
Error: API limit exceeded. Please try again later.
Fix: Wait 1 minute and try again (free tier has limits)
```

---

## 📚 Next Steps

1. **Read full guide:** See `SETUP_GUIDE.md` for deployment options
2. **Choose hosting:** Railway (backend), Vercel (frontend) recommended
3. **Deploy:** Follow deployment section in `SETUP_GUIDE.md`
4. **Monitor:** Check logs on hosting platform

---

## 🔗 Resources

- [Gemini API Docs](https://ai.google.dev/)
- [Railway Docs](https://docs.railway.app/)
- [Vercel Docs](https://vercel.com/docs)
- [Express.js Guide](https://expressjs.com/)

# 📤 Publishing to Git - Complete Guide

## 📋 What to Publish vs. What to Leave Out

### ✅ PUBLISH THESE FILES:
```
✅ All source code (*.jsx, *.js, *.json, *.css)
✅ package.json (dependencies) - YES
✅ package-lock.json - YES
✅ .env.example (template only)
✅ .gitignore (protection rules)
✅ README.md, SETUP_GUIDE.md, QUICKSTART.md
✅ public/ folder
✅ src/ folder (both frontend & backend)
```

### ❌ NEVER PUBLISH THESE FILES:
```
❌ .env (contains your API key!)
❌ node_modules/ (too large, recreated from package.json)
❌ build/ or dist/ (generated during build)
❌ .vscode/ or .idea/ (IDE-specific settings)
❌ logs/ or *.log files
✋ Any file with credentials/secrets
```

---

## 🚀 Step-by-Step Publication Process

### Step 1: Create GitHub Repository
1. Go to [github.com](https://github.com)
2. Click "New repository" (top right corner)
3. Fill in:
   - **Repository name:** `ai-career-coach`
   - **Description:** AI-powered career coaching platform
   - **Public or Private:** Public (shows in your portfolio)
   - **Add .gitignore:** Skip (we have one already)
   - **Add README:** Skip (we can commit our own)
4. Click "Create repository"
5. **Copy the repository URL** (you'll need it next)

### Step 2: Initialize Git Locally

Open terminal in your project root (`ai-career-coach` folder):

```bash
# Check if Git is already initialized
git status

# If not, initialize Git:
git init

# Add your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/ai-career-coach.git

# Verify it's connected
git remote -v
```

**Expected output:**
```
origin  https://github.com/YOUR_USERNAME/ai-career-coach.git (fetch)
origin  https://github.com/YOUR_USERNAME/ai-career-coach.git (push)
```

### Step 3: Verify .gitignore is Correct

Check that `.gitignore` exists in your project root:

```bash
cat .gitignore
```

**Should contain:**
```
# Environment files - NEVER commit .env files
.env
.env.local
.env.*.local

# Dependencies
node_modules/
package-lock.json  ← Remove this line! (We want to commit package-lock.json)
yarn.lock

# Build outputs
/frontend/build
/frontend/dist

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Testing
coverage/
.nyc_output/

# Logs
logs/
*.log
npm-debug.log*
yarn-debug.log*
```

### Step 4: Create a Good README.md

This appears first on GitHub - make it impressive!

```bash
# In your project root, create README.md
```

**See the README template in the next section ↓**

### Step 5: Check What Will Be Committed

```bash
# See which files will be included
git status

# Preview files that will be uploaded
git add .
git status
```

**Good output (should NOT show .env or node_modules):**
```
On branch main

Changes to be committed:
  new file:   package.json
  new file:   frontend/package.json
  new file:   backend/index.js
  new file:   .gitignore
  new file:   SETUP_GUIDE.md
  ... (but NOT .env! and NOT node_modules/)
```

### Step 6: Commit Your Code

```bash
# Stage all files
git add .

# Create your first commit
git commit -m "Initial commit: AI Career Coach full stack application"

# Or more detailed:
git commit -m "
Initial commit: AI Career Coach platform

- React frontend with career roadmap generator
- Express.js backend with Gemini AI integration
- Setup guides for local dev and production
"
```

### Step 7: Push to GitHub

```bash
# Push to GitHub (first time)
git branch -M main
git push -u origin main

# After first push, just use:
git push
```

**You should see:**
```
Enumerating objects: XX, done.
Counting objects: 100% (XX/XX), done.
Delta compression using up to 8 threads
...
 * [new branch]      main -> main
Branch 'main' is set up to track remote branch 'main' from 'origin'.
```

### Step 8: Verify on GitHub

1. Go to your GitHub repository URL: `https://github.com/YOUR_USERNAME/ai-career-coach`
2. Check that all files appeared
3. Verify `.env` did NOT get uploaded
4. Verify `node_modules/` folder is NOT there

---

## 📝 README.md Template

Create `README.md` in your project root:

```markdown
# 🎯 AI Career Coach

An intelligent platform powered by Google's Gemini AI that generates personalized career roadmaps, conducts mock interviews, and provides job readiness coaching.

## ✨ Features

- **Career Roadmap Generator** - AI-generated 6-month learning plans
- **Mock Interview** - Practice interviews with AI feedback
- **Resume Analyzer** - Get resume improvement suggestions
- **Progress Tracker** - Monitor your career development
- **Performance Analytics** - Visual insights into your progress
- **Job Readiness Assessment** - Evaluate your preparedness

## 🛠️ Tech Stack

**Frontend:**
- React 18
- CSS (custom styling)
- Recharts (data visualization)

**Backend:**
- Node.js + Express.js
- Google Generative AI (Gemini)
- CORS enabled

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Gemini API Key ([Get one free](https://aistudio.google.com/app/apikey))

### Local Development

1. **Clone repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/ai-career-coach.git
   cd ai-career-coach
   ```

2. **Setup Backend**
   ```bash
   cd backend
   # Copy .env.example to .env and add your Gemini API key
   cp .env.example .env
   
   npm install
   npm start
   ```
   Backend runs on: `http://localhost:5000`

3. **Setup Frontend** (new terminal)
   ```bash
   cd frontend
   npm install
   npm start
   ```
   Frontend runs on: `http://localhost:3000`

4. **Test**
   - Go to Career Roadmap
   - Enter a role and skills
   - Generate your personalized roadmap

## 📖 Documentation

- [Quick Start Guide](./QUICKSTART.md) - 5-minute setup
- [Full Setup Guide](./SETUP_GUIDE.md) - Development & deployment
- [API Documentation](./backend/README.md) - Backend endpoints

## 🌐 Deployment

### Deploy Backend
- [Railway](https://railway.app) - Recommended (free tier available)
- [Render](https://render.com)
- [Heroku](https://heroku.com)

### Deploy Frontend
- [Vercel](https://vercel.com) - Recommended (free tier)
- [Netlify](https://netlify.com)

See [SETUP_GUIDE.md](./SETUP_GUIDE.md#-part-2-deploy-to-production) for deployment instructions.

## 🔑 Environment Variables

Create `.env` file (backend):
```
GEMINI_API_KEY=your_api_key_here
PORT=5000
NODE_ENV=development
```

Create `.env` file (frontend):
```
REACT_APP_API_URL=http://localhost:5000
```

## 📝 Project Structure

```
ai-career-coach/
├── backend/
│   ├── index.js          # Express server & API routes
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx       # Main React component
│   │   ├── pages/        # Page components
│   │   ├── components/   # Reusable components
│   │   └── data/         # Static data
│   ├── public/
│   └── package.json
│
├── SETUP_GUIDE.md        # Complete setup & deployment guide
├── QUICKSTART.md         # 5-minute quick start
└── README.md             # This file
```

## 🐛 Troubleshooting

**Backend won't connect to Gemini:**
- Check `.env` has correct `GEMINI_API_KEY`
- Verify API key is valid at [aistudio.google.com](https://aistudio.google.com)

**Frontend can't reach backend:**
- Ensure backend is running on port 5000
- Check `REACT_APP_API_URL` in frontend `.env`
- Clear browser cache

**npm install fails:**
- Delete `node_modules/` and `package-lock.json`
- Run `npm install` again

## 🔐 Security

- Never commit `.env` files (they're in `.gitignore`)
- API keys are kept in `.env.example` as reference only
- Use environment variables for all secrets

## 📄 License

This project is open source under the MIT License.

## 👨‍💻 Author

[Your Name] - [Your LinkedIn/Portfolio]

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Made with ❤️ by AI Career Coach Team**
```

---

## 📦 Step-by-Step Commands Summary

```bash
# 1. Navigate to project root
cd ai-career-coach

# 2. Initialize Git (if not already done)
git init

# 3. Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/ai-career-coach.git

# 4. Check what will be uploaded
git status

# 5. Create README.md (in project root)
# (Copy template from above section)

# 6. Add all files
git add .

# 7. Commit with message
git commit -m "Initial commit: AI Career Coach with Gemini integration"

# 8. Set main branch name
git branch -M main

# 9. Push to GitHub
git push -u origin main

# 10. Verify on GitHub
# Visit: https://github.com/YOUR_USERNAME/ai-career-coach
```

---

## ✅ Verification Checklist

After pushing to GitHub, verify:

- [ ] Repository appears on GitHub
- [ ] All `.jsx`, `.js`, `.json`, `package.json` files are there
- [ ] `SETUP_GUIDE.md` and `QUICKSTART.md` are visible
- [ ] `.env` file is NOT there (security ✓)
- [ ] `node_modules/` folder is NOT there
- [ ] `.gitignore` file exists
- [ ] README.md displays nicely on GitHub
- [ ] Total file size is < 50MB (if too large, something's wrong)

---

## 🔄 Future Commits (After First Push)

```bash
# Make changes...

# Commit and push
git add .
git commit -m "Description of changes"
git push

# Or separate by feature:
git add backend/
git commit -m "backend: Add new AI prompt for interviews"
git push

git add frontend/
git commit -m "frontend: Improve roadmap UI"
git push
```

---

## 📚 Good Commit Message Examples

✅ **Good:**
```
feat: Add mock interview feature with Gemini AI
fix: Resolve CORS error in production
docs: Update deployment instructions
style: Improve roadmap card styling
chore: Update dependencies
```

❌ **Bad:**
```
updated
fixed stuff
changes
asdf
```

---

## 🔐 Important Security Reminders

| File | Commit? | Why |
|------|---------|-----|
| `.env` | ❌ NO | Contains API keys! |
| `.env.example` | ✅ YES | Template only, no secrets |
| `node_modules/` | ❌ NO | 100k+ files, recreated from package.json |
| `package.json` | ✅ YES | Defines dependencies |
| `package-lock.json` | ✅ YES | Locks exact versions |
| `.gitignore` | ✅ YES | Protects sensitive files |
| Source code | ✅ YES | Your app logic |
| `README.md` | ✅ YES | Documentation |

---

## 🎯 What Others Will See

When someone visits your GitHub:

1. **README.md** - Features, quick start, tech stack
2. **QUICKSTART.md** - 5-minute setup
3. **SETUP_GUIDE.md** - Full documentation
4. **Source code** - All `.jsx`, `.js`, `package.json`
5. **.env.example** - Shows what config is needed
6. **No .env file** - Your API key stays secret ✓

---

## 💡 Pro Tips

1. **Add a license** to `LICENSE` file (MIT recommended)
2. **Use descriptive commit messages** - future you will thank you
3. **Commit frequently** - don't wait until everything is done
4. **Use branches** for features: `git checkout -b feature/new-feature`
5. **Review code before committing** - use `git diff`
6. **Keep .env secure** - never share API keys!

---

**Ready to publish? Run the commands in the "Commands Summary" section above!**

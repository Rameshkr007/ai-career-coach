// data/dummyData.js

export const YELLOW = '#f5c518';

export const progressData = [
  { week: 'W1', score: 20 },
  { week: 'W2', score: 35 },
  { week: 'W3', score: 42 },
  { week: 'W4', score: 55 },
  { week: 'W5', score: 58 },
  { week: 'W6', score: 65 },
  { week: 'W7', score: 72 },
  { week: 'W8', score: 78 },
];

export const skillsData = [
  { name: 'SQL',        val: 72 },
  { name: 'Python',     val: 55 },
  { name: 'Excel',      val: 88 },
  { name: 'Tableau',    val: 45 },
  { name: 'Statistics', val: 60 },
];

export const dailyGoals = [
  { id: 1, text: 'Complete 2 SQL practice problems', done: true },
  { id: 2, text: 'Watch "Data Storytelling" module (45 min)', done: true },
  { id: 3, text: 'Practice one mock interview question', done: false },
  { id: 4, text: "Review yesterday's Tableau lesson notes", done: false },
  { id: 5, text: 'Read industry newsletter (15 min)', done: false },
];

export const interviewQuestions = [
  {
    id: 1,
    cat: 'Technical',
    q: 'Explain the difference between GROUP BY and HAVING in SQL. Provide a practical example.',
    diff: 'Medium',
  },
  {
    id: 2,
    cat: 'Behavioral',
    q: 'Tell me about a time you had to present complex data insights to a non-technical stakeholder.',
    diff: 'Easy',
  },
  {
    id: 3,
    cat: 'Case Study',
    q: 'How would you detect and handle outliers in a large dataset before performing regression analysis?',
    diff: 'Hard',
  },
];

export const roadmapStages = [
  {
    level: 'Beginner',
    color: '#22c55e',
    time: '0–3 months',
    skills: ['Excel Fundamentals', 'Basic SQL', 'Data Cleaning', 'Google Sheets'],
    tasks: ['Complete 30 SQL exercises', 'Build 2 Excel dashboards', 'Take Statistics 101'],
    resources: ['Khan Academy Stats', 'W3Schools SQL', 'Kaggle Learn'],
  },
  {
    level: 'Intermediate',
    color: '#f5c518',
    time: '3–8 months',
    skills: ['Python (Pandas)', 'Tableau', 'Data Storytelling', 'A/B Testing'],
    tasks: ['Build 3 end-to-end projects', 'Publish on GitHub', 'Get AWS Cloud Practitioner'],
    resources: ['DataCamp', 'Coursera IBM DA', 'Mode Analytics'],
  },
  {
    level: 'Advanced',
    color: '#f87171',
    time: '8–14 months',
    skills: ['Machine Learning Basics', 'Statistical Modeling', 'DBT / Airflow', 'Leadership'],
    tasks: ['Contribute to open-source', 'Build a portfolio website', 'Apply to senior roles'],
    resources: ['Fast.ai', 'dbt Learn', 'Towards Data Science'],
  },
];

export const strengths = [
  { icon: '📊', label: 'Data Visualization', score: 88 },
  { icon: '🗂️', label: 'Excel / Spreadsheets', score: 85 },
  { icon: '🔍', label: 'Problem Decomposition', score: 78 },
  { icon: '📝', label: 'Report Writing', score: 75 },
];

export const weakAreas = [
  { icon: '🐍', label: 'Python / Pandas', reason: 'Only 3 exercises completed' },
  { icon: '📐', label: 'Statistical Modeling', reason: 'No project submitted yet' },
  { icon: '🔄', label: 'Airflow / Pipelines', reason: 'Not started' },
];

export const resumeSuggestions = [
  { type: 'error', text: 'Missing quantified achievements in Work Experience section' },
  { type: 'warn',  text: "Skills section doesn't include Tableau or Power BI" },
  { type: 'warn',  text: 'No GitHub or portfolio link found' },
  { type: 'ok',    text: 'Education section is well-formatted' },
  { type: 'ok',    text: 'Contact information is complete' },
  { type: 'error', text: 'Job descriptions use passive voice — use action verbs' },
];

export const resumeSectionScores = [
  { label: 'Work Experience', pct: 65 },
  { label: 'Skills',          pct: 55 },
  { label: 'Education',       pct: 90 },
  { label: 'Summary',         pct: 70 },
  { label: 'Formatting',      pct: 85 },
];

export const readySkills = [
  'SQL (Advanced)',
  'Excel / Google Sheets',
  'Tableau',
  'Data Cleaning',
  'Communication Skills',
  'Basic Statistics',
];

export const missingSkills = [
  'Python (Pandas/NumPy)',
  'Statistical Modeling',
  'DBT / Data Pipeline',
  'Airflow basics',
  'Leadership / Mentoring',
];

export const aiSuggestions = [
  {
    icon: '💡',
    title: 'Focus on Python this week',
    desc: 'Your Python score is 20% below average for Data Analyst roles. Spend 30 min/day on Pandas.',
  },
  {
    icon: '🎯',
    title: 'Take 2 mock interviews',
    desc: 'Your behavioral responses need more STAR structure. Practice improves scores by 1.5 points avg.',
  },
  {
    icon: '📌',
    title: 'Update your resume',
    desc: 'Add your latest Excel dashboard project. Recruiters value quantified achievements.',
  },
  {
    icon: '📚',
    title: 'Complete Tableau module',
    desc: "Tableau is required in 78% of Data Analyst job postings. You're 55% through the module.",
  },
];

export const analyticsRecommendations = [
  {
    icon: '🐍',
    title: 'Python Sprint',
    desc: 'Dedicate 1 hour/day this week to Pandas. Focus on data cleaning and groupby operations.',
    priority: 'High',
  },
  {
    icon: '📊',
    title: 'Build a Portfolio Project',
    desc: 'Create an end-to-end SQL + Tableau dashboard on a public dataset like NYC Uber rides.',
    priority: 'Medium',
  },
  {
    icon: '🎤',
    title: 'Mock Interview x3',
    desc: 'Your interview score improves by 0.8 pts per session. Schedule 3 sessions this week.',
    priority: 'High',
  },
];

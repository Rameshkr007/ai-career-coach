// App.jsx
import React, { useState } from 'react';
import './index.css';

import Sidebar   from './components/Sidebar';
import Topbar    from './components/Topbar';

import LandingPage           from './pages/LandingPage';
import AuthPage              from './pages/AuthPage';
import Dashboard             from './pages/Dashboard';
import CareerRoadmap         from './pages/CareerRoadmap';
import ProgressTracker       from './pages/ProgressTracker';
import MockInterview         from './pages/MockInterview';
import PerformanceAnalytics  from './pages/PerformanceAnalytics';
import ResumeAnalyzer        from './pages/ResumeAnalyzer';
import JobReadiness          from './pages/JobReadiness';

const PAGE_TITLES = {
  dashboard : 'Dashboard',
  roadmap   : 'Career Roadmap',
  progress  : 'Progress Tracker',
  interview : 'Mock Interview',
  analytics : 'Performance Analytics',
  resume    : 'Resume Analyzer',
  readiness : 'Job Readiness',
};

export default function App() {
  const [page, setPage]         = useState('landing');
  const [authType, setAuthType] = useState('login');
  const [user, setUser]         = useState({ name: 'Alex', role: 'Data Analyst', skills: 'Excel, SQL' });
  const [roadmap, setRoadmap]   = useState(null);

  const handleGenerateRoadmap = async (role, skills) => {
    try {
      // ✅ Use environment variable for API URL (with fallback for development)
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      
      const response = await fetch(`${apiUrl}/generate-roadmap`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ role, skills }),
      });
      const data = await response.json();
      if (response.ok) {
        setRoadmap(data.message);
        setUser({ ...user, role, skills });
      } else {
        throw new Error(data.message || 'Failed to generate roadmap');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to generate roadmap. Please check the backend is running and API key is set.');
    }
  };

  const PAGE_COMPONENTS = {
    dashboard : <Dashboard user={user} />,
    roadmap   : <CareerRoadmap user={user} roadmap={roadmap} onGenerateRoadmap={handleGenerateRoadmap} />,
    progress  : <ProgressTracker />,
    interview : <MockInterview />,
    analytics : <PerformanceAnalytics />,
    resume    : <ResumeAnalyzer />,
    readiness : <JobReadiness />,
  };

  /* ── Landing ─────────────────────────────────────────── */
  if (page === 'landing') {
    return (
      <LandingPage
        onGetStarted={() => setPage('signup')}
        onLogin={() => { setAuthType('login'); setPage('auth'); }}
      />
    );
  }

  /* ── Auth ────────────────────────────────────────────── */
  if (page === 'auth' || page === 'signup') {
    return (
      <AuthPage
        type={page === 'signup' ? 'signup' : authType}
        onSwitch={() => setPage(page === 'signup' ? 'auth' : 'signup')}
        onAuth={() => setPage('dashboard')}
      />
    );
  }

  /* ── App shell ───────────────────────────────────────── */
  return (
    <div className="app">
      <div className="layout">
        <Sidebar page={page} setPage={setPage} />
        <div className="main">
          <Topbar title={PAGE_TITLES[page] || ''} />
          {PAGE_COMPONENTS[page] || <Dashboard />}
        </div>
      </div>
    </div>
  );
}

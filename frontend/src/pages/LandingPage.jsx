// pages/LandingPage.jsx
import React from 'react';

const FEATURES = [
  { icon: '🗺️', title: 'Roadmap Generator',   desc: 'Get a step-by-step personalized learning roadmap based on your target job role and current skills.' },
  { icon: '📈', title: 'Progress Tracker',    desc: 'Visualize your improvement with charts, skill breakdowns, and weekly streaks to stay motivated.' },
  { icon: '🎤', title: 'AI Mock Interviews',  desc: 'Practice with realistic interview questions and get instant AI feedback on structure, clarity, and depth.' },
  { icon: '📄', title: 'Resume Analyzer',     desc: 'Upload your resume and get an AI-powered score with specific suggestions to make it stand out.' },
  { icon: '🎯', title: 'Job Readiness Score', desc: 'See exactly how ready you are for your target role and what skills are still missing.' },
  { icon: '🔥', title: 'Daily Goals & Streaks', desc: 'Stay consistent with AI-generated daily goals and streak tracking to build lasting habits.' },
];

export default function LandingPage({ onGetStarted, onLogin }) {
  return (
    <div className="landing-hero">
      {/* Navbar */}
      <nav className="nav-landing">
        <div className="nav-brand">AICareer</div>
        <div className="nav-actions">
          <button className="btn-outline" onClick={onLogin}>Log In</button>
          <button className="btn" onClick={onGetStarted}>Get Started</button>
        </div>
      </nav>

      {/* Hero */}
      <div className="hero-section">
        <div className="hero-grid" />
        <div className="hero-glow" />

        <div className="tag" style={{ marginBottom: 16, fontSize: 12 }}>
          🚀 AI-Powered Career Intelligence
        </div>

        <h1 className="hero-title">
          Your AI-crafted<br />
          <span style={{ color: '#f5c518' }}>career path</span> awaits
        </h1>

        <p className="hero-sub">
          Get a personalized roadmap, track your progress, practice interviews,
          and land your dream job — all powered by AI.
        </p>

        <div className="hero-cta">
          <button className="btn" onClick={onGetStarted} style={{ padding: '14px 32px', fontSize: 15 }}>
            Get Started Free →
          </button>
          <button className="btn-outline" style={{ padding: '14px 24px', fontSize: 15 }}>
            See Demo
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="feature-cards">
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 28, fontWeight: 800, textAlign: 'center', marginBottom: 36 }}>
          Everything you need to{' '}
          <span style={{ color: '#f5c518' }}>accelerate</span> your career
        </h2>
        <div className="grid3">
          {FEATURES.map((f) => (
            <div key={f.title} className="feat-card">
              <div className="feat-icon">{f.icon}</div>
              <div className="feat-title">{f.title}</div>
              <div className="feat-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 15, color: '#f5c518' }}>
          AICareer
        </div>
        <div className="footer-links">
          {['About', 'Contact', 'Privacy', 'Terms'].map((l) => (
            <span key={l} className="footer-link">{l}</span>
          ))}
        </div>
        <div style={{ fontSize: 12, color: '#7878a0' }}>© 2025 AICareer. All rights reserved.</div>
      </div>
    </div>
  );
}

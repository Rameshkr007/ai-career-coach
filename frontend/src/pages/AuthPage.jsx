// pages/AuthPage.jsx
import React from 'react';

export default function AuthPage({ type, onSwitch, onAuth }) {
  const isLogin = type === 'login';

  return (
    <div className="auth-page">
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 50% 0%, #f5c51810 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div className="auth-card">
        <div className="auth-logo">AICareer</div>
        <div className="auth-tagline">Your AI-powered career coach</div>

        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 22, fontWeight: 800, marginBottom: 6 }}>
          {isLogin ? 'Welcome back' : 'Create account'}
        </h2>
        <p style={{ color: '#7878a0', fontSize: 13, marginBottom: 24 }}>
          {isLogin
            ? 'Log in to continue your learning journey'
            : 'Start your personalized career journey today'}
        </p>

        {!isLogin && (
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input className="input" type="text" placeholder="Alex Kim" />
          </div>
        )}

        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input className="input" type="email" placeholder="you@email.com" />
        </div>

        <div className="form-group">
          <label className="form-label">Password</label>
          <input className="input" type="password" placeholder="••••••••" />
        </div>

        <button
          className="btn"
          onClick={onAuth}
          style={{ width: '100%', padding: '12px', fontSize: 14 }}
        >
          {isLogin ? 'Log In →' : 'Create Account →'}
        </button>

        <div className="or-div"><span>or</span></div>

        <button className="btn-outline" style={{ width: '100%', padding: '12px', fontSize: 13 }}>
          🔗 Continue with Google
        </button>

        <div className="form-link">
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <span onClick={onSwitch}>{isLogin ? 'Sign up free' : 'Log in'}</span>
        </div>
      </div>
    </div>
  );
}

// pages/PerformanceAnalytics.jsx
import React from 'react';
import { ProgressBar, SectionTitle } from '../components/Shared';
import { strengths, weakAreas, analyticsRecommendations } from '../data/dummyData';

export default function PerformanceAnalytics() {
  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Performance Analytics</h1>
        <p className="page-sub">Understand your strengths and improvement areas</p>
      </div>

      <div className="grid2" style={{ marginBottom: 20 }}>
        {/* Strengths */}
        <div className="card">
          <SectionTitle>💪 Strengths</SectionTitle>
          {strengths.map((s) => (
            <div key={s.label} className="strength-item">
              <div className="str-icon" style={{ background: '#22c55e15' }}>{s.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13.5, fontWeight: 500, marginBottom: 3 }}>{s.label}</div>
                <ProgressBar pct={s.score} height={5} />
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#4ade80' }}>{s.score}%</div>
            </div>
          ))}
        </div>

        {/* Weak Areas */}
        <div className="card">
          <SectionTitle>🔴 Weak Areas</SectionTitle>
          {weakAreas.map((w) => (
            <div key={w.label} className="weak-item">
              <div className="str-icon" style={{ background: '#ef444415' }}>{w.icon}</div>
              <div>
                <div style={{ fontSize: 13.5, fontWeight: 500, marginBottom: 2 }}>{w.label}</div>
                <div style={{ fontSize: 12, color: '#7878a0' }}>{w.reason}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="card">
        <SectionTitle>🤖 AI Recommendations</SectionTitle>
        <div className="grid3" style={{ gap: 12 }}>
          {analyticsRecommendations.map((r) => (
            <div key={r.title} className="card2">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontSize: 20 }}>{r.icon}</span>
                <span className={r.priority === 'High' ? 'tag-red' : 'tag'}>{r.priority}</span>
              </div>
              <div style={{ fontWeight: 600, fontSize: 13.5, marginBottom: 5 }}>{r.title}</div>
              <div style={{ fontSize: 12.5, color: '#7878a0', lineHeight: 1.6 }}>{r.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

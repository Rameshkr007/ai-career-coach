// pages/Dashboard.jsx
import React, { useState } from 'react';
import { ProgressBar, MetricCard, SectionTitle, SkillRow } from '../components/Shared';
import { skillsData, dailyGoals as GOALS, aiSuggestions } from '../data/dummyData';

const METRICS = [
  { icon: '📈', label: 'Overall Progress', value: '45%',   color: '#f5c518' },
  { icon: '✅', label: 'Skills Mastered',  value: '8/18',  color: '#4ade80' },
  { icon: '🎤', label: 'Interview Score',  value: '7.2/10',color: '#60a5fa' },
  { icon: '📄', label: 'Resume Score',     value: '72/100',color: '#f87171' },
];

export default function Dashboard({ user }) {
  const [goals, setGoals] = useState(GOALS);
  const toggle = (id) => setGoals((g) => g.map((x) => (x.id === id ? { ...x, done: !x.done } : x)));
  const done = goals.filter((g) => g.done).length;

  return (
    <div className="page">
      {/* Header */}
      <div className="page-header">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h1 className="page-title">Good morning, {user?.name || 'User'} 👋</h1>
            <p className="page-sub">You're on a 5-day streak! Keep it going.</p>
          </div>
          <div className="tag" style={{ fontSize: 13, padding: '6px 14px' }}>🔥 5-day streak</div>
        </div>
      </div>

      {/* Metric cards */}
      <div className="grid4" style={{ marginBottom: 20 }}>
        {METRICS.map((m) => <MetricCard key={m.label} {...m} />)}
      </div>

      {/* Skills + Goals */}
      <div className="grid2" style={{ marginBottom: 20 }}>
        <div className="card">
          <SectionTitle>📊 Skill Progress</SectionTitle>
          {skillsData.map((s) => <SkillRow key={s.name} name={s.name} val={s.val} />)}
        </div>

        <div className="card">
          <SectionTitle>
            🎯 Daily Goals{' '}
            <span style={{ color: '#7878a0', fontWeight: 400, fontSize: 12 }}>
              {done}/{goals.length} done
            </span>
          </SectionTitle>
          {goals.map((g) => (
            <div key={g.id} className="check-item">
              <div
                className={`checkbox ${g.done ? 'done' : ''}`}
                onClick={() => toggle(g.id)}
              >
                {g.done && <span style={{ color: '#000', fontSize: 11, fontWeight: 800 }}>✓</span>}
              </div>
              <span style={{
                fontSize: 13.5,
                color: g.done ? '#7878a0' : 'var(--text)',
                textDecoration: g.done ? 'line-through' : 'none',
              }}>
                {g.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* AI Suggestions */}
      <div className="card glow">
        <SectionTitle>🤖 AI Suggestions</SectionTitle>
        <div className="grid2">
          {aiSuggestions.map((s) => (
            <div key={s.title} className="card2" style={{ display: 'flex', gap: 12 }}>
              <span style={{ fontSize: 20 }}>{s.icon}</span>
              <div>
                <div style={{ fontWeight: 600, fontSize: 13.5, marginBottom: 4 }}>{s.title}</div>
                <div style={{ color: '#7878a0', fontSize: 12.5, lineHeight: 1.6 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

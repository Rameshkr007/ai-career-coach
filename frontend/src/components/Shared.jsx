// components/Shared.jsx
import React from 'react';

/* ── Progress Bar ─────────────────────────────────────── */
export function ProgressBar({ pct, height = 8 }) {
  return (
    <div className="progress-bar-bg" style={{ height }}>
      <div className="progress-bar-fill" style={{ width: `${pct}%`, height }} />
    </div>
  );
}

/* ── Metric Card ──────────────────────────────────────── */
export function MetricCard({ icon, label, value, color }) {
  return (
    <div className="metric-card">
      <div className="metric-label">{icon} {label}</div>
      <div className="metric-val" style={{ color }}>{value}</div>
    </div>
  );
}

/* ── Section Title ────────────────────────────────────── */
export function SectionTitle({ children }) {
  return <div className="section-title">{children}</div>;
}

/* ── Skill Row ────────────────────────────────────────── */
export function SkillRow({ name, val }) {
  return (
    <div className="skill-row">
      <div className="skill-label">{name}</div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: `${val}%` }} />
      </div>
      <div className="skill-pct" style={{ color: '#f5c518' }}>{val}%</div>
    </div>
  );
}

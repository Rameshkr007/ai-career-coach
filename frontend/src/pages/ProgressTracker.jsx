// pages/ProgressTracker.jsx
import React from 'react';
import {
  AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';
import { ProgressBar, SectionTitle } from '../components/Shared';
import { progressData, skillsData, YELLOW } from '../data/dummyData';

const tooltipStyle = {
  contentStyle: {
    background: '#13131f', border: '1px solid #ffffff15',
    borderRadius: 8, color: '#e8e8f0', fontSize: 12,
  },
};

export default function ProgressTracker() {
  return (
    <div className="page">
      <div className="page-header">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h1 className="page-title">Progress Tracker</h1>
            <p className="page-sub">8 weeks of learning data</p>
          </div>
          <div className="card2" style={{ textAlign: 'center', padding: '12px 20px' }}>
            <div style={{ fontSize: 28, fontWeight: 800, fontFamily: 'Syne, sans-serif', color: YELLOW }}>🔥 5</div>
            <div style={{ fontSize: 11, color: '#7878a0' }}>DAY STREAK</div>
          </div>
        </div>
      </div>

      {/* Area Chart */}
      <div className="card" style={{ marginBottom: 20 }}>
        <SectionTitle>📈 Progress Over Time</SectionTitle>
        <div style={{ height: 220 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={progressData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor={YELLOW} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={YELLOW} stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="week" tick={{ fill: '#7878a0', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis                tick={{ fill: '#7878a0', fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip {...tooltipStyle} />
              <Area type="monotone" dataKey="score" stroke={YELLOW} strokeWidth={2} fill="url(#grad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bar chart + Skill breakdown */}
      <div className="grid2">
        <div className="card">
          <SectionTitle>🧠 Skills Completion</SectionTitle>
          <div style={{ height: 200 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={skillsData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <XAxis dataKey="name" tick={{ fill: '#7878a0', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis                tick={{ fill: '#7878a0', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip {...tooltipStyle} />
                <Bar dataKey="val" fill={YELLOW} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <SectionTitle>📋 Skill Breakdown</SectionTitle>
          {skillsData.map((s) => (
            <div key={s.name} style={{ marginBottom: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                <span style={{ fontSize: 13 }}>{s.name}</span>
                <span style={{ fontSize: 12, color: YELLOW, fontWeight: 600 }}>{s.val}%</span>
              </div>
              <ProgressBar pct={s.val} height={7} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

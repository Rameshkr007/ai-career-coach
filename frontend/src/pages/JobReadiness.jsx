// pages/JobReadiness.jsx
import React from 'react';
import { SectionTitle } from '../components/Shared';
import { readySkills, missingSkills } from '../data/dummyData';

export default function JobReadiness() {
  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Job Readiness</h1>
        <p className="page-sub">How ready are you for Data Analyst roles?</p>
      </div>

      {/* Big percentage */}
      <div className="card" style={{ textAlign: 'center', marginBottom: 20, padding: 40 }}>
        <div className="readiness-circle">
          <div className="readiness-inner">
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 32, color: '#f5c518', lineHeight: 1 }}>
              70%
            </div>
            <div style={{ fontSize: 11, color: '#7878a0' }}>READY</div>
          </div>
        </div>

        <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 22, marginBottom: 8 }}>
          You're 70% Job Ready
        </h2>
        <p style={{ color: '#7878a0', fontSize: 14, maxWidth: 420, margin: '0 auto' }}>
          Master 5 more skills and complete 2 projects to reach 90%+ job readiness for senior Data Analyst roles.
        </p>
      </div>

      {/* Skills split */}
      <div className="grid2">
        {/* Have */}
        <div className="card">
          <SectionTitle>✅ You Have These</SectionTitle>
          {readySkills.map((s) => (
            <div
              key={s}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '9px 0', borderBottom: '1px solid #ffffff10',
              }}
            >
              <span style={{ color: '#4ade80', fontWeight: 700 }}>✓</span>
              <span style={{ fontSize: 13.5 }}>{s}</span>
            </div>
          ))}
        </div>

        {/* Missing */}
        <div className="card">
          <SectionTitle>❌ Missing Skills</SectionTitle>
          {missingSkills.map((s, i) => (
            <div
              key={s}
              className="card2"
              style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, borderLeft: '3px solid #ef4444' }}
            >
              <div style={{
                width: 24, height: 24, borderRadius: 6,
                background: '#ef444420',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 700, color: '#f87171', flexShrink: 0,
              }}>
                {i + 1}
              </div>
              <div>
                <div style={{ fontSize: 13.5, fontWeight: 500 }}>{s}</div>
                <div style={{ fontSize: 11.5, color: '#7878a0' }}>Required in 60%+ job postings</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

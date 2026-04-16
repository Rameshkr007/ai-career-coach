// pages/ResumeAnalyzer.jsx
import React, { useState } from 'react';
import { ProgressBar, SectionTitle } from '../components/Shared';
import { resumeSuggestions, resumeSectionScores } from '../data/dummyData';

export default function ResumeAnalyzer() {
  const [uploaded, setUploaded] = useState(false);

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Resume Analyzer</h1>
        <p className="page-sub">Get AI-powered feedback on your resume</p>
      </div>

      {!uploaded ? (
        <div className="card" style={{ textAlign: 'center' }}>
          <div className="upload-zone" onClick={() => setUploaded(true)}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>📄</div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 16, marginBottom: 6 }}>
              Drop your resume here
            </div>
            <div style={{ color: '#7878a0', fontSize: 13, marginBottom: 20 }}>
              PDF, DOC, or DOCX · Max 5 MB
            </div>
            <button className="btn">Browse File</button>
          </div>
        </div>
      ) : (
        <>
          {/* Score + Section scores */}
          <div className="grid2" style={{ marginBottom: 20 }}>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 60, fontWeight: 800, fontFamily: 'Syne, sans-serif', color: '#f5c518', lineHeight: 1 }}>
                72
              </div>
              <div style={{ color: '#7878a0', marginBottom: 16 }}>Resume Score</div>
              <ProgressBar pct={72} height={10} />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
                <span style={{ fontSize: 11, color: '#7878a0' }}>Needs Work</span>
                <span style={{ fontSize: 11, color: '#f5c518' }}>Good</span>
              </div>
            </div>

            <div className="card">
              <SectionTitle>📊 Section Scores</SectionTitle>
              {resumeSectionScores.map((s) => (
                <div key={s.label} style={{ marginBottom: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <span style={{ fontSize: 13 }}>{s.label}</span>
                    <span style={{ fontSize: 12, color: '#f5c518', fontWeight: 600 }}>{s.pct}%</span>
                  </div>
                  <ProgressBar pct={s.pct} height={5} />
                </div>
              ))}
            </div>
          </div>

          {/* Suggestions */}
          <div className="card">
            <SectionTitle>🤖 AI Suggestions</SectionTitle>
            {resumeSuggestions.map((s, i) => (
              <div
                key={i}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: 10,
                  padding: '10px 0', borderBottom: '1px solid #ffffff10',
                }}
              >
                <span style={{ fontSize: 15 }}>
                  {s.type === 'error' ? '🔴' : s.type === 'warn' ? '🟡' : '🟢'}
                </span>
                <span style={{ fontSize: 13.5, lineHeight: 1.5 }}>{s.text}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

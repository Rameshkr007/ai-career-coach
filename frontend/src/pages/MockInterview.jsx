// pages/MockInterview.jsx
import React, { useState } from 'react';
import { ProgressBar, SectionTitle } from '../components/Shared';
import { interviewQuestions } from '../data/dummyData';

export default function MockInterview() {
  const [qIdx, setQIdx]         = useState(0);
  const [answer, setAnswer]     = useState('');
  const [submitted, setSubmitted] = useState(false);

  const q = interviewQuestions[qIdx];

  const handleSubmit = () => { if (answer.trim()) setSubmitted(true); };
  const handleNext   = () => {
    setQIdx((qIdx + 1) % interviewQuestions.length);
    setAnswer('');
    setSubmitted(false);
  };

  return (
    <div className="page">
      <div className="page-header">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h1 className="page-title">Mock Interview</h1>
            <p className="page-sub">Practice with AI-generated questions</p>
          </div>
          {/* Question selector */}
          <div style={{ display: 'flex', gap: 8 }}>
            {interviewQuestions.map((_, i) => (
              <div
                key={i}
                onClick={() => { setQIdx(i); setAnswer(''); setSubmitted(false); }}
                style={{
                  width: 32, height: 32, borderRadius: 8, cursor: 'pointer',
                  background: i === qIdx ? '#f5c518' : '#ffffff10',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: 700,
                  color: i === qIdx ? '#000' : '#7878a0',
                }}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Question card */}
      <div className="interview-q">
        <div className="q-num">
          {q.cat.toUpperCase()} ·{' '}
          <span className={q.diff === 'Hard' ? 'tag-red' : q.diff === 'Easy' ? 'tag-green' : 'tag'}>
            {q.diff}
          </span>
        </div>
        <p className="q-text">{q.q}</p>
      </div>

      {/* Answer input */}
      {!submitted && (
        <div className="card" style={{ marginBottom: 16 }}>
          <SectionTitle>✍️ Your Answer</SectionTitle>
          <textarea
            className="textarea"
            placeholder="Type your answer here. Use the STAR method: Situation → Task → Action → Result..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            style={{ marginBottom: 14 }}
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
            <button className="btn-outline" onClick={handleNext}>Skip</button>
            <button className="btn" onClick={handleSubmit} disabled={!answer.trim()}>
              Submit Answer
            </button>
          </div>
        </div>
      )}

      {/* Feedback */}
      {submitted && (
        <div className="card glow">
          <SectionTitle>🤖 AI Feedback</SectionTitle>

          <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 20 }}>
            <div style={{ textAlign: 'center' }}>
              <div className="feedback-score">7</div>
              <div style={{ fontSize: 12, color: '#7878a0' }}>out of 10</div>
            </div>

            <div style={{ flex: 1 }}>
              {[
                { label: 'Structure', pct: 80  },
                { label: 'Clarity',   pct: 70  },
                { label: 'Depth',     pct: 60, warn: true },
              ].map((item) => (
                <div key={item.label} style={{ marginBottom: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <span style={{ fontSize: 12.5 }}>{item.label}</span>
                    <span style={{ fontSize: 12.5, color: item.warn ? '#f87171' : '#f5c518' }}>
                      {item.pct / 10}/10
                    </span>
                  </div>
                  <ProgressBar pct={item.pct} height={5} />
                </div>
              ))}
            </div>
          </div>

          <div className="card2" style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#4ade80', marginBottom: 6 }}>✅ Strengths</div>
            <p style={{ fontSize: 13, color: '#7878a0', lineHeight: 1.6 }}>
              Good use of the STAR framework. Your situation and task were clearly defined.
              Strong quantification of results with specific metrics.
            </p>
          </div>

          <div className="card2" style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#f87171', marginBottom: 6 }}>⚠️ Improve</div>
            <p style={{ fontSize: 13, color: '#7878a0', lineHeight: 1.6 }}>
              The "Action" section was brief. Expand on your individual contribution vs. team effort.
              Add more technical detail about tools and methods used.
            </p>
          </div>

          <button className="btn" onClick={handleNext} style={{ width: '100%' }}>
            Next Question →
          </button>
        </div>
      )}
    </div>
  );
}

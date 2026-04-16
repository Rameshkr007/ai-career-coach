// pages/CareerRoadmap.jsx
import React, { useState } from 'react';
import { roadmapStages } from '../data/dummyData';

export default function CareerRoadmap({ user, roadmap, onGenerateRoadmap }) {
  const [role, setRole] = useState(user?.role || '');
  const [skills, setSkills] = useState(user?.skills || '');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      await onGenerateRoadmap(role, skills);
    } catch (error) {
      console.error('Error generating roadmap:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!roadmap) {
    return (
      <div className="page">
        <div className="page-header">
          <h1 className="page-title">Generate Your Career Roadmap</h1>
          <p className="page-sub">Enter your target role and current skills to get a personalized roadmap.</p>
        </div>

        <div className="card" style={{ maxWidth: 500, margin: '0 auto' }}>
          <div className="form-group">
            <label className="form-label">Target Job Role</label>
            <input
              className="input"
              type="text"
              placeholder="e.g., Data Analyst, Software Engineer"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Current Skills</label>
            <textarea
              className="input"
              placeholder="e.g., Python, SQL, Excel"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              rows={3}
            />
          </div>

          <button
            className="btn"
            onClick={handleGenerate}
            disabled={loading || !role.trim() || !skills.trim()}
            style={{ width: '100%', padding: '12px' }}
          >
            {loading ? 'Generating...' : 'Generate Roadmap →'}
          </button>
        </div>
      </div>
    );
  }

  // If roadmap is generated, display it
  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Career Roadmap</h1>
        <p className="page-sub">Your personalized path to becoming a {role}</p>
      </div>

      <div className="card">
        <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit', fontSize: 14 }}>
          {roadmap}
        </pre>
      </div>
    </div>
  );
}

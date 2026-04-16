// components/Sidebar.jsx
import React from 'react';

const NAV_ITEMS = [
  { icon: '⚡', label: 'Dashboard',    id: 'dashboard'  },
  { icon: '🗺️', label: 'Career Roadmap', id: 'roadmap'  },
  { icon: '📈', label: 'Progress',     id: 'progress'   },
  { icon: '🎤', label: 'Mock Interview', id: 'interview' },
  { icon: '📊', label: 'Analytics',   id: 'analytics'  },
  { icon: '📄', label: 'Resume Analyzer', id: 'resume'  },
  { icon: '🎯', label: 'Job Readiness', id: 'readiness' },
];

export default function Sidebar({ page, setPage }) {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        AI<span>Career</span>
      </div>

      <div className="nav-section">Main Menu</div>

      {NAV_ITEMS.map((item) => (
        <div
          key={item.id}
          className={`nav-item ${page === item.id ? 'active' : ''}`}
          onClick={() => setPage(item.id)}
        >
          <span className="nav-icon">{item.icon}</span>
          {item.label}
        </div>
      ))}

      <div style={{ marginTop: 'auto', padding: '0 20px' }}>
        <div
          className="nav-item"
          onClick={() => setPage('landing')}
          style={{ fontSize: 12 }}
        >
          ← Back to Landing
        </div>
      </div>
    </div>
  );
}

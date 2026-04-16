// components/Topbar.jsx
import React from 'react';

export default function Topbar({ title }) {
  return (
    <div className="topbar">
      <div className="topbar-title">{title}</div>
      <div className="topbar-right">
        <div className="tag">Data Analyst</div>
        <div className="avatar">AK</div>
      </div>
    </div>
  );
}

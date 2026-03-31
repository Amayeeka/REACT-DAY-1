// src/components/CurrentYear.jsx

import './CurrentYear.css';

function CurrentYear() {
  const now = new Date();

  const stats = [
    { label: 'Year',  value: now.getFullYear() },
    { label: 'Date',  value: now.toLocaleDateString('en-US', { month: 'long', day: 'numeric' }) },
    { label: 'Day',   value: now.toLocaleDateString('en-US', { weekday: 'long' }) },
  ];

  return (
    <div className="currentyear-card">
      <div className="currentyear-emoji">📅</div>
      <h2>Current Date Info</h2>

      <div className="currentyear-stats">
        {stats.map(({ label, value }) => (
          <div key={label} className="currentyear-stat">
            <div className="currentyear-stat-label">{label}</div>
            <div className="currentyear-stat-value">{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CurrentYear;
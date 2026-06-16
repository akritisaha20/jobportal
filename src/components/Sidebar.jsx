import React from 'react';
import { categories } from '../data/jobs';

const categoryIcons = {
  All: '🌐', Engineering: '⚙️', Design: '🎨', Marketing: '📣', Data: '📊'
};

export default function Sidebar({ activeCategory, setCategory, salaryRange, setSalaryRange, jobType, setJobType, jobCount }) {
  const types = ['All Types', 'Full-time', 'Contract', 'Part-time'];

  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3 className="sidebar-title">Categories</h3>
        <div className="category-list">
          {categories.map(cat => (
            <button key={cat} className={`category-btn ${activeCategory === cat ? 'active' : ''}`} onClick={() => setCategory(cat)}>
              <span className="cat-icon">{categoryIcons[cat]}</span>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="sidebar-section">
        <h3 className="sidebar-title">Job Type</h3>
        <div className="category-list">
          {types.map(t => (
            <button key={t} className={`category-btn ${jobType === t ? 'active' : ''}`} onClick={() => setJobType(t)}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="sidebar-section">
        <h3 className="sidebar-title">Salary Range</h3>
        <div className="salary-filter">
          <div className="salary-display">
            <span>${salaryRange[0]}k</span>
            <span>${salaryRange[1]}k+</span>
          </div>
          <input type="range" min="50" max="250" step="10"
            value={salaryRange[0]}
            onChange={e => setSalaryRange([parseInt(e.target.value), salaryRange[1]])}
            className="salary-slider"
          />
          <input type="range" min="50" max="250" step="10"
            value={salaryRange[1]}
            onChange={e => setSalaryRange([salaryRange[0], parseInt(e.target.value)])}
            className="salary-slider"
          />
        </div>
      </div>

      <div className="results-count">
        <span>{jobCount} jobs found</span>
      </div>
    </aside>
  );
}

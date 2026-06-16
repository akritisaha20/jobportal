import React from 'react';
import { jobsData } from '../data/jobs';

export default function Dashboard({ onJobClick, bookmarks }) {
  const savedJobs = jobsData.filter(j => bookmarks.includes(j.id));
  const stats = [
    { label: 'Jobs Applied', value: '3', icon: '📨', color: '#6366f1' },
    { label: 'Saved Jobs', value: savedJobs.length.toString(), icon: '🔖', color: '#f59e0b' },
    { label: 'Profile Views', value: '28', icon: '👁', color: '#10b981' },
    { label: 'Interviews', value: '1', icon: '🎯', color: '#ef4444' },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h2 className="dashboard-title">My Dashboard</h2>
          <p className="dashboard-sub">Track your job search progress</p>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((s, i) => (
          <div key={i} className="stat-card">
            <div className="stat-icon" style={{ background: s.color + '20', color: s.color }}>{s.icon}</div>
            <div>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label-text">{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-section">
        <h3 className="section-heading">Saved Jobs</h3>
        {savedJobs.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">🔖</div>
            <p>No saved jobs yet. Bookmark jobs to see them here.</p>
          </div>
        ) : (
          <div className="saved-jobs-list">
            {savedJobs.map(job => (
              <div key={job.id} className="saved-job-row" onClick={() => onJobClick(job)}>
                <div className="saved-job-logo" style={{ background: job.companyColor + '20', color: job.companyColor }}>
                  {job.companyLogo}
                </div>
                <div className="saved-job-info">
                  <span className="saved-job-title">{job.title}</span>
                  <span className="saved-job-company">{job.company} • {job.location}</span>
                </div>
                <span className="saved-job-salary">{job.salary}</span>
                <span className="view-btn">View →</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="dashboard-section">
        <h3 className="section-heading">Recent Applications</h3>
        <div className="empty-state">
          <div className="empty-icon">📨</div>
          <p>Applications you submit will appear here.</p>
        </div>
      </div>
    </div>
  );
}

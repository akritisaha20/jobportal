import React, { useState } from 'react';

export default function JobCard({ job, onClick, onBookmark, isBookmarked }) {
  const [bookmarked, setBookmarked] = useState(isBookmarked || false);

  const handleBookmark = (e) => {
    e.stopPropagation();
    setBookmarked(!bookmarked);
    if (onBookmark) onBookmark(job.id);
  };

  return (
    <div className="job-card" onClick={onClick}>
      {job.featured && <span className="featured-badge">⭐ Featured</span>}
      <div className="job-card-top">
        <div className="company-logo" style={{ background: job.companyColor + '20', color: job.companyColor }}>
          {job.companyLogo}
        </div>
        <div className="job-card-header">
          <h2 className="job-title">{job.title}</h2>
          <span className="company-name">{job.company}</span>
        </div>
        <button className={`bookmark-btn ${bookmarked ? 'active' : ''}`} onClick={handleBookmark} title="Save job">
          {bookmarked ? '🔖' : '🔖'}
          <span className="bookmark-indicator" style={{ opacity: bookmarked ? 1 : 0.3 }}>●</span>
        </button>
      </div>

      <div className="job-tags">
        <span className={`type-tag type-${job.type.replace('-','').toLowerCase()}`}>{job.type}</span>
        <span className="location-tag">📍 {job.location}</span>
      </div>

      <div className="job-meta">
        <span className="salary-chip">💰 {job.salary}</span>
        <span className="time-chip">🕐 {job.date}</span>
      </div>
    </div>
  );
}

import React, { useState } from 'react';

export default function Hero({ onSearch, onGetStarted }) {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(search);
    onGetStarted();
  };

  const popularSearches = ['React Developer', 'UI Designer', 'Data Scientist', 'DevOps', 'Marketing'];

  return (
    <div className="hero">
      {/* Animated background blobs */}
      <div className="hero-blob hero-blob-1"></div>
      <div className="hero-blob hero-blob-2"></div>
      <div className="hero-blob hero-blob-3"></div>

      <div className="hero-content">
        <div className="hero-badge">🚀 Over 8,000+ jobs available</div>
        <h1 className="hero-title">
          Find Your <span className="hero-gradient">Dream Job</span><br/>
          Without the Hassle
        </h1>
        <p className="hero-subtitle">
          Connect with top companies like Google, Stripe & Netflix.<br/>
          Your next big opportunity is just one search away.
        </p>

        <form className="hero-search" onSubmit={handleSearch}>
          <div className="hero-search-box">
            <span className="hero-search-icon">🔍</span>
            <input
              type="text"
              placeholder="Job title, company, or keyword..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="hero-search-input"
            />
            <button type="submit" className="hero-search-btn">Search Jobs</button>
          </div>
        </form>

        <div className="popular-searches">
          <span className="popular-label">Popular:</span>
          {popularSearches.map(s => (
            <button key={s} className="popular-tag" onClick={() => { onSearch(s); onGetStarted(); }}>
              {s}
            </button>
          ))}
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-num">8K+</span>
            <span className="hero-stat-label">Active Jobs</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <span className="hero-stat-num">500+</span>
            <span className="hero-stat-label">Companies</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <span className="hero-stat-num">50K+</span>
            <span className="hero-stat-label">Hired</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <span className="hero-stat-num">4.9★</span>
            <span className="hero-stat-label">Rating</span>
          </div>
        </div>
      </div>

      {/* Company logos strip */}
      <div className="companies-strip">
        <p className="companies-label">Trusted by top companies</p>
        <div className="companies-logos">
          {[
            {name:'Google', color:'#4285F4'},
            {name:'Airbnb', color:'#FF5A5F'},
            {name:'Stripe', color:'#635BFF'},
            {name:'Netflix', color:'#E50914'},
            {name:'Meta', color:'#0866FF'},
            {name:'Spotify', color:'#1DB954'},
            {name:'Figma', color:'#F24E1E'},
          ].map(c => (
            <div key={c.name} className="company-pill" style={{borderColor: c.color + '40', color: c.color}}>
              <span className="company-pill-dot" style={{background: c.color}}></span>
              {c.name}
            </div>
          ))}
        </div>
      </div>

      {/* Category cards */}
      <div className="hero-categories">
        <h2 className="hero-categories-title">Browse by Category</h2>
        <div className="hero-cat-grid">
          {[
            {icon:'⚙️', name:'Engineering', count:'3 jobs', color:'#6366f1', bg:'rgba(99,102,241,0.08)'},
            {icon:'🎨', name:'Design', count:'3 jobs', color:'#f59e0b', bg:'rgba(245,158,11,0.08)'},
            {icon:'📣', name:'Marketing', count:'1 job', color:'#10b981', bg:'rgba(16,185,129,0.08)'},
            {icon:'📊', name:'Data', count:'1 job', color:'#ef4444', bg:'rgba(239,68,68,0.08)'},
          ].map(cat => (
            <div key={cat.name} className="hero-cat-card" style={{background: cat.bg, borderColor: cat.color + '30'}}
              onClick={() => onGetStarted(cat.name)}>
              <div className="hero-cat-icon" style={{background: cat.color + '20', color: cat.color}}>{cat.icon}</div>
              <h3 className="hero-cat-name">{cat.name}</h3>
              <span className="hero-cat-count">{cat.count}</span>
              <span className="hero-cat-arrow" style={{color: cat.color}}>→</span>
            </div>
          ))}
        </div>
      </div>

      <button className="hero-browse-btn" onClick={() => onGetStarted()}>
        Browse All Jobs →
      </button>
    </div>
  );
}

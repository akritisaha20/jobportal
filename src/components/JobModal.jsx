import React, { useState } from 'react';

export default function JobModal({ job, onClose }) {
  const [tab, setTab] = useState('overview');
  const [applied, setApplied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', cover: '' });
  const [errors, setErrors] = useState({});

  if (!job) return null;

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.phone.trim()) e.phone = 'Phone is required';
    if (!form.cover.trim()) e.cover = 'Cover letter is required';
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setApplied(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-body" onClick={e => e.stopPropagation()}>
        <button className="close-x" onClick={onClose}>✕</button>

        <div className="modal-header">
          <div className="modal-company-logo" style={{ background: job.companyColor + '20', color: job.companyColor }}>
            {job.companyLogo}
          </div>
          <div>
            <h2 className="modal-title">{job.title}</h2>
            <p className="modal-company">{job.company} • {job.location}</p>
            <div className="modal-tags">
              <span className={`type-tag type-${job.type.replace('-','').toLowerCase()}`}>{job.type}</span>
              <span className="salary-chip">💰 {job.salary}</span>
            </div>
          </div>
        </div>

        <div className="modal-tabs">
          {['overview', 'company', 'apply'].map(t => (
            <button key={t} className={`tab-btn ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>
              {t === 'overview' ? '📋 Overview' : t === 'company' ? '🏢 Company' : '✉️ Apply'}
            </button>
          ))}
        </div>

        <div className="modal-content">
          {tab === 'overview' && (
            <div className="tab-panel">
              <div className="section-block">
                <h4>About the Role</h4>
                <p>{job.description}</p>
              </div>
              <div className="section-block">
                <h4>Requirements</h4>
                <ul className="req-list">
                  {job.requirements.map((r, i) => <li key={i}><span className="req-dot">✓</span>{r}</li>)}
                </ul>
              </div>
              <div className="section-block">
                <h4>Benefits</h4>
                <div className="benefits-grid">
                  {job.benefits.map((b, i) => <span key={i} className="benefit-chip">🎁 {b}</span>)}
                </div>
              </div>
              <button className="apply-main-btn" onClick={() => setTab('apply')}>Apply for this Position →</button>
            </div>
          )}

          {tab === 'company' && (
            <div className="tab-panel">
              <div className="company-profile">
                <div className="company-profile-logo" style={{ background: job.companyColor + '20', color: job.companyColor }}>
                  {job.companyLogo}
                </div>
                <h3>{job.company}</h3>
                <p className="company-bio">{job.about}</p>
                <div className="company-stats">
                  <div className="stat-box"><span className="stat-num">10K+</span><span className="stat-label">Employees</span></div>
                  <div className="stat-box"><span className="stat-num">50+</span><span className="stat-label">Countries</span></div>
                  <div className="stat-box"><span className="stat-num">4.5★</span><span className="stat-label">Glassdoor</span></div>
                </div>
              </div>
            </div>
          )}

          {tab === 'apply' && (
            <div className="tab-panel">
              {applied ? (
                <div className="success-box">
                  <div className="success-icon">🎉</div>
                  <h3>Application Submitted!</h3>
                  <p>Your application for <strong>{job.title}</strong> at <strong>{job.company}</strong> has been sent. Good luck!</p>
                  <button className="apply-main-btn" onClick={onClose}>Close</button>
                </div>
              ) : (
                <div className="apply-form">
                  <h3>Apply for {job.title}</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input placeholder="Your full name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className={errors.name ? 'error' : ''} />
                      {errors.name && <span className="error-msg">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input placeholder="+1 (555) 000-0000" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className={errors.phone ? 'error' : ''} />
                      {errors.phone && <span className="error-msg">{errors.phone}</span>}
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input placeholder="you@email.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className={errors.email ? 'error' : ''} />
                    {errors.email && <span className="error-msg">{errors.email}</span>}
                  </div>
                  <div className="form-group">
                    <label>Cover Letter *</label>
                    <textarea rows={5} placeholder="Tell us why you're a great fit..." value={form.cover} onChange={e => setForm({...form, cover: e.target.value})} className={errors.cover ? 'error' : ''} />
                    {errors.cover && <span className="error-msg">{errors.cover}</span>}
                  </div>
                  <button className="apply-main-btn" onClick={handleSubmit}>Submit Application →</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

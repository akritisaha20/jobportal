import React, { useState } from 'react';

export default function Register({ onSwitch, onLogin }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleRegister = () => {
    if (!form.name || !form.email || !form.password) { setError('Please fill in all fields.'); return; }
    if (form.password.length < 8) { setError('Password must be at least 8 characters.'); return; }
    onLogin();
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <span className="auth-badge">Join 10,000+ Pros</span>
        <h2 className="auth-heading">Get Started</h2>
        <p className="auth-subtitle">Create your profile and start applying to top tech jobs.</p>
        {error && <div className="auth-error">{error}</div>}
        <div className="form-group">
          <label>Full Name</label>
          <input placeholder="John Doe" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="name@company.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Min. 8 characters" value={form.password} onChange={e => setForm({...form, password: e.target.value})} />
        </div>
        <button className="auth-submit-btn" onClick={handleRegister}>Create Account →</button>
        <p className="auth-switch">Already a member? <span onClick={onSwitch}>Sign in instead</span></p>
      </div>
    </div>
  );
}

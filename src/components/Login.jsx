import React, { useState } from 'react';

export default function Login({ onSwitch, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email || !password) { setError('Please fill in all fields.'); return; }
    onLogin();
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <span className="auth-badge">Welcome Back</span>
        <h2 className="auth-heading">Sign In</h2>
        <p className="auth-subtitle">Enter your details to access your account.</p>
        {error && <div className="auth-error">{error}</div>}
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="name@company.com" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button className="auth-submit-btn" onClick={handleLogin}>Sign In →</button>
        <p className="auth-switch">Don't have an account? <span onClick={onSwitch}>Create one</span></p>
      </div>
    </div>
  );
}

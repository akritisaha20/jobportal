import React from 'react';

export default function Navbar({ setView, isLoggedIn, setIsLoggedIn, view }) {
  return (
    <nav className="navbar">
      <div className="nav-content">
        {/* Left Side: Logo */}
        <div className="logo" onClick={() => setView("jobs")} style={{cursor: 'pointer'}}>
          JOBSCOPE
        </div>

        {/* Center: Search Bar (Only shows on Jobs view) */}
        <div className="search-container">
          {view === "jobs" && (
            <input 
              type="text" 
              placeholder="Search jobs..." 
              className="nav-search"
            />
          )}
        </div>

        {/* Right Side: Auth Buttons */}
        <div className="nav-links">
          {isLoggedIn ? (
            <button onClick={() => setIsLoggedIn(false)} className="logout-btn">Logout</button>
          ) : (
            <div className="auth-group">
              <button onClick={() => setView("login")} className="login-link">Login</button>
              <button onClick={() => setView("register")} className="signup-btn">Sign Up</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
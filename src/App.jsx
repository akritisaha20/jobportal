import React, { useState } from 'react';
import './App.css';
import { jobsData } from './data/jobs';
import Sidebar from './components/Sidebar';
import JobCard from './components/JobCard';
import JobModal from './components/JobModal';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Hero from './components/Hero';

function App() {
  const [view, setView] = useState("hero");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedJob, setSelectedJob] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);
  const [salaryRange, setSalaryRange] = useState([50, 250]);
  const [jobType, setJobType] = useState("All Types");
  const [darkMode, setDarkMode] = useState(false);

  const toggleBookmark = (id) => {
    setBookmarks(prev => prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]);
  };

  const goToJobs = (cat) => {
    if (cat) setCategory(cat);
    setView("jobs");
  };

  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "All" || job.category === category;
    const matchesType = jobType === "All Types" || job.type === jobType;
    const matchesSalary = job.salaryMin >= salaryRange[0] && job.salaryMax <= salaryRange[1] + 50;
    return matchesSearch && matchesCategory && matchesType && matchesSalary;
  });

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo" onClick={() => setView("hero")}>
            <span className="logo-icon">⚡</span>JOBSCOPE
          </div>

          {view === "jobs" && (
            <div className="nav-search-wrap">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search jobs, companies..."
                className="nav-search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          )}

          <div className="nav-links">
            {view !== "jobs" && view !== "hero" ? null : (
              <button className="nav-text-btn" onClick={() => setView("jobs")}>Jobs</button>
            )}
            <button className="dark-toggle" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? '☀️' : '🌙'}
            </button>
            {isLoggedIn ? (
              <div className="auth-group">
                <button onClick={() => setView("dashboard")} className={`nav-link-btn ${view === 'dashboard' ? 'active' : ''}`}>
                  Dashboard
                </button>
                <button onClick={() => { setIsLoggedIn(false); setView("hero"); }} className="logout-pill">
                  Logout
                </button>
              </div>
            ) : (
              <div className="auth-group">
                <button onClick={() => setView("login")} className="login-link">Login</button>
                <button onClick={() => setView("register")} className="signup-pill">Sign Up</button>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="content-area">
        {view === "hero" && (
          <Hero onSearch={setSearchTerm} onGetStarted={goToJobs} />
        )}
        {view === "login" && (
          <Login onSwitch={() => setView("register")} onLogin={() => { setIsLoggedIn(true); setView("jobs"); }} />
        )}
        {view === "register" && (
          <Register onSwitch={() => setView("login")} onLogin={() => { setIsLoggedIn(true); setView("jobs"); }} />
        )}
        {view === "dashboard" && (
          <div className="container">
            <Dashboard onJobClick={setSelectedJob} bookmarks={bookmarks} />
          </div>
        )}
        {view === "jobs" && (
          <div className="container">
            <Sidebar
              activeCategory={category}
              setCategory={setCategory}
              salaryRange={salaryRange}
              setSalaryRange={setSalaryRange}
              jobType={jobType}
              setJobType={setJobType}
              jobCount={filteredJobs.length}
            />
            <main className="feed">
              <div className="feed-header">
                <h1 className="feed-title">
                  {category === "All" ? "Featured Jobs" : `${category} Jobs`}
                </h1>
                <span className="job-count">{filteredJobs.length} results</span>
              </div>
              {filteredJobs.length === 0 ? (
                <div className="no-results">
                  <div className="no-results-icon">🔍</div>
                  <h3>No jobs found</h3>
                  <p>Try adjusting your filters or search term.</p>
                </div>
              ) : (
                <div className="job-grid">
                  {filteredJobs.map(job => (
                    <JobCard
                      key={job.id}
                      job={job}
                      onClick={() => setSelectedJob(job)}
                      onBookmark={toggleBookmark}
                      isBookmarked={bookmarks.includes(job.id)}
                    />
                  ))}
                </div>
              )}
            </main>
          </div>
        )}
      </div>

      {selectedJob && (
        <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
}

export default App;

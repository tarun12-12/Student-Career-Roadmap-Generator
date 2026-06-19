import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Compass, Sparkles, CheckSquare, ShieldCheck, Download, ExternalLink } from 'lucide-react';
import './Home.css';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="home-container fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge badge badge-accent">
            <Sparkles size={14} />
            <span>Interactive Roadmap Generation</span>
          </div>
          <h1 className="hero-title">
            Navigate Your Career Path with <span className="text-gradient">Precision</span>
          </h1>
          <p className="hero-subtitle">
            Enter your education level, skills, and aspirations. Instantly receive customized, 
            interactive learning paths with curated study materials and project ideas.
          </p>
          <div className="hero-actions">
            {user ? (
              <Link to="/dashboard" className="btn btn-primary btn-hero">
                Go to Dashboard
              </Link>
            ) : (
              <>
                <Link to="/signup" className="btn btn-primary btn-hero">
                  Start Planning Free
                </Link>
                <Link to="/login" className="btn btn-secondary btn-hero">
                  Sign In
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hero-visual">
          <div className="visual-card-bg glass-card">
            <Compass className="spinning-compass" size={60} />
            <div className="mock-steps">
              <div className="mock-step checked">
                <div className="mock-dot checked"></div>
                <div className="mock-line">HTML, CSS & Web Dev Basics</div>
              </div>
              <div className="mock-step checked">
                <div className="mock-dot checked"></div>
                <div className="mock-line">JS Programming & API Fetching</div>
              </div>
              <div className="mock-step active">
                <div className="mock-dot active"></div>
                <div className="mock-line animate-pulse">React.js Single Page Apps</div>
              </div>
              <div className="mock-step">
                <div className="mock-dot"></div>
                <div className="mock-line">Database Schemes & JWT security</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section">
        <h2 className="section-title">Why Use CareerMap?</h2>
        <div className="features-grid">
          <div className="feature-card glass-card">
            <div className="feature-icon-wrapper">
              <Sparkles className="feature-icon" size={24} />
            </div>
            <h3>Customized Pathing</h3>
            <p>
              Adjusts recommended learning times and complexity based on whether you're in 10th, 
              12th, or College, skipping skills you already know.
            </p>
          </div>

          <div className="feature-card glass-card">
            <div className="feature-icon-wrapper">
              <CheckSquare className="feature-icon" size={24} />
            </div>
            <h3>Progress Tracking</h3>
            <p>
              Check off completed steps to visually inspect your career preparedness with animated 
              progress trackers and stats.
            </p>
          </div>

          <div className="feature-card glass-card">
            <div className="feature-icon-wrapper">
              <ShieldCheck className="feature-icon" size={24} />
            </div>
            <h3>Curated Resources</h3>
            <p>
              Skip the search. Access top-rated free documentation, video tutorials, and guides directly 
              tied to each step.
            </p>
          </div>

          <div className="feature-card glass-card">
            <div className="feature-icon-wrapper">
              <Download className="feature-icon" size={24} />
            </div>
            <h3>Download as PDF</h3>
            <p>
              Export your roadmap as a clean, professionally formatted PDF to keep as a printout 
              or upload to your portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <footer className="home-footer no-print">
        <p>© 2026 CareerMap. Built for Students Worldwide.</p>
      </footer>
    </div>
  );
};

export default Home;

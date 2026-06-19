import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp, Link as LinkIcon, BookOpen, Video, ExternalLink, Award, FileText } from 'lucide-react';
import './TimelineStepper.css';

const TimelineStepper = ({ steps, onToggleStep }) => {
  // Store expanded steps indices (default first step is expanded)
  const [expandedSteps, setExpandedSteps] = useState({ 0: true });

  const toggleExpand = (index) => {
    setExpandedSteps((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const getResourceIcon = (type) => {
    switch (type) {
      case 'video':
        return <Video size={14} className="resource-icon-media video" />;
      case 'documentation':
        return <FileText size={14} className="resource-icon-media doc" />;
      default:
        return <BookOpen size={14} className="resource-icon-media generic" />;
    }
  };

  const getDifficultyBadge = (difficulty) => {
    let className = 'badge';
    if (difficulty === 'Beginner') className += ' badge-success';
    else if (difficulty === 'Intermediate') className += ' badge-accent';
    else className += ' badge-danger'; // Custom danger styles inside css
    return <span className={`${className} project-difficulty`}>{difficulty}</span>;
  };

  return (
    <div className="timeline-stepper">
      {steps.map((step, idx) => {
        const isExpanded = expandedSteps[idx];
        const isCompleted = step.completed;

        return (
          <div 
            key={step._id} 
            className={`timeline-item ${isCompleted ? 'completed' : ''} ${isExpanded ? 'expanded' : ''}`}
          >
            {/* Left Timeline Bar and Node */}
            <div className="timeline-node-container">
              <button 
                onClick={() => onToggleStep(step._id)}
                className={`timeline-node ${isCompleted ? 'checked' : ''}`}
                title={isCompleted ? "Mark incomplete" : "Mark complete"}
                aria-label={isCompleted ? `Mark Step ${step.stepNumber} incomplete` : `Mark Step ${step.stepNumber} complete`}
              >
                {isCompleted ? <Check size={16} /> : <span>{step.stepNumber}</span>}
              </button>
              {idx < steps.length - 1 && <div className="timeline-connector"></div>}
            </div>

            {/* Right Card Panel */}
            <div className="timeline-card glass-card">
              <div 
                className="timeline-card-header" 
                onClick={() => toggleExpand(idx)}
                style={{ cursor: 'pointer' }}
              >
                <div className="header-left">
                  <span className="step-time">{step.estimatedTime}</span>
                  <h3 className="step-title">{step.title}</h3>
                </div>
                <button className="btn-toggle-expand" aria-label={isExpanded ? "Collapse step details" : "Expand step details"}>
                  {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
              </div>

              {isExpanded && (
                <div className="timeline-card-body fade-in">
                  <p className="step-description">{step.description}</p>

                  {/* Skills Section */}
                  {step.skillsToAcquire && step.skillsToAcquire.length > 0 && (
                    <div className="step-section">
                      <h4>Skills to Learn:</h4>
                      <div className="skills-row">
                        {step.skillsToAcquire.map((skill) => (
                          <span key={skill} className="badge badge-accent">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Resources Section */}
                  {step.resources && step.resources.length > 0 && (
                    <div className="step-section">
                      <h4>Recommended Resources:</h4>
                      <ul className="resources-list">
                        {step.resources.map((res, rIdx) => (
                          <li key={rIdx} className="resource-item">
                            {getResourceIcon(res.type)}
                            <a 
                              href={res.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="resource-link"
                            >
                              <span>{res.name}</span>
                              <ExternalLink size={12} className="link-arrow" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Projects Section */}
                  {step.projects && step.projects.length > 0 && (
                    <div className="step-section">
                      <h4>Suggested Projects:</h4>
                      <div className="projects-grid">
                        {step.projects.map((proj, pIdx) => (
                          <div key={pIdx} className="project-card">
                            <div className="project-card-header">
                              <Award size={16} className="project-icon" />
                              <h5>{proj.title}</h5>
                              {getDifficultyBadge(proj.difficulty)}
                            </div>
                            <p className="project-desc">{proj.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Bottom Toggle Button for convenience */}
                  <div className="timeline-card-actions">
                    <button 
                      onClick={() => onToggleStep(step._id)}
                      className={`btn ${isCompleted ? 'btn-secondary' : 'btn-primary'}`}
                    >
                      <Check size={16} />
                      <span>{isCompleted ? 'Mark as Incomplete' : 'Mark Step as Completed'}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TimelineStepper;

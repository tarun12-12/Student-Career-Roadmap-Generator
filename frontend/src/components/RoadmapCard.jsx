import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Trash2, ArrowRight, BookOpen } from 'lucide-react';
import ProgressBar from './ProgressBar';
import './RoadmapCard.css';

const RoadmapCard = ({ roadmap, onDelete }) => {
  const { _id, title, goal, educationLevel, completedPercentage, createdAt, steps } = roadmap;

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const completedSteps = steps ? steps.filter(s => s.completed).length : 0;
  const totalSteps = steps ? steps.length : 0;

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.confirm(`Are you sure you want to delete the "${title}" roadmap?`)) {
      onDelete(_id);
    }
  };

  return (
    <div className="roadmap-card glass-card fade-in">
      <div className="roadmap-card-header">
        <span className="badge badge-accent card-badge">{educationLevel}</span>
        <button 
          onClick={handleDelete} 
          className="btn-delete-card" 
          title="Delete Roadmap"
          aria-label={`Delete ${title} roadmap`}
        >
          <Trash2 size={16} />
        </button>
      </div>

      <div className="roadmap-card-body">
        <h3 className="roadmap-card-title">{title}</h3>
        <p className="roadmap-card-goal">{goal}</p>

        <div className="roadmap-card-meta">
          <span className="meta-item">
            <Calendar size={14} />
            {formatDate(createdAt)}
          </span>
          <span className="meta-item">
            <BookOpen size={14} />
            {completedSteps} / {totalSteps} Steps
          </span>
        </div>

        <div className="roadmap-card-progress">
          <span className="progress-label">Progress</span>
          <span className="progress-percentage">{completedPercentage}%</span>
        </div>
        <div className="progress-bar-track">
          <div className="progress-bar-fill" style={{ width: `${completedPercentage}%` }}></div>
        </div>
      </div>

      <div className="roadmap-card-footer">
        <Link to={`/roadmap/${_id}`} className="btn btn-secondary btn-view-roadmap">
          <span>View Roadmap</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default RoadmapCard;

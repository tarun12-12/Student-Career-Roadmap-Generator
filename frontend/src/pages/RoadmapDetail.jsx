import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import api from '../utils/api';
import { useToast } from '../context/ToastContext';
import ProgressBar from '../components/ProgressBar';
import TimelineStepper from '../components/TimelineStepper';
import { ArrowLeft, Printer, Trash2, Calendar, Award } from 'lucide-react';
import './RoadmapDetail.css';

const RoadmapDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRoadmap = async () => {
    try {
      const data = await api.get(`/roadmap/${id}`);
      setRoadmap(data);
    } catch (err) {
      console.error('Error fetching roadmap details:', err);
      showToast('Failed to load roadmap details', 'error');
      navigate('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRoadmap();
  }, [id]);

  const handleToggleStep = async (stepId) => {
    if (!roadmap) return;

    // Optimistically toggle locally first
    const originalRoadmap = { ...roadmap };
    const updatedSteps = roadmap.steps.map((step) => {
      if (step._id === stepId) {
        return { ...step, completed: !step.completed };
      }
      return step;
    });

    const completedCount = updatedSteps.filter((s) => s.completed).length;
    const completedPercentage = Math.round((completedCount / updatedSteps.length) * 100);

    setRoadmap((prev) => ({
      ...prev,
      steps: updatedSteps,
      completedPercentage,
    }));

    try {
      const data = await api.put(`/roadmap/${roadmap._id}/step/${stepId}`);
      setRoadmap(data); // Sync state with database response
      
      const step = data.steps.find(s => s._id === stepId);
      if (step && step.completed) {
        showToast('Step completed! Great job.', 'success');
      }
    } catch (err) {
      console.error('Error toggling step status:', err);
      showToast('Failed to update step progress', 'error');
      setRoadmap(originalRoadmap); // Rollback optimistic update
    }
  };

  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete this roadmap?`)) {
      try {
        await api.delete(`/roadmap/${roadmap._id}`);
        showToast('Roadmap removed successfully', 'success');
        navigate('/dashboard');
      } catch (err) {
        console.error('Error removing roadmap:', err);
        showToast('Failed to delete roadmap', 'error');
      }
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (!roadmap) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem' }}>
        <h3>Roadmap Not Found</h3>
        <Link to="/dashboard" className="btn btn-primary">
          Back to Dashboard
        </Link>
      </div>
    );
  }

  const completedCount = roadmap.steps.filter((s) => s.completed).length;
  const totalCount = roadmap.steps.length;

  return (
    <div className="detail-page-container fade-in">
      {/* Back & Options Nav Bar */}
      <div className="detail-navigation-bar flex-between no-print">
        <Link to="/dashboard" className="btn-back">
          <ArrowLeft size={16} />
          <span>Back to Dashboard</span>
        </Link>

        <div className="detail-actions">
          <button onClick={handlePrint} className="btn btn-secondary" title="Print/Save as PDF">
            <Printer size={16} />
            <span>Print / PDF</span>
          </button>
          <button onClick={handleDelete} className="btn btn-danger" title="Delete Roadmap">
            <Trash2 size={16} />
            <span>Delete</span>
          </button>
        </div>
      </div>

      {/* Printable Title Block */}
      <div className="print-header print-only">
        <h1>CareerMap Learning Roadmap</h1>
        <p>Goal: {roadmap.goal} | Target Level: {roadmap.educationLevel}</p>
        <p>Progress: {roadmap.completedPercentage}% ({completedCount}/{totalCount} steps completed)</p>
        <hr style={{ margin: '15px 0', borderColor: '#ccc' }} />
      </div>

      {/* Info Header Box */}
      <section className="detail-header-card glass-card">
        <div className="detail-header-left">
          <span className="badge badge-accent detail-badge">{roadmap.educationLevel} LEVEL</span>
          <h2 className="detail-title">{roadmap.title}</h2>
          <span className="detail-goal-tag">{roadmap.goal}</span>
          <p className="detail-description">{roadmap.description}</p>
          <div className="detail-meta">
            <span className="meta-item">
              <Calendar size={14} />
              Created on {new Date(roadmap.createdAt).toLocaleDateString()}
            </span>
            <span className="meta-item">
              <Award size={14} />
              {completedCount} of {totalCount} Steps Completed
            </span>
          </div>
        </div>

        <div className="detail-header-right">
          <ProgressBar percentage={roadmap.completedPercentage} size={130} strokeWidth={10} />
          <span className="progress-subtext no-print">Overall Progress</span>
        </div>
      </section>

      {/* Stepper Checklist */}
      <section className="detail-stepper-section">
        <div className="stepper-section-header flex-between no-print">
          <h3>Your Roadmap Milestones</h3>
          <span className="checklist-subtext">Click on numbers to complete, click step headers to view details.</span>
        </div>

        <TimelineStepper 
          steps={roadmap.steps} 
          onToggleStep={handleToggleStep} 
        />
      </section>
    </div>
  );
};

export default RoadmapDetail;

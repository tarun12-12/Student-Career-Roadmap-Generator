import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import { useToast } from '../context/ToastContext';
import { useAuth } from '../context/AuthContext';
import RoadmapCard from '../components/RoadmapCard';
import InputForm from '../components/InputForm';
import { Plus, X, GraduationCap, Compass, Trophy, Percent } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [roadmaps, setRoadmaps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // Fetch all roadmaps for the user
  const fetchRoadmaps = async () => {
    try {
      const data = await api.get('/roadmap');
      setRoadmaps(data);
    } catch (err) {
      console.error('Error fetching roadmaps:', err);
      showToast('Failed to load roadmaps', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRoadmaps();
  }, []);

  const handleCreateRoadmap = async (formData) => {
    setGenerating(true);
    try {
      const newRoadmap = await api.post('/roadmap/generate', formData);
      setRoadmaps((prev) => [newRoadmap, ...prev]);
      showToast(`Roadmap for "${newRoadmap.goal}" generated! Redirecting...`, 'success');
      // Navigate directly to the newly generated roadmap detail page
      navigate(`/roadmap/${newRoadmap._id}`);
    } catch (err) {
      console.error('Error generating roadmap:', err);
      showToast(err.message || 'Failed to generate roadmap', 'error');
    } finally {
      setGenerating(false);
    }
  };

  const handleDeleteRoadmap = async (id) => {
    try {
      await api.delete(`/roadmap/${id}`);
      setRoadmaps((prev) => prev.filter((r) => r._id !== id));
      showToast('Roadmap deleted successfully', 'success');
    } catch (err) {
      console.error('Error deleting roadmap:', err);
      showToast('Failed to delete roadmap', 'error');
    }
  };

  // Calculate statistics
  const totalRoadmaps = roadmaps.length;
  const avgProgress = totalRoadmaps > 0 
    ? Math.round(roadmaps.reduce((acc, curr) => acc + curr.completedPercentage, 0) / totalRoadmaps)
    : 0;
  const completedRoadmaps = roadmaps.filter(r => r.completedPercentage === 100).length;

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="dashboard-container fade-in">
      {/* Dashboard Stats */}
      <section className="dashboard-header-section">
        <div className="dashboard-meta-info">
          <h1>Student Workspace</h1>
          <p>Create, track, and complete your learning targets.</p>
        </div>

        <div className="dashboard-stats-grid">
          <div className="stat-box glass-card">
            <Compass size={22} className="stat-icon indigo" />
            <div className="stat-details">
              <span className="stat-num">{totalRoadmaps}</span>
              <span className="stat-label">Active Paths</span>
            </div>
          </div>

          <div className="stat-box glass-card">
            <Percent size={22} className="stat-icon cyan" />
            <div className="stat-details">
              <span className="stat-num">{avgProgress}%</span>
              <span className="stat-label">Average Completion</span>
            </div>
          </div>

          <div className="stat-box glass-card">
            <Trophy size={22} className="stat-icon success" />
            <div className="stat-details">
              <span className="stat-num">{completedRoadmaps}</span>
              <span className="stat-label">Paths Finished</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Roadmap Area */}
      <section className="dashboard-content-section">
        <div className="content-header flex-between">
          <h2>Your Learning Roadmaps</h2>
          <button 
            onClick={() => setShowForm(!showForm)} 
            className={`btn ${showForm ? 'btn-secondary' : 'btn-primary'}`}
          >
            {showForm ? <X size={18} /> : <Plus size={18} />}
            <span>{showForm ? 'Cancel' : 'Generate Roadmap'}</span>
          </button>
        </div>

        {/* Generate Form Panel */}
        {showForm && (
          <div className="form-panel-wrapper">
            <InputForm onSubmit={handleCreateRoadmap} loading={generating} />
          </div>
        )}

        {/* Empty state or grid list */}
        {roadmaps.length === 0 ? (
          <div className="empty-dashboard glass-card">
            <Compass size={48} className="empty-icon animate-pulse" />
            <h3>No Roadmaps Generated Yet</h3>
            <p>
              Get started by generating your first personalized roadmap based on your current education level and goals.
            </p>
            {!showForm && (
              <button onClick={() => setShowForm(true)} className="btn btn-primary">
                <Plus size={18} />
                <span>Create Your First Roadmap</span>
              </button>
            )}
          </div>
        ) : (
          <div className="roadmaps-grid">
            {roadmaps.map((roadmap) => (
              <RoadmapCard 
                key={roadmap._id} 
                roadmap={roadmap} 
                onDelete={handleDeleteRoadmap} 
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Dashboard;

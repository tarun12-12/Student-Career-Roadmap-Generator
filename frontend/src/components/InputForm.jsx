import React, { useState } from 'react';
import { Sparkles, Plus, X, GraduationCap, Target, BookOpen } from 'lucide-react';
import './InputForm.css';

const PREDEFINED_GOALS = [
  'Frontend Developer',
  'Backend Developer',
  'Full-Stack Developer',
  'Data Scientist / Data Analyst',
  'Mobile App Developer',
  'IAS / UPSC Civil Services'
];

const InputForm = ({ onSubmit, loading }) => {
  const [educationLevel, setEducationLevel] = useState('College');
  const [stream, setStream] = useState('');
  const [goal, setGoal] = useState('Frontend Developer');
  const [customGoal, setCustomGoal] = useState('');
  const [skillInput, setSkillInput] = useState('');
  const [skills, setSkills] = useState([]);

  const handleAddSkill = (e) => {
    e.preventDefault();
    const clean = skillInput.trim();
    if (clean && !skills.includes(clean)) {
      setSkills([...skills, clean]);
    }
    setSkillInput('');
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((s) => s !== skillToRemove));
  };

  const handleKeyDown = (e) => {
    if (e.key === ',' || e.key === 'Enter') {
      e.preventDefault();
      handleAddSkill(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalGoal = goal === 'Custom' ? customGoal.trim() : goal;
    if (!finalGoal) return;
    
    onSubmit({
      goal: finalGoal,
      educationLevel,
      stream: stream.trim(),
      skills
    });
  };

  return (
    <form onSubmit={handleSubmit} className="roadmap-form glass-card fade-in">
      <div className="form-header">
        <Sparkles className="header-icon" size={24} />
        <h2>Generate Career Roadmap</h2>
        <p>Enter your details to generate a step-by-step personalized learning plan.</p>
      </div>

      <div className="form-grid">
        {/* Education Level */}
        <div className="form-group">
          <label htmlFor="education-level" className="form-label-icon">
            <GraduationCap size={16} /> Education Level
          </label>
          <select
            id="education-level"
            value={educationLevel}
            onChange={(e) => setEducationLevel(e.target.value)}
            className="form-input form-select"
            required
          >
            <option value="10th">10th Standard</option>
            <option value="12th">12th Standard</option>
            <option value="College">College / University</option>
          </select>
        </div>

        {/* Stream / Branch */}
        <div className="form-group">
          <label htmlFor="stream" className="form-label-icon">
            <BookOpen size={16} /> Branch / Stream (Optional)
          </label>
          <input
            type="text"
            id="stream"
            value={stream}
            onChange={(e) => setStream(e.target.value)}
            placeholder="e.g. Computer Science, Science, Commerce"
            className="form-input"
          />
        </div>

        {/* Career Goal */}
        <div className="form-group full-width">
          <label htmlFor="goal" className="form-label-icon">
            <Target size={16} /> Target Career Goal
          </label>
          <select
            id="goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="form-input form-select"
            required
          >
            {PREDEFINED_GOALS.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
            <option value="Custom">Custom Career Goal...</option>
          </select>
        </div>

        {/* Custom Career Goal */}
        {goal === 'Custom' && (
          <div className="form-group full-width fade-in">
            <label htmlFor="custom-goal">Enter Custom Career Goal</label>
            <input
              type="text"
              id="custom-goal"
              value={customGoal}
              onChange={(e) => setCustomGoal(e.target.value)}
              placeholder="e.g. Cyber Security Specialist, Product Manager"
              className="form-input"
              required={goal === 'Custom'}
            />
          </div>
        )}

        {/* Skills Tag Input */}
        <div className="form-group full-width">
          <label htmlFor="skills">Current Skills (Optional)</label>
          <p className="field-helper">Type a skill and press Enter or comma to add</p>
          <div className="skill-input-container">
            <input
              type="text"
              id="skills"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="e.g. HTML, Python, public speaking"
              className="form-input skill-textbox"
            />
            <button
              type="button"
              onClick={handleAddSkill}
              className="btn btn-secondary btn-add-skill"
              aria-label="Add skill tag"
            >
              <Plus size={18} />
            </button>
          </div>

          {skills.length > 0 && (
            <div className="skills-tags-container">
              {skills.map((skill) => (
                <span key={skill} className="badge badge-accent skill-tag-badge">
                  {skill}
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(skill)}
                    className="btn-remove-tag"
                    aria-label={`Remove ${skill} tag`}
                  >
                    <X size={12} />
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-submit full-width"
        disabled={loading}
      >
        {loading ? (
          <>
            <div className="loading-spinner-small"></div>
            <span>Generating Plan...</span>
          </>
        ) : (
          <>
            <Sparkles size={18} />
            <span>Generate Roadmap</span>
          </>
        )}
      </button>
    </form>
  );
};

export default InputForm;

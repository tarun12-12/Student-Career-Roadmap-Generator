const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  type: { type: String, enum: ['video', 'course', 'article', 'documentation'], default: 'article' },
});

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], default: 'Beginner' },
});

const RoadmapStepSchema = new mongoose.Schema({
  stepNumber: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
  estimatedTime: { type: String, required: true },
  skillsToAcquire: [{ type: String }],
  resources: [ResourceSchema],
  projects: [ProjectSchema],
});

const RoadmapSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  goal: {
    type: String,
    required: true,
  },
  educationLevel: {
    type: String,
    required: true,
  },
  skills: [{ type: String }],
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  steps: [RoadmapStepSchema],
  completedPercentage: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Calculate completed percentage before saving (Mongoose v9 compatible — async, no next)
RoadmapSchema.pre('save', async function () {
  if (this.steps && this.steps.length > 0) {
    const completedCount = this.steps.filter((step) => step.completed).length;
    this.completedPercentage = Math.round((completedCount / this.steps.length) * 100);
  } else {
    this.completedPercentage = 0;
  }
});

module.exports = mongoose.model('Roadmap', RoadmapSchema);

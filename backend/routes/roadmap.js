const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Roadmap = require('../models/Roadmap');
const { generateRoadmap } = require('../utils/roadmapTemplates');

// @route   POST api/roadmap/generate
// @desc    Generate a roadmap (rule-based or optional AI)
// @access  Private
router.post('/generate', auth, async (req, res) => {
  const { goal, educationLevel, skills } = req.body;

  if (!goal || !educationLevel) {
    return res.status(400).json({ message: 'Please provide career goal and education level' });
  }

  const currentSkills = Array.isArray(skills) 
    ? skills.map(s => s.trim()).filter(Boolean) 
    : [];

  try {
    let roadmapData;

    // Optional OpenAI Integration
    if (process.env.OPENAI_API_KEY) {
      try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            response_format: { type: "json_object" },
            messages: [
              {
                role: 'system',
                content: `You are an expert academic and career advisor. You generate structured career roadmaps for students.
You must output a single JSON object containing:
{
  "title": "Roadmap Title",
  "description": "Short explanation",
  "steps": [
    {
      "stepNumber": 1,
      "title": "Step Name",
      "description": "Step detail description",
      "estimatedTime": "Estimated duration (e.g. 2-3 Weeks)",
      "skillsToAcquire": ["Skill 1", "Skill 2"],
      "resources": [
        { "name": "Resource Name (free YouTube, MDN, or docs)", "url": "URL link", "type": "video|course|article|documentation" }
      ],
      "projects": [
        { "title": "Project Name", "description": "Short build description", "difficulty": "Beginner|Intermediate|Advanced" }
      ]
    }
  ]
}
Ensure steps are chronological, logical, and tailored to the student's education level. Skip or mark clearly if any of their current skills apply.`,
              },
              {
                role: 'user',
                content: `Generate a roadmap for a student at the "${educationLevel}" education level who wants to become a "${goal}". Their current skills are: ${currentSkills.join(', ') || 'None'}.`,
              },
            ],
          }),
        });

        if (response.ok) {
          const aiResponse = await response.json();
          const parsed = JSON.parse(aiResponse.choices[0].message.content);
          roadmapData = {
            goal,
            educationLevel,
            skills: currentSkills,
            title: parsed.title,
            description: parsed.description,
            steps: parsed.steps.map((step, idx) => ({
              ...step,
              stepNumber: step.stepNumber || idx + 1,
              completed: false
            }))
          };
        } else {
          console.warn('OpenAI API returned non-200. Falling back to templates.');
        }
      } catch (aiErr) {
        console.error('Error generating AI roadmap. Falling back to templates:', aiErr.message);
      }
    }

    // Fallback/Default Template Generation
    if (!roadmapData) {
      const generated = generateRoadmap(goal, educationLevel, currentSkills);
      roadmapData = {
        goal: generated.goal,
        educationLevel,
        skills: currentSkills,
        title: generated.title,
        description: generated.description,
        steps: generated.steps,
      };
    }

    // Save to Database
    const newRoadmap = new Roadmap({
      userId: req.user.id,
      ...roadmapData,
    });

    const savedRoadmap = await newRoadmap.save();
    res.status(201).json(savedRoadmap);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/roadmap
// @desc    Get all roadmaps for current user
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const roadmaps = await Roadmap.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(roadmaps);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/roadmap/:id
// @desc    Get a specific roadmap
// @access  Private
router.get('/:id', auth, async (req, res) => {
  try {
    const roadmap = await Roadmap.findById(req.params.id);
    
    if (!roadmap) {
      return res.status(404).json({ message: 'Roadmap not found' });
    }

    // Ensure it belongs to the authenticated user
    if (roadmap.userId.toString() !== req.user.id) {
      return res.status(401).json({ message: 'User not authorized' });
    }

    res.json(roadmap);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Roadmap not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/roadmap/:id/step/:stepId
// @desc    Toggle step completion status
// @access  Private
router.put('/:id/step/:stepId', auth, async (req, res) => {
  try {
    const roadmap = await Roadmap.findById(req.params.id);

    if (!roadmap) {
      return res.status(404).json({ message: 'Roadmap not found' });
    }

    if (roadmap.userId.toString() !== req.user.id) {
      return res.status(401).json({ message: 'User not authorized' });
    }

    // Find the step and toggle completion
    const step = roadmap.steps.id(req.params.stepId);
    if (!step) {
      return res.status(404).json({ message: 'Step not found' });
    }

    step.completed = !step.completed;

    // Pre-save hook will handle percentage recalculation
    await roadmap.save();

    res.json(roadmap);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/roadmap/:id
// @desc    Delete a roadmap
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const roadmap = await Roadmap.findById(req.params.id);

    if (!roadmap) {
      return res.status(404).json({ message: 'Roadmap not found' });
    }

    if (roadmap.userId.toString() !== req.user.id) {
      return res.status(401).json({ message: 'User not authorized' });
    }

    await roadmap.deleteOne();

    res.json({ message: 'Roadmap removed successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

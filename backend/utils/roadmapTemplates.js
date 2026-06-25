const templates = {
  'Frontend Developer': {
    title: 'Frontend Web Developer Roadmap',
    description: 'Learn to build modern, responsive, and interactive user interfaces for the web using HTML, CSS, JavaScript, and React.',
    steps: [
      {
        stepNumber: 1,
        title: 'Web Fundamentals: HTML & CSS',
        description: 'Understand how the web works. Master HTML5 semantic structure and CSS3 styling, including layouts (Flexbox, Grid) and responsive design principles.',
        estimatedTime: '2-3 Weeks',
        skillsToAcquire: ['HTML5', 'CSS3', 'Responsive Design', 'CSS Flexbox/Grid'],
        resources: [
          { name: 'HTML & CSS Full Course - freeCodeCamp', url: 'https://www.youtube.com/watch?v=mU6an7qYJ-Y', type: 'video' },
          { name: 'MDN Web Docs: Learning HTML/CSS', url: 'https://developer.mozilla.org/en-US/docs/Learn', type: 'documentation' }
        ],
        projects: [
          { title: 'Personal Portfolio Website', description: 'Create a responsive multi-page portfolio site describing yourself and your skills.', difficulty: 'Beginner' }
        ]
      },
      {
        stepNumber: 2,
        title: 'JavaScript Programming Essentials',
        description: 'Dive deep into JavaScript fundamentals: variables, arrays, objects, functions, DOM manipulation, events, and modern ES6+ syntax.',
        estimatedTime: '3-4 Weeks',
        skillsToAcquire: ['JavaScript ES6+', 'DOM Manipulation', 'Fetch API', 'JSON'],
        resources: [
          { name: 'JavaScript Tutorial for Beginners - Programming with Mosh', url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk', type: 'video' },
          { name: 'JavaScript.info - The Modern JS Tutorial', url: 'https://javascript.info/', type: 'article' }
        ],
        projects: [
          { title: 'Interactive Weather Dashboard', description: 'Build an app that fetches live weather forecasts using a public API and renders data dynamically.', difficulty: 'Intermediate' }
        ]
      },
      {
        stepNumber: 3,
        title: 'Git, GitHub, and Development Workflow',
        description: 'Learn version control to track your code and collaborate with others. Understand how to push repositories, manage branches, and deploy frontend projects.',
        estimatedTime: '1 Week',
        skillsToAcquire: ['Git', 'GitHub', 'Version Control', 'Vercel / Netlify Deployments'],
        resources: [
          { name: 'Git & GitHub Crash Course - Traversy Media', url: 'https://www.youtube.com/watch?v=RGOj5yH7evk', type: 'video' },
          { name: 'GitHub Guides', url: 'https://guides.github.com/', type: 'documentation' }
        ],
        projects: [
          { title: 'Open-Source Contribution', description: 'Publish one of your projects to GitHub, write a high-quality README, and practice branch merges.', difficulty: 'Beginner' }
        ]
      },
      {
        stepNumber: 4,
        title: 'Modern Frontend Framework: React.js',
        description: 'Learn component-based architecture using React. Master state management (useState, useEffect), custom hooks, routing, and api consumption.',
        estimatedTime: '4 Weeks',
        skillsToAcquire: ['React.js', 'React Router', 'State Management', 'Hooks'],
        resources: [
          { name: 'React Course for Beginners - freeCodeCamp', url: 'https://www.youtube.com/watch?v=bMknfKXIFA8', type: 'video' },
          { name: 'Official React Documentation', url: 'https://react.dev/', type: 'documentation' }
        ],
        projects: [
          { title: 'Collab Task Manager', description: 'A Kanban board project tracker featuring categories, todo tasks, and local storage state.', difficulty: 'Intermediate' },
          { title: 'E-Commerce Storefront UI', description: 'Create a fully-fledged storefront interface with cart management, filters, and checkout simulation.', difficulty: 'Advanced' }
        ]
      },
      {
        stepNumber: 5,
        title: 'Modern CSS Frameworks & Build Tools',
        description: 'Boost developer speed with modern utility frameworks (TailwindCSS, CSS modules) and learn build managers like Vite.',
        estimatedTime: '2 Weeks',
        skillsToAcquire: ['TailwindCSS / CSS Modules', 'Vite', 'NPM / Package Management'],
        resources: [
          { name: 'Tailwind CSS Full Course - Creative Tim', url: 'https://www.youtube.com/watch?v=lCxcTsOHrjo', type: 'video' },
          { name: 'Vite Guide', url: 'https://vite.dev/guide/', type: 'documentation' }
        ],
        projects: [
          { title: 'Premium SaaS Landing Page', description: 'Build a visually striking dashboard-themed landing page using React and CSS variables/Tailwind.', difficulty: 'Intermediate' }
        ]
      }
    ]
  },
  'Backend Developer': {
    title: 'Backend Software Engineer Roadmap',
    description: 'Learn to build robust server-side APIs, database systems, user authentication, and deployment infrastructures.',
    steps: [
      {
        stepNumber: 1,
        title: 'JavaScript Runtime & Express Server',
        description: 'Understand Node.js runtime and learn to create HTTP web servers using Express.js. Master routing, middleware, and request/response lifecycles.',
        estimatedTime: '3 Weeks',
        skillsToAcquire: ['Node.js', 'Express.js', 'REST API Design', 'HTTP Protocol'],
        resources: [
          { name: 'Node.js & Express Tutorial - freeCodeCamp', url: 'https://www.youtube.com/watch?v=Oe421EPjeBE', type: 'video' },
          { name: 'Express.js Documentation', url: 'https://expressjs.com/', type: 'documentation' }
        ],
        projects: [
          { title: 'Task API Service', description: 'Create a RESTful API containing full CRUD endpoints for task management.', difficulty: 'Beginner' }
        ]
      },
      {
        stepNumber: 2,
        title: 'Databases: SQL vs NoSQL',
        description: 'Learn to design database schemas. Master MongoDB (NoSQL) and PostgreSQL (SQL), understand indices, aggregation, and ORM/ODMs like Mongoose or Prisma.',
        estimatedTime: '3 Weeks',
        skillsToAcquire: ['MongoDB / Mongoose', 'PostgreSQL', 'Database Normalization', 'Queries'],
        resources: [
          { name: 'MongoDB Crash Course - Web Dev Simplified', url: 'https://www.youtube.com/watch?v=ofme2o290Y4', type: 'video' },
          { name: 'PostgreSQL Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=SpfIwlAYaK4', type: 'video' }
        ],
        projects: [
          { title: 'Blogging Engine API', description: 'Build an API supporting nested comments, author profiles, and database relations.', difficulty: 'Intermediate' }
        ]
      },
      {
        stepNumber: 3,
        title: 'Security, JWT Auth, and Cryptography',
        description: 'Secure your services using token-based authentication (JWT), password hashing (bcrypt), CORS policies, and environment variable protections.',
        estimatedTime: '2 Weeks',
        skillsToAcquire: ['JWT (JSON Web Token)', 'Bcrypt Hashing', 'CORS Security', 'Middleware Security'],
        resources: [
          { name: 'JWT Auth Crash Course - Dev Ed', url: 'https://www.youtube.com/watch?v=7Q17UBocXS0', type: 'video' },
          { name: 'OWASP Backend Security Top 10', url: 'https://owasp.org/www-project-top-ten/', type: 'documentation' }
        ],
        projects: [
          { title: 'Secure Gateway Portal', description: 'Implement an authentication gateway supporting login, registrations, and private route validations.', difficulty: 'Intermediate' }
        ]
      },
      {
        stepNumber: 4,
        title: 'Testing & API Documentation',
        description: 'Write robust unit and integration tests (Jest/Supertest) and document your endpoints with Swagger.',
        estimatedTime: '2 Weeks',
        skillsToAcquire: ['Unit Testing', 'Jest / Supertest', 'API Documentation (Swagger/Postman)'],
        resources: [
          { name: 'Testing Node.js with Jest - Traversy Media', url: 'https://www.youtube.com/watch?v=7r4xVDI2vho', type: 'video' },
          { name: 'Swagger API Documentation Guide', url: 'https://swagger.io/docs/', type: 'documentation' }
        ],
        projects: [
          { title: 'Test-Driven API Server', description: 'Build an API with 100% unit and integration test coverage matching OpenAPI definitions.', difficulty: 'Advanced' }
        ]
      }
    ]
  },
  'Full-Stack Developer': {
    title: 'Full-Stack Developer (MERN / Pern) Roadmap',
    description: 'Learn to combine frontend client interfaces and backend databases to deliver full-scale production web applications.',
    steps: [
      {
        stepNumber: 1,
        title: 'Frontend Mastery',
        description: 'Understand HTML, CSS, JavaScript essentials, and UI framework architecture (React.js).',
        estimatedTime: '4 Weeks',
        skillsToAcquire: ['React.js', 'HTML5/CSS3', 'Modern JS', 'State Routing'],
        resources: [
          { name: 'Frontend Developer Path - MDN', url: 'https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer', type: 'documentation' }
        ],
        projects: [
          { title: 'Visual Admin Dashboard', description: 'Create a gorgeous client dashboard displaying mock metrics and layouts.', difficulty: 'Beginner' }
        ]
      },
      {
        stepNumber: 2,
        title: 'API Server & Database Integration',
        description: 'Develop Node.js server backends using Express.js connected to MongoDB database systems.',
        estimatedTime: '3 Weeks',
        skillsToAcquire: ['Node/Express', 'MongoDB / Mongoose', 'REST API Architectures'],
        resources: [
          { name: 'MERN Stack Course - freeCodeCamp', url: 'https://www.youtube.com/watch?v=7CqJlxBYj-M', type: 'video' }
        ],
        projects: [
          { title: 'CRUD Contact Organizer', description: 'Full-stack application to create, edit, search, and view contacts with Node.js and React.', difficulty: 'Intermediate' }
        ]
      },
      {
        stepNumber: 3,
        title: 'Secure JWT Session Auths',
        description: 'Implement cookie-based or headers-based token authorization schemes across frontend components and API endpoints.',
        estimatedTime: '2 Weeks',
        skillsToAcquire: ['User Sessions', 'JWT Validation', 'Private Pages Routing'],
        resources: [
          { name: 'MERN Authentication Tutorial', url: 'https://www.youtube.com/watch?v=mbsmsi7l3r4', type: 'video' }
        ],
        projects: [
          { title: 'Social Feed App', description: 'Create a microblogging site allowing users to register, log in, write messages, and follow authors.', difficulty: 'Advanced' }
        ]
      },
      {
        stepNumber: 4,
        title: 'Cloud Deployments & Operations',
        description: 'Configure and launch full-stack applications in cloud environments: Vercel for clients, Render/AWS for servers, Atlas for DB.',
        estimatedTime: '2 Weeks',
        skillsToAcquire: ['Render Cloud', 'Vercel App hosting', 'MongoDB Atlas Configuration'],
        resources: [
          { name: 'Deploying MERN Apps to Render & Vercel', url: 'https://www.youtube.com/watch?v=22R6S-Q5Vrs', type: 'video' }
        ],
        projects: [
          { title: 'Production App Launch', description: 'Configure environment variables and host your full-stack applications live on public domains.', difficulty: 'Advanced' }
        ]
      }
    ]
  },
  'Data Scientist / Data Analyst': {
    title: 'Data Science & Analytics Roadmap',
    description: 'Learn the principles of statistics, data preprocessing, machine learning algorithms, and visualization tools to gain insights from complex datasets.',
    steps: [
      {
        stepNumber: 1,
        title: 'Python Programming & Scientific Libraries',
        description: 'Learn Python fundamentals and master scientific packages: NumPy for arrays and Pandas for data manipulation.',
        estimatedTime: '3 Weeks',
        skillsToAcquire: ['Python Syntax', 'NumPy Arrays', 'Pandas DataFrames'],
        resources: [
          { name: 'Python for Data Analysis - freeCodeCamp', url: 'https://www.youtube.com/watch?v=r-uOLRfNrRQ', type: 'video' },
          { name: 'Kaggle Python Course', url: 'https://www.kaggle.com/learn/python', type: 'course' }
        ],
        projects: [
          { title: 'Excel Report Parser', description: 'Write a script to clean, format, and aggregate multiple csv spreadsheets into a report.', difficulty: 'Beginner' }
        ]
      },
      {
        stepNumber: 2,
        title: 'Data Visualization & SQL Querying',
        description: 'Learn to extract insights and present them using SQL databases, and visualize discoveries using Matplotlib and Seaborn.',
        estimatedTime: '3 Weeks',
        skillsToAcquire: ['SQL Queries', 'Matplotlib / Seaborn', 'Tableau / PowerBI basics'],
        resources: [
          { name: 'SQL for Data Science - freeCodeCamp', url: 'https://www.youtube.com/watch?v=HXV3zeQKqGY', type: 'video' }
        ],
        projects: [
          { title: 'Global COVID Metrics Dashboard', description: 'Analyze global statistics and construct striking chart reports representing trends over years.', difficulty: 'Intermediate' }
        ]
      },
      {
        stepNumber: 3,
        title: 'Mathematics, Probability & Exploratory Data Analysis (EDA)',
        description: 'Master central tendencies, standard deviation, probability distributions, statistical testing, and hypothesis evaluations.',
        estimatedTime: '3 Weeks',
        skillsToAcquire: ['Descriptive Statistics', 'Probability Theory', 'EDA Workflows'],
        resources: [
          { name: 'Statistics for Data Science - Kahn Academy', url: 'https://www.khanacademy.org/math/statistics-probability', type: 'course' }
        ],
        projects: [
          { title: 'Housing Prices Market Report', description: 'Conduct extensive statistical EDA on real-estate registries to evaluate variables influencing housing prices.', difficulty: 'Intermediate' }
        ]
      },
      {
        stepNumber: 4,
        title: 'Machine Learning Foundations',
        description: 'Understand core supervised and unsupervised algorithms: Linear Regression, Decision Trees, K-Means Clustering, using Scikit-Learn.',
        estimatedTime: '4 Weeks',
        skillsToAcquire: ['Scikit-Learn', 'Supervised Learning', 'Clustering Models', 'Model Evaluation'],
        resources: [
          { name: 'Machine Learning with Python - Scikit-Learn Course', url: 'https://www.youtube.com/watch?v=M9Itm95JzL0', type: 'video' }
        ],
        projects: [
          { title: 'Predictive Customer Churn Model', description: 'Develop and tune a classification model predicting client account cancellations based on behavior metrics.', difficulty: 'Advanced' }
        ]
      }
    ]
  },
  'Mobile App Developer': {
    title: 'Mobile Application Developer Roadmap (React Native)',
    description: 'Learn how to build native iOS and Android applications using a single, unified JavaScript codebase.',
    steps: [
      {
        stepNumber: 1,
        title: 'JavaScript Core & UI Styling Essentials',
        description: 'Build a strong foundation in modern JS (ES6+) and CSS Flexbox styling, as these are critical components in hybrid mobile environments.',
        estimatedTime: '2 Weeks',
        skillsToAcquire: ['JS ES6 Basics', 'Flexbox layout model'],
        resources: [
          { name: 'JS Essentials - MDN', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', type: 'documentation' }
        ],
        projects: [
          { title: 'Mock Mobile CSS Layouts', description: 'Code responsive screen layouts using purely raw HTML and flexbox grids.', difficulty: 'Beginner' }
        ]
      },
      {
        stepNumber: 2,
        title: 'React Native Basics & Expo Setup',
        description: 'Configure the development environment using Expo. Master core mobile components: View, Text, Image, ScrollView, and TextInput.',
        estimatedTime: '3 Weeks',
        skillsToAcquire: ['React Native Components', 'Expo Framework', 'Mobile Dev Environments'],
        resources: [
          { name: 'React Native Tutorial for Beginners - CodeWithMosh', url: 'https://www.youtube.com/watch?v=0-S5a0eXPoc', type: 'video' },
          { name: 'React Native Docs', url: 'https://reactnative.dev/', type: 'documentation' }
        ],
        projects: [
          { title: 'Quick Memo Mobile App', description: 'Build a fully-featured note taker with edit views, checklist tasks, and device persistence.', difficulty: 'Beginner' }
        ]
      },
      {
        stepNumber: 3,
        title: 'Mobile Navigation & API Integrations',
        description: 'Learn screen-to-screen navigation using React Navigation (Tabs, Stacks, Drawer) and fetch web service integrations.',
        estimatedTime: '3 Weeks',
        skillsToAcquire: ['React Navigation Stack/Tabs', 'Fetch API in Native context', 'AsyncStorage'],
        resources: [
          { name: 'React Navigation Docs', url: 'https://reactnavigation.org/', type: 'documentation' }
        ],
        projects: [
          { title: 'Media Explorer App', description: 'Construct a multi-screen mobile app browsing books/films from a public web service API.', difficulty: 'Intermediate' }
        ]
      },
      {
        stepNumber: 4,
        title: 'Native Device Capabilities & App Stores Prep',
        description: 'Access native device features (Camera, Geolocation, Notifications) and configure production files for Google Play and Apple App Store launches.',
        estimatedTime: '3 Weeks',
        skillsToAcquire: ['Device Sensors (Camera, GPS)', 'Expo EAS builds', 'Publishing workflows'],
        resources: [
          { name: 'Expo EAS CLI deployment guides', url: 'https://docs.expo.dev/eas/', type: 'documentation' }
        ],
        projects: [
          { title: 'Interactive Photo Map App', description: 'Build an app enabling users to take a photo, tag it with geographical coordinates, and view it on an interactive map.', difficulty: 'Advanced' }
        ]
      }
    ]
  },
  'IAS / UPSC Civil Services': {
    title: 'IAS / UPSC Civil Services Exam Preparation Roadmap',
    description: 'Structure your preparation journey for one of the most prestigious competitive exams in India, focusing on Prelims, Mains, and the Interview.',
    steps: [
      {
        stepNumber: 1,
        title: 'Foundational Knowledge & NCERT Books',
        description: 'Establish a rock-solid foundation by reading NCERT textbooks from class 6th to 12th in key subjects: History, Geography, Polity, and Economics.',
        estimatedTime: '8-12 Weeks',
        skillsToAcquire: ['Core Historical Context', 'Indian Geography Basics', 'Constitutional Frameworks', 'Basic Economic Systems'],
        resources: [
          { name: 'NCERT Books Free Downloads - NCERT Portal', url: 'https://ncert.nic.in/textbook.php', type: 'documentation' },
          { name: 'UPSC Syllabus & Guide - UPSC Official', url: 'https://www.upsc.gov.in/', type: 'documentation' }
        ],
        projects: [
          { title: 'NCERT Summary Notebooks', description: 'Create summarized mind maps of Indian History and Geography modules to test retention.', difficulty: 'Beginner' }
        ]
      },
      {
        stepNumber: 2,
        title: 'Polity, Economy & Current Affairs',
        description: 'Read M. Laxmikanth (Polity), Ramesh Singh (Economy), and establish a daily habit of reading newspaper editorials (The Hindu or Indian Express).',
        estimatedTime: '12 Weeks',
        skillsToAcquire: ['Indian Governance Systems', 'Fiscal Policies & GDP Dynamics', 'Analytical News Breakdown', 'Current Events Mapping'],
        resources: [
          { name: 'Daily Current Affairs Analysis - Vision IAS / IASbaba', url: 'https://visionias.in/', type: 'article' },
          { name: 'Indian Polity Video Tutorials - free resources', url: 'https://www.youtube.com/results?search_query=indian+polity+upsc', type: 'video' }
        ],
        projects: [
          { title: 'Daily Editorial Critique Sheets', description: 'Write summaries of editorial arguments, listing pro/con analysis of current political debates.', difficulty: 'Intermediate' }
        ]
      },
      {
        stepNumber: 3,
        title: 'Mains Optional & Essay Preparation',
        description: 'Choose your Mains optional subject based on your interests/background. Begin daily answers-writing practice (GS papers 1-4) and mock essay submissions.',
        estimatedTime: '10 Weeks',
        skillsToAcquire: ['Subject-Matter Expertise', 'Concise Answer Formulation', 'Argumentation and Essay Flow', 'Ethics and Case Study Analysis'],
        resources: [
          { name: 'Insights on India - Secure Daily Answer Writing Practice', url: 'https://www.insightsonindia.com/', type: 'article' }
        ],
        projects: [
          { title: 'Full Length Mock Mains Essay', description: 'Write a 1000-word structured analytical essay on a major social/ethics topic matching previous UPSC prompts.', difficulty: 'Advanced' }
        ]
      },
      {
        stepNumber: 4,
        title: 'Mock Prelims Test Series & CSAT Prep',
        description: 'Take at least 30-40 mock Prelims tests to refine elimination tactics. Master CSAT paper essentials: basic math, reading compression, and logical reasoning.',
        estimatedTime: '6 Weeks',
        skillsToAcquire: ['Option Elimination Tactics', 'CSAT Quantitative Ability', 'Time Management under pressure'],
        resources: [
          { name: 'CSAT Prep Tutorials - Free lectures', url: 'https://www.youtube.com/results?search_query=csat+upsc+full+course', type: 'video' }
        ],
        projects: [
          { title: 'Prelims Mock Series (10 Sets)', description: 'Solve and analyze 10 previous years General Studies papers, scoring above cutoffs consistently.', difficulty: 'Advanced' }
        ]
      }
    ]
  }
};

/**
 * Generates custom roadmap based on goals, education level, and pre-existing skills.
 * If OpenAI is configured, the router can route to the LLM instead.
 */
const generateRoadmap = (goal, educationLevel, currentSkills = []) => {
  // Try to find matching pre-baked template
  let matchedKey = Object.keys(templates).find(
    (key) => key.toLowerCase() === goal.toLowerCase()
  );

  // Default to Frontend if not found
  if (!matchedKey) {
    matchedKey = 'Frontend Developer';
  }

  // Deep clone template
  const template = JSON.parse(JSON.stringify(templates[matchedKey]));

  // Customize based on currentSkills
  // Mark steps as completed if the user lists skills that cover at least 50% of the step's skills
  const normalizeSkill = (s) => {
    return String(s)
      .toLowerCase()
      .replace(/\(.*?\)/g, '')
      .replace(/[^a-z0-9+\s/.-]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  };

  const skillMatches = (templateSkill, userSkill) => {
    const t = normalizeSkill(templateSkill);
    const u = normalizeSkill(userSkill);

    if (!t || !u) return false;
    if (t === u) return true;

    // Common normalization: React -> React.js
    const aliasMap = {
      react: 'react.js',
      'reactjs': 'react.js',
      javascript: 'javascript es6+',
      'js': 'javascript es6+',
      'nodejs': 'node.js',
      'node js': 'node.js',
      'expo': 'expo framework',
      'mongodb': 'mongodb / mongoose',
      'sql': 'postgresql',
    };

    const tAliased = aliasMap[t] || t;
    const uAliased = aliasMap[u] || u;

    if (tAliased === uAliased) return true;
    if (tAliased.includes(uAliased) || uAliased.includes(tAliased)) return true;

    // Token overlap
    const tTokens = tAliased.split(/\s|\//).filter(Boolean);
    const uTokens = uAliased.split(/\s|\//).filter(Boolean);
    const tSet = new Set(tTokens);
    const overlap = uTokens.some((tok) => tSet.has(tok));
    return overlap;
  };

  template.steps = template.steps.map((step) => {
    const templateSkills = Array.isArray(step.skillsToAcquire) ? step.skillsToAcquire : [];

    // Find which template skills match at least one user skill (fuzzy)
    const matchingSkills = templateSkills.filter((tplSkill) =>
      currentSkills.some((userSkill) => skillMatches(tplSkill, userSkill))
    );

    const matchRatio = templateSkills.length > 0 ? (matchingSkills.length / templateSkills.length) : 0;

    let completed = false;
    let description = step.description;

    if (matchingSkills.length > 0) {
      if (matchRatio >= 0.5) {
        completed = true;
        description += ` (Note: You've covered ${Math.round(matchRatio * 100)}% of this section's skills (${matchingSkills.join(', ')}). Marked as complete!)`;
      } else {
        description += ` (Note: You already know ${matchingSkills.join(', ')}. Focus on acquiring the remaining skills!)`;
      }
    }


    // Adjust estimated time based on education level
    let estimatedTime = step.estimatedTime;
    if (educationLevel.toLowerCase() === '10th' || educationLevel.toLowerCase() === '12th') {
      // Give more time
      const weeksMatch = step.estimatedTime.match(/(\d+)(?:-(\d+))?\s*(Weeks|Week)/i);
      if (weeksMatch) {
        const minWeeks = parseInt(weeksMatch[1]);
        const maxWeeks = weeksMatch[2] ? parseInt(weeksMatch[2]) : minWeeks + 1;
        estimatedTime = `${minWeeks + 1}-${maxWeeks + 2} Weeks (Adjusted for foundational study)`;
      }
    }

    return {
      ...step,
      completed,
      description,
      estimatedTime,
    };
  });

  return {
    goal: matchedKey,
    title: `${template.title} (${educationLevel} Level)`,
    description: `Customized roadmap for a ${educationLevel} student targetting a career as a ${matchedKey}.` + 
      (currentSkills.length > 0 ? ` Personalized based on pre-existing skills: ${currentSkills.join(', ')}.` : ''),
    steps: template.steps,
  };
};

module.exports = {
  templates,
  generateRoadmap,
};

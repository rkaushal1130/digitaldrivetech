const courses = [
  {
    id: 'digital-marketing',
    icon: 'Megaphone',
    title: 'Digital Marketing',
    description: 'Become a job-ready Digital Marketing professional by mastering SEO, social media, paid ads, and content strategy through live training, projects, internship, and placement assistance.',
    duration: '4 Months',
    mode: 'Online',
    level: 'Beginner to Advanced',
    certificate: 'Yes',
    internship: '2 Months',
    placement: '100% Assistance',
    overview: {
      forWhom: 'Students, freshers, and professionals who want to build a career in digital marketing with hands-on practical training.',
      outcomes: [
        'Run Google Ads & Social Media Campaigns',
        'Master SEO & Content Marketing Strategies',
        'Generate & Nurture Quality Leads',
        'Analyze Data & Optimize ROI',
        'Build & Manage a Brand Online'
      ],
      highlights: [
        'Beginner Friendly',
        'Live Classes',
        'Practical Training',
        'Industry Projects',
        'Internship',
        'Certificate',
        'Resume Building',
        'Interview Preparation'
      ]
    },
    curriculum: [
      { title: 'Digital Marketing Fundamentals', icon: 'Compass' },
      { title: 'SEO & Search Engine Marketing', icon: 'Search' },
      { title: 'Social Media Marketing', icon: 'Share2' },
      { title: 'Google Ads & PPC', icon: 'BarChart3' },
      { title: 'Content Marketing', icon: 'FileText' },
      { title: 'Email Marketing', icon: 'Mail' },
      { title: 'Lead Generation', icon: 'Target' },
      { title: 'Analytics & Reporting', icon: 'PieChart' },
      { title: 'WordPress Basics', icon: 'Globe' },
      { title: 'Final Project', icon: 'Award' }
    ],
    projects: [
      'SEO Audit for a Real Website',
      'Social Media Campaign Plan',
      'Google Ads Campaign Setup',
      'Email Marketing Funnel',
      'Content Strategy for a Brand',
      'WordPress Website Setup',
      'Lead Magnet & Landing Page',
      'Final Portfolio Project'
    ],
    careerOpportunities: [
      { title: 'SEO Specialist', salary: '₹3 - 6 LPA' },
      { title: 'Social Media Manager', salary: '₹3 - 7 LPA' },
      { title: 'PPC Analyst', salary: '₹4 - 8 LPA' },
      { title: 'Content Marketing Manager', salary: '₹4 - 9 LPA' },
      { title: 'Digital Marketing Manager', salary: '₹6 - 15 LPA' },
      { title: 'Brand Strategist', salary: '₹5 - 12 LPA' },
      { title: 'Growth Hacker', salary: '₹6 - 14 LPA' },
      { title: 'Freelancer', salary: '₹3 - 20+ LPA' }
    ]
  },
  {
    id: 'web-development',
    icon: 'Code2',
    title: 'Web Development',
    description: 'Become a job-ready Web Developer by learning modern frontend and backend technologies through live training, projects, internship, and placement assistance.',
    duration: '5 Months',
    mode: 'Online',
    level: 'Beginner to Advanced',
    certificate: 'Yes',
    internship: '2 Months',
    placement: '100% Assistance',
    overview: {
      forWhom: 'Aspiring developers who want to build full-stack web applications and launch their career in the tech industry.',
      outcomes: [
        'Build Responsive Websites with HTML/CSS/JS',
        'Develop Dynamic UIs with React',
        'Create REST APIs with Node.js & Express',
        'Work with MongoDB Databases',
        'Deploy Projects on Live Servers'
      ],
      highlights: [
        'Beginner Friendly',
        'Live Classes',
        'Practical Training',
        'Industry Projects',
        'Internship',
        'Certificate',
        'Resume Building',
        'Interview Preparation'
      ]
    },
    curriculum: [
      { title: 'HTML5', icon: 'FileCode' },
      { title: 'CSS3', icon: 'Palette' },
      { title: 'JavaScript', icon: 'Braces' },
      { title: 'Bootstrap', icon: 'Grid3x3' },
      { title: 'React', icon: 'Atom' },
      { title: 'Node.js', icon: 'Server' },
      { title: 'Express.js', icon: 'Workflow' },
      { title: 'MongoDB', icon: 'Database' },
      { title: 'Git & GitHub', icon: 'GitBranch' },
      { title: 'Deployment', icon: 'Cloud' }
    ],
    projects: [
      'Portfolio Website',
      'Business Website',
      'Restaurant Website',
      'E-commerce Website',
      'Admin Dashboard',
      'Blog Website',
      'REST API',
      'Authentication System'
    ],
    careerOpportunities: [
      { title: 'Frontend Developer', salary: '₹4 - 10 LPA' },
      { title: 'Backend Developer', salary: '₹5 - 12 LPA' },
      { title: 'Full Stack Developer', salary: '₹6 - 18 LPA' },
      { title: 'Web Designer', salary: '₹3 - 8 LPA' },
      { title: 'WordPress Developer', salary: '₹3 - 7 LPA' },
      { title: 'React Developer', salary: '₹6 - 15 LPA' },
      { title: 'Node.js Developer', salary: '₹5 - 14 LPA' },
      { title: 'Freelancer', salary: '₹3 - 25+ LPA' }
    ]
  },
  {
    id: 'hr-recruitment',
    icon: 'Users',
    title: 'HR & Recruitment',
    description: 'Become a job-ready HR professional by mastering recruitment, employee lifecycle, HR policies, and compliance through live training, projects, internship, and placement assistance.',
    duration: '3 Months',
    mode: 'Online / Offline',
    level: 'Beginner to Advanced',
    certificate: 'Yes',
    internship: '2 Months',
    placement: '100% Assistance',
    overview: {
      forWhom: 'Students and graduates looking to start a career in Human Resources with practical industry exposure.',
      outcomes: [
        'Manage End-to-End Recruitment',
        'Screen Resumes & Coordinate Interviews',
        'Handle Employee Onboarding & Documentation',
        'Understand HR Policies & Compliance',
        'Use HR Tools & Software'
      ],
      highlights: [
        'Beginner Friendly',
        'Live Classes',
        'Practical Training',
        'Industry Projects',
        'Internship',
        'Certificate',
        'Resume Building',
        'Interview Preparation'
      ]
    },
    curriculum: [
      { title: 'HR Fundamentals', icon: 'BookOpen' },
      { title: 'Recruitment Process', icon: 'UserPlus' },
      { title: 'Resume Screening', icon: 'FileSearch' },
      { title: 'Interview Coordination', icon: 'Calendar' },
      { title: 'Employee Onboarding', icon: 'UserCheck' },
      { title: 'Employee Documentation', icon: 'Folder' },
      { title: 'HR Policies & Compliance', icon: 'Shield' },
      { title: 'Payroll Basics', icon: 'DollarSign' },
      { title: 'HR Tools & Software', icon: 'Monitor' },
      { title: 'Final Project', icon: 'Award' }
    ],
    projects: [
      'Recruitment Dashboard',
      'Onboarding Checklist System',
      'HR Policy Document',
      'Interview Feedback Form',
      'Employee Database Management',
      'Attendance Tracking System',
      'Payroll Calculation Sheet',
      'Final HR Portfolio'
    ],
    careerOpportunities: [
      { title: 'HR Executive', salary: '₹2.5 - 5 LPA' },
      { title: 'Recruitment Specialist', salary: '₹3 - 6 LPA' },
      { title: 'HR Coordinator', salary: '₹3 - 5.5 LPA' },
      { title: 'HR Manager', salary: '₹6 - 12 LPA' },
      { title: 'Talent Acquisition Lead', salary: '₹5 - 10 LPA' },
      { title: 'HR Business Partner', salary: '₹7 - 15 LPA' },
      { title: 'Payroll Specialist', salary: '₹3 - 7 LPA' },
      { title: 'HR Consultant', salary: '₹4 - 12 LPA' }
    ]
  },
  {
    id: 'accounts-finance',
    icon: 'LineChart',
    title: 'Accounts & Finance',
    description: 'Become a job-ready Accounts & Finance professional by mastering Tally, GST, accounting entries, and financial reporting through live training, projects, internship, and placement assistance.',
    duration: '4 Months',
    mode: 'Online / Offline',
    level: 'Beginner to Advanced',
    certificate: 'Yes',
    internship: '2 Months',
    placement: '100% Assistance',
    overview: {
      forWhom: 'Students and graduates who want to build a strong career in accounting and finance with practical software training.',
      outcomes: [
        'Handle Accounting in Tally Prime',
        'File GST Returns Correctly',
        'Prepare Financial Statements',
        'Manage Bank Reconciliation',
        'Use Excel for Financial Analysis'
      ],
      highlights: [
        'Beginner Friendly',
        'Live Classes',
        'Practical Training',
        'Industry Projects',
        'Internship',
        'Certificate',
        'Resume Building',
        'Interview Preparation'
      ]
    },
    curriculum: [
      { title: 'Accounting Fundamentals', icon: 'BookOpen' },
      { title: 'Tally Prime Basics', icon: 'Calculator' },
      { title: 'GST & Tax Filing', icon: 'Receipt' },
      { title: 'Financial Statements', icon: 'FileSpreadsheet' },
      { title: 'Bank Reconciliation', icon: 'RefreshCw' },
      { title: 'Excel for Accounting', icon: 'Table' },
      { title: 'Payroll Accounting', icon: 'Users' },
      { title: 'Audit Basics', icon: 'SearchCheck' },
      { title: 'Income Tax Fundamentals', icon: 'Landmark' },
      { title: 'Final Project', icon: 'Award' }
    ],
    projects: [
      'Company Accounts in Tally Prime',
      'GST Return Filing',
      'Profit & Loss Statement',
      'Balance Sheet Preparation',
      'Bank Reconciliation Statement',
      'Budget vs Actual Analysis',
      'Payroll Processing',
      'Final Accounts Portfolio'
    ],
    careerOpportunities: [
      { title: 'Accountant', salary: '₹2.5 - 5 LPA' },
      { title: 'Tally Operator', salary: '₹2 - 4 LPA' },
      { title: 'GST Analyst', salary: '₹3 - 6 LPA' },
      { title: 'Accounts Executive', salary: '₹3 - 6 LPA' },
      { title: 'Finance Manager', salary: '₹6 - 14 LPA' },
      { title: 'Tax Consultant', salary: '₹4 - 10 LPA' },
      { title: 'Audit Assistant', salary: '₹3 - 6 LPA' },
      { title: 'Freelance Accountant', salary: '₹3 - 12 LPA' }
    ]
  },
  {
    id: 'ai-automation',
    icon: 'Cpu',
    title: 'AI & Automation',
    description: 'Become a job-ready AI & Automation expert by mastering ChatGPT, AI tools, business automation, and productivity workflows through live training, projects, internship, and placement assistance.',
    duration: '3 Months',
    mode: 'Online',
    level: 'Beginner to Advanced',
    certificate: 'Yes',
    internship: '1 Month',
    placement: '100% Assistance',
    overview: {
      forWhom: 'Professionals, students, and entrepreneurs who want to leverage AI and automation to boost productivity and career growth.',
      outcomes: [
        'Use ChatGPT & AI Tools Effectively',
        'Automate Business Workflows',
        'Build AI-Powered Solutions',
        'Optimize Productivity with Automation',
        'Implement No-Code AI Solutions'
      ],
      highlights: [
        'Beginner Friendly',
        'Live Classes',
        'Practical Training',
        'Industry Projects',
        'Internship',
        'Certificate',
        'Resume Building',
        'Interview Preparation'
      ]
    },
    curriculum: [
      { title: 'Introduction to AI', icon: 'Sparkles' },
      { title: 'ChatGPT Mastery', icon: 'MessageSquare' },
      { title: 'AI Writing & Content', icon: 'Pen' },
      { title: 'AI Image & Design Tools', icon: 'Image' },
      { title: 'Business Automation', icon: 'Zap' },
      { title: 'No-Code AI Solutions', icon: 'Blocks' },
      { title: 'Data Analysis with AI', icon: 'BarChart3' },
      { title: 'AI for Social Media', icon: 'Share2' },
      { title: 'Workflow Automation', icon: 'GitMerge' },
      { title: 'Final Project', icon: 'Award' }
    ],
    projects: [
      'AI Content Generator',
      'Chatbot for Business',
      'Automated Email Responder',
      'AI Image Creation Suite',
      'Social Media Auto-Poster',
      'Data Analysis Dashboard',
      'Workflow Automation Script',
      'Final AI Portfolio'
    ],
    careerOpportunities: [
      { title: 'AI Tools Specialist', salary: '₹4 - 10 LPA' },
      { title: 'Automation Engineer', salary: '₹5 - 14 LPA' },
      { title: 'AI Prompt Engineer', salary: '₹5 - 15 LPA' },
      { title: 'Business Analyst (AI)', salary: '₹6 - 14 LPA' },
      { title: 'No-Code Developer', salary: '₹4 - 12 LPA' },
      { title: 'AI Consultant', salary: '₹7 - 20 LPA' },
      { title: 'Productivity Automation Lead', salary: '₹6 - 16 LPA' },
      { title: 'Freelance AI Expert', salary: '₹4 - 25+ LPA' }
    ]
  }
];

export default courses;

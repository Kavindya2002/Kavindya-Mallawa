// ============================================================
// PORTFOLIO DATA — Update this file to modify site content
// ============================================================

export const personalInfo = {
  name: "Kavindya Mallawa",
  title: "Software Engineer",
  roles: [
    "Full-Stack Developer",
    "Azure Cloud Engineer",
    "Backend Developer",
    ".NET Developer",
    "React Developer",
  ],
  bio: "Motivated and adaptable professional with strong problem-solving and analytical skills. Able to develop effective solutions in fast-paced team environments, with a commitment to continuous learning, innovation and delivering value.",
  about: `I'm a 4th-year BSc (Hons) Information Technology student at SLIIT, passionate about building scalable software solutions. My internship at Hayleys Advantis gave me deep exposure to enterprise-level .NET development, cloud architecture on Azure and modern DevOps practices.

I thrive at the intersection of backend engineering and cloud — designing RESTful APIs, implementing distributed system patterns and deploying containerized apps. I'm equally comfortable building responsive frontends with React and Angular.

Beyond code, I'm an active participant in the Microsoft Student Ambassador community, consistently expanding my knowledge through workshops and certifications.`,
  email: "kavindyamallawa@gmail.com",
  phone: "+9477-6032-717",
  location: "Pannala, Sri Lanka",
  university: "SLIIT — 4th Year",
  linkedin: "https://www.linkedin.com/in/kavindya-mallawa-12199b251/",
  github: "https://github.com/Kavindya2002",
  portfolio: "https://kavindya2002.github.io/Portfolio/",
  cv: "/Kavindya_Mallawa.pdf",
  status: "Open to Opportunities",
  stats: [
    { label: "Projects Completed", value: "10+" },
    { label: "Certifications", value: "15+" },
    { label: "Technologies", value: "20+" },
    { label: "Months Internship", value: "7" },
  ],
}

export const skills = {
  cloud: [
    { name: "Azure App Services & Functions", level: 85 },
    { name: "Azure Key Vault & Security", level: 80 },
    { name: "Azure Container Apps", level: 75 },
    { name: "Azure Front Door & Gateway", level: 72 },
    { name: "Application Insights & Monitor", level: 78 },
  ],
  backend: [
    { name: ".NET Web API / Clean Architecture", level: 82 },
    { name: "Node.js / Express / TypeScript", level: 80 },
    { name: "RESTful API Design & Versioning", level: 88 },
    { name: "Microsoft SQL Server", level: 80 },
    { name: "Spring Boot", level: 70 },
  ],
  frontend: ["React.js", "Angular", "Tailwind CSS", "TypeScript", "HTML / CSS", "Responsive Design"],
  tools: ["Git / GitHub", "Docker", "Kubernetes (basics)", "CI/CD Pipelines", "SonarQube", "Swagger / Postman", "Jest", "WorkHub24"],
  ai: ["Google Gemini API", "Azure Custom Vision", "AI/ML Engineering", "Python", "Data Science & Analytics", "MongoDB"],
  soft: ["Agile / Scrum", "Problem Solving", "Team Collaboration", "Leadership", "Time Management", "Proactive Learning"],
}

export const experience = [
  {
    role: "Intern Software Engineer (Onsite)",
    company: "Hayleys Advantis Group — MIT Global Solutions (Pvt) Ltd",
    department: "ISD Digital Department",
    period: "November 2025 – May 2026",
    highlights: [
      "Developed and maintained back-end services using .NET Web API, following Clean Architecture principles ensuring scalability, maintainability, and proper separation of concerns.",
      "Designed and implemented RESTful APIs, handled bug fixing, and improved code quality using SonarQube and Visual Studio.",
      "Worked with Microsoft SQL Server — writing queries, implementing triggers, and supporting data synchronization using Change Tracking.",
      "Contributed to frontend development using React and Angular, including component development, API integration, and error handling.",
      "Gained hands-on experience with Azure: App Services, Azure Functions, Key Vault with Managed Identity, Application Insights, and Azure Monitor.",
      "Designed cloud architecture: Azure Front Door, Azure Application Gateway, and Azure Container Apps (containerized deployment).",
      "Implemented production-level observability patterns: Trace IDs, Correlation IDs, and Idempotency Keys.",
      "Managed version control using Git — branching strategies (main, development, feature), meaningful commits, resolving merge conflicts.",
      "Business Process Automation using WorkHub24.",
    ],
    tags: [".NET Web API", "Clean Architecture", "Azure", "React", "Angular", "SQL Server", "Docker", "SonarQube", "Agile"],
  }
]

export const projects = [
  {
    id: 1,
    number: "01",
    type: "Full-Stack",
    title: "CEYLONPROP Real Estate Management System",
    description: "Full-stack Real Estate platform with Property, Customer and Transaction Management. Features an AI-powered chatbot and secure RESTful APIs. Built with a responsive React frontend and backend tested with Jest and Postman.",
    tags: ["Node.js", "Express", "TypeScript", "React", "Tailwind", "Jest"],
    github: "https://github.com/Kavindya2002/CEYLONPROP-Real-Estate",
    live: null,
    featured: true,
  },
  {
    id: 2,
    number: "02",
    type: "Enterprise",
    title: "MC Computers – Invoice Management System",
    description: "Web-based Invoice Management System for a computer retail shop. Supports invoice generation, secure data management, and API testing with Swagger UI. Built with ASP.NET, Angular and Microsoft SQL Server.",
    tags: ["ASP.NET", "Angular", "SQL Server", "Swagger"],
    github: "https://github.com/Kavindya2002/MC-Computers---Advantis",
    live: null,
    featured: true,
  },
  {
    id: 3,
    number: "03",
    type: "AI-Powered",
    title: "AI-Powered Full-Stack Blog App",
    description: "AI-powered blog platform using the MERN stack. Integrates Google Gemini API for content generation and ImageKit for media optimization. Features secure JWT authentication and containerized with Docker.",
    tags: ["MERN", "Gemini API", "ImageKit", "JWT", "Docker"],
    github: "https://github.com/Kavindya2002/Blog-App",
    live: null,
    featured: true,
  },
  {
    id: 4,
    number: "04",
    type: "Collaborative",
    title: "Skill Sharing & Learning Platform",
    description: "Collaborative coding skill-sharing platform featuring authentication, coding post management, structured learning plans and progress tracking. Built with Spring Boot backend, React.js frontend and MongoDB.",
    tags: ["Spring Boot", "React.js", "MongoDB", "REST API"],
    github: "https://github.com/Kavindya2002/PAF-Group-Project",
    live: null,
    featured: false,
  },
  {
    id: 5,
    number: "05",
    type: "Social",
    title: "Social Media Website",
    description: "A full-featured social media web application with user profiles, posts, and interactive social features — built with modern web technologies.",
    tags: ["Web Technologies"],
    github: "https://github.com/Kavindya2002/Social-Media-Website",
    live: null,
    featured: false,
  },
]

export const certifications = [
  {
    icon: "🪟",
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "November 30, 2024",
    id: "AFE37484991912BB",
  },
  {
    icon: "📊",
    title: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft",
    date: "December 6, 2024",
    id: "BAB35D85B72901E4",
  },
  {
    icon: "⚙️",
    title: "Introduction to DevOps",
    issuer: "Microsoft Learn",
    date: "February 18, 2025",
    id: null,
  },
  {
    icon: "🔶",
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "February 14, 2025",
    id: null,
  },
  {
    icon: "🤖",
    title: "AI/ML Engineer – Stage 1 & Stage 2",
    issuer: "SLIIT – Centre for Open & Distance Education",
    date: "Stage 1: Feb 10, 2025 · Stage 2: Apr 13, 2025",
    id: null,
  },
  {
    icon: "🌿",
    title: "Agile Project Management (CPD Certified)",
    issuer: "Alison",
    date: "February 18, 2025",
    id: "5661-46465316",
  },
  {
    icon: "🐍",
    title: "Python for Beginners",
    issuer: "University of Moratuwa (CODL)",
    date: "January 15, 2025",
    id: "49jb3gjiXI",
  },
  {
    icon: "💠",
    title: "Data Science & Analytics",
    issuer: "HP LIFE / HP Foundation",
    date: "January 29, 2025",
    id: null,
  },
  {
    icon: "🏆",
    title: "MS Student Champs – June 2025 (2 Certificates)",
    issuer: "Microsoft Learn Student Ambassadors – Sri Lanka",
    date: "June 21, 2025",
    id: null,
    sub: "Build Image Classifier w/ Azure Custom Vision · DPAPI SecureStorage in Windows",
  },
  {
    icon: "🤖",
    title: "MS Student Champs – July 2025 (2 Certificates)",
    issuer: "Microsoft Learn Student Ambassadors – Sri Lanka",
    date: "July 2025",
    id: null,
    sub: "MCP-Powered AI Agents with Azure AI Foundry · Getting Started with Power Automate",
  },
  {
    icon: "🌐",
    title: "Azure OpenAI Services in GitHub Models",
    issuer: "Microsoft Learn Student Ambassador – Nisal Gunawardhana",
    date: null,
    id: null,
    sub: "MLSA Workshop Certificate",
  },
  {
    icon: "🤖",
    title: "Create an Agent with Copilot Studio",
    issuer: "Microsoft Learn Student Ambassador – Nisal Gunawardhana",
    date: null,
    id: null,
    sub: "MLSA Workshop Certificate",
  },
  {
    icon: "🔌",
    title: "Creating an MCP Server Using .NET",
    issuer: "Microsoft Learn Student Ambassador – Nisal Gunawardhana",
    date: null,
    id: null,
    sub: "MLSA Workshop Certificate",
  },
  {
    icon: "📚",
    title: "AAT Level 2",
    issuer: "AAT Sri Lanka",
    date: null,
    id: null,
  },
]

export const events = [
  {
    id: 1,
    title: "Level Up – Skills and Attitudes that Accelerate Career Growth",
    organizer: "Hayleys Advantis Limited",
    date: "March 25, 2026",
    description: "Participated in the \"Level Up – Skills and Attitudes that Accelerate Career Growth\" career development session conducted for talented interns at Hayleys Head Office. The interactive session combined engaging activities and practical discussions to encourage active participation and critical thinking. Key topics included continuous skill development, maintaining a positive professional attitude, adaptability, consistency, and cultivating a growth mindset. The session provided valuable insights into building long-term career success while fostering confidence, professionalism, and lifelong learning.",
    tags: ["Career Development", "Growth Mindset", "Professional Skills"],
    images: [
      "/src/assets/images/events/levelup-1.jpeg",
      "/src/assets/images/events/levelup-2.jpeg",
      "/src/assets/images/events/levelup-3.jpeg",
    ],
  },
  {
    id: 2,
    title: "Think Fast, Talk Smart – Effective Communication Under Pressure",
    organizer: "Hayleys Advantis Limited",
    date: "November 13, 2025",
    description: "Participated in the \"Think Fast, Talk Smart\" session focused on managing anxiety and communicating effectively in high-pressure situations. The session explored techniques to transform nervousness into positive energy, structure thoughts quickly, and speak with clarity and confidence when responding unexpectedly. Practical communication frameworks such as \"What–So What–Now What\" and \"Problem–Solution–Benefit\" were introduced and practiced to improve quick thinking, idea organization, and confident speaking skills.",
    tags: ["Think Fast, Talk Smart", "Effective Communication", "High-Pressure Speaking"],
    images: [
      "/src/assets/images/events/thinkfast-1.jpg",
      "/src/assets/images/events/thinkfast-2.jpg",
      "/src/assets/images/events/thinkfast-3.jpg",
    ],
  },
  {
    id: 3,
    title: "Microsoft Student Champs – Month of June",
    organizer: "Microsoft Sri Lanka · Organized by MLSA Sri Lanka",
    date: "June 21, 2025",
    description: "A truly rewarding experience at Microsoft Sri Lanka. Sessions included AI & IT Breakthroughs, DPAPI SecureStorage in Windows for security best practices, and hands-on Azure Custom Vision for building AI-powered image classifiers.",
    tags: ["Build Image Classifier w/ Azure Custom Vision", "DPAPI SecureStorage in Windows"],
    images: [
      "/src/assets/images/ms-champs/mschamps-1.jpg",
      "/src/assets/images/ms-champs/mschamps-2.jpg",
      "/src/assets/images/ms-champs/mschamps-3.jpg",
    ],
  },
]

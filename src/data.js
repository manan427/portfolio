export const personalInfo = {
  name: "Manan Modi",
  title: "AI and Data Engineer",
  email: "modimanan00@gmail.com",
  phone: "+91-8850276939",
  location: "Mumbai, India",
  bio: "AI and Data Engineer experienced in building AI-powered systems, scalable backend services, data pipelines, and automation workflows. Skilled in Python, FastAPI, SQL, LLM integration, and real-time data processing.",
  socialLinks: [
    { platform: "github", url: "https://github.com/manan427" },
    { platform: "linkedin", url: "https://www.linkedin.com/in/modimanan" }
  ],
  resumeUrl: "#", // User can link their PDF or trigger custom download
};

export const skills = [
  {
    category: "Languages & Backend",
    items: [
      { name: "Python", icon: "python" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "REST APIs", icon: "api" },
      { name: "JavaScript", icon: "javascript" }
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "React (.JSX)", icon: "react" },
      { name: "Angular", icon: "angular" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Bootstrap", icon: "bootstrap" }
    ]
  },
  {
    category: "AI/ML",
    items: [
      { name: "LLM Integration", icon: "brain" },
      { name: "Prompt Engineering", icon: "terminal" },
      { name: "Agentic AI", icon: "agent" },
      { name: "TPOT", icon: "tpot" },
      { name: "Gemini", icon: "gemini" },
      { name: "OpenAI-compatible Models", icon: "openai" }
    ]
  },
  {
    category: "Data",
    items: [
      { name: "Pandas", icon: "pandas" },
      { name: "NumPy", icon: "numpy" },
      { name: "ETL / Data Pipelines", icon: "pipeline" },
      { name: "Data Processing", icon: "dataproc" },
      { name: "Data Validation & Analysis", icon: "validation" },
      { name: "Visualization", icon: "visualization" }
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MSSQL", icon: "mssql" },
      { name: "SQL Optimization", icon: "sqlopt" },
      { name: "Query Rewriting", icon: "queryrewrite" },
      { name: "Firebase", icon: "firebase" },
      { name: "Supabase", icon: "supabase" }
    ]
  },
  {
    category: "Infra & Automation",
    items: [
      { name: "Zabbix Monitoring", icon: "zabbix" },
      { name: "Ansible", icon: "ansible" },
      { name: "Python Cron Jobs", icon: "cron" },
      { name: "SSE Streaming", icon: "sse" }
    ]
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "GitHub", icon: "github" },
      { name: "BrowserStack", icon: "browserstack" },
      { name: "OpenProject", icon: "openproject" },
      { name: "Sublime Text", icon: "sublime" }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Galaxy Protaigo",
    techStack: ["Python", "FastAPI", "React", "LLMs", "Zabbix", "OpenTelemetry", "Ansible"],
    highlights: [
      "Built Unified Alerts API for centralized monitoring and real-time data aggregation aggregating Zabbix and OpenTelemetry alerts",
      "Developed LLM Remediation Engine with real-time fix generation (<5s)",
      "Designed Domain Health Scoring and Risk Prioritization Engine",
      "Enabled deep observability with drill-down APIs improving MTTR"
    ]
  },
  {
    id: 2,
    title: "SQL Optimizer Agent",
    techStack: ["Python", "PostgreSQL", "Agentic AI"],
    highlights: [
      "Built SQL optimization and query analysis engine for performance tuning and database analytics detecting N+1 queries and bottlenecks",
      "Developed query rewriting using CTEs and optimized structures",
      "Performed data validation, query analysis, and performance monitoring on large datasets",
      "Implemented Semantic Validation ensuring data consistency",
      "Integrated EXPLAIN ANALYZE for performance insights"
    ]
  },
  {
    id: 3,
    title: "TaskHub",
    techStack: ["Python", "FastAPI", "React", "Gemini"],
    highlights: [
      "Built AI-based data ingestion and structured extraction pipeline",
      "Integrated Gemini LLM for parsing and workflow generation",
      "Designed scalable backend workflows for high-volume processing"
    ]
  },
  {
    id: 4,
    title: "ResumeAI",
    techStack: ["Python", "FastAPI", "OpenAI-compatible LLMs"],
    highlights: [
      "Developed AI-powered resume analysis engine comparing resumes with job descriptions",
      "Delivered scoring on skill alignment, experience, and role fit",
      "Generated insights with strengths, weaknesses, and improvements"
    ]
  },
  {
    id: 5,
    title: "Auxhealium",
    techStack: ["Python", "FastAPI", "Ansible"],
    highlights: [
      "Integrated Ansible automation and OTP validation workflows",
      "Built WhatsApp integration for alerts and execution triggers"
    ]
  }
];

export const experience = [
  {
    role: "AI Engineer",
    company: "Galaxy Office Automation",
    location: "Mumbai",
    period: "Apr 2023 -- Present",
    highlights: [
      "Designed and deployed AI-powered systems and full-stack applications, owning end-to-end development from LLM integration and backend APIs (FastAPI) to React frontends",
      "Built agentic AI systems, automation pipelines, and real-time observability tools using LLMs, Ansible integrations, and scalable architectures"
    ]
  },
  {
    role: "Software Developer Intern",
    company: "21n78e Creative Labs",
    location: "Mumbai",
    period: "Sept 2021 -- June 2022",
    highlights: [
      "Built and re-architected applications using Angular, Bootstrap, and API integrations",
      "Developed platforms using WordPress Elementor Pro; increased traffic by 25%",
      "Integrated WhatsApp Bot for automated communication workflows"
    ]
  }
];

export const education = [
  {
    institution: "Thakur College of Commerce and Science",
    location: "Mumbai",
    degree: "Master's in Information Technology",
    score: "CGPA: 9.2",
    year: "2023"
  }
];

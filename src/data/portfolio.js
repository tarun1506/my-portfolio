export const personalInfo = {
  name: "Tarun Mohan Kumar",
  title: "Software Engineer",
  tagline:
    "I engineer the full picture spanning backend, security, automation, and everything in between",
  bio: [
    `I'm a Software Engineer with 4+ years of experience building systems that actually matter at scale. I recently completed my M.S. in Computer Science at Northeastern University.`,
    `For me, the best part of this job has never been the code. It is the moment a platform you built gets adopted across an entire engineering org, or a patch you shipped stops a crash for someone in the field who can't afford downtime. That's what keeps me going. I am the kind of engineer people count on. Not just to deliver, but to stay in it when things get messy and make sure what ships actually works.`,
    `When I am not at my desk, you will find me at the gym, out for a drive, or watching F1 and picking apart race strategy like it's a system design problem. Turns out engineering and motorsport have more in common than you would think. Both are won in the details.`,
  ],
  email: "tarunmohan15@hotmail.com",
  github: "https://github.com/tarun1506",
  linkedin: "https://www.linkedin.com/in/mohantarun/",
  resumeUrl: "/Resume_Tarun.pdf",
  location: "United States",
  phone: "+1 (510) 513-5915",
};

export const skills = [
  {
    category: "Languages",
    items: ["Python", "Java", "JavaScript", "C++", "Swift", "Bash"],
  },
  {
    category: "Frontend & Backend",
    items: [
      "React",
      "Angular",
      "HTML",
      "CSS",
      "Spring Boot",
      "Node.js",
      "REST APIs",
      "Microservices",
      "Distributed Systems",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS (S3, EC2)",
      "Docker",
      "Kubernetes",
      "GCP",
      "Azure",
      "Git",
      "Bamboo",
      "CI/CD",
    ],
  },
  {
    category: "Security & Tools",
    items: [
      "Coverity",
      "BlackDuck",
      "Snyk",
      "ELK Stack",
      "gdb",
      "Valgrind",
      "MySQL",
      "MongoDB",
      "Jira",
    ],
  },
];

export const projects = [
  {
    title: "SocketShare",
    description:
      "A full stack cloud storage platform built with Python, Flask, React and AWS S3. It supports secure file uploads, signed URL validation and encrypted concurrent access for multiple users simultaneously",
    tech: ["Python", "Flask", "React", "AWS S3"],
    github: "https://github.com/tarun1506/SocketShare",
    live: null,
    featured: true,
  },
  {
    title: "Penning Pathway",
    description:
      "A responsive journaling web app built with React, Express.js and MySQL. It features Auth0 authentication, tag based categorization and external API integration designed for a seamless multi user experience.",
    tech: ["React", "Express.js", "MySQL", "Auth0"],
    github: "https://github.com/tarun1506/Penning_Pathway",
    live: null,
    featured: true,
  },
  {
    title: "LockBox",
    description:
      "An iOS password manager built with Swift and Firebase featuring AES encrypted storage, keychain integration, geolocation based access control and real time sync for a complete end to end security experience.",
    tech: ["Swift", "Firebase"],
    github: "https://github.com/agni-ch/lockbox",
    live: null,
    featured: true,
  },
  {
    title: "Car Rental Management System",
    description:
      "A full stack web app built with Node.js, Express and SQLite3 for managing car listings, bookings and rental statuses. Features a clean Bootstrap interface with dynamic form handling, modal interactions and full CRUD operations for a seamless rental management experience.",
    tech: ["Python", "Transformers", "FastAPI", "Docker", "AWS"],
    github: "https://github.com/tarun1506/CarRentalManagement",
    live: null,
    featured: false,
  },
  {
    title: "Hierarchical Memory and Cache System",
    description:
      "A message oriented data store built in C that manages messages across a memory hierarchy with disk persistence and an in memory cache layer. Features UUID based message tracking, configurable cache sizing and two page replacement algorithms, LRU and Random, with built in metrics tracking for cache hits, misses and hit ratio.",
    tech: ["C"],
    github: "https://github.com/tarun1506/CS5600/tree/master/practicum1",
    live: null,
    featured: false,
  },
];

export const experience = [
  {
    company: "Greenstand",
    role: "Software Developer – Android (Open Source Contributor)",
    period: "Aug 2025 – Present",
    location: "Remote",
    bullets: [
      "Resolved Gradle dependency conflicts breaking the CI test suite, restoring pipeline stability and reducing regression failures by 40%, unblocking active development cycles for field-facing features.",
      "Patched a critical NullPointerException in the image capture module, eliminating a recurring crash disrupting data collection for field teams in low-resource environments.",
      "Owned Android release workflows including build variant management, Firebase App Distribution rollouts, and CI updates, cutting release turnaround time by 30%.",
    ],
  },
  {
    company: "Zscaler Software Pvt. Ltd.",
    role: "Software Engineer",
    period: "Apr 2021 – Aug 2023",
    location: "Bangalore, India",
    bullets: [
      "Engineered LOGAN, an enterprise compliance platform adopted by 950+ engineers, cutting issue resolution time by 30% and boosting collaboration efficiency by 20% through BlackDuck/Coverity integration and Bamboo CI pipelines.",
      "Deployed a production branch gating system via Python/Shell scripting and Jira API integrations, reducing deployment errors by 28% and eliminating unauthorized production merges across the engineering org.",
      "Automated Bamboo CI pipelines with Coverity on every commit and weekly BlackDuck/Snyk scans, reducing critical vulnerabilities by 70% and ensuring continuous SDLC compliance without manual intervention.",
      "Mentored junior engineers in secure coding and authored internal runbooks, reducing onboarding and handoff time by 40% across globally distributed teams.",
    ],
  },
  {
    company: "Zscaler Software Pvt. Ltd.",
    role: "Associate Software Engineer",
    period: "Sept 2020 – Apr 2021",
    location: "Bangalore, India",
    bullets: [
      "Architected an ELK-based SCM Log Analytics and Alerting System across distributed teams, reducing security anomaly detection and incident response time by 20%.",
      "Built a Python pipeline to parse BlackDuck and Snyk vulnerability reports, cutting assessment time by 30% and surfacing 45% more critical package-level security risks.",
      "Developed a Java-based Jira plugin with configurable filters and triage dashboards, improving bug triage efficiency by 40% across shared enterprise codebases.",
    ],
  },
];

export const personalInfo = {
  name: "Tarun Mohan",
  title: "ML Engineer & Full-Stack Developer",
  tagline: "Building intelligent systems and scalable web applications",
  bio: `I'm a Master's student passionate about machine learning, distributed systems, and creating software that makes a real impact. I love working at the intersection of AI and product — turning complex models into delightful user experiences.`,
  email: "tarunmohan@example.com",
  github: "https://github.com/tarunmohan",
  linkedin: "https://linkedin.com/in/tarunmohan",
  resumeUrl: "/resume.pdf",
  location: "United States",
};

export const skills = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "Go", "SQL", "C++"],
  },
  {
    category: "ML / AI",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "LangChain", "OpenCV"],
  },
  {
    category: "Web & Backend",
    items: ["React", "Node.js", "FastAPI", "Django", "PostgreSQL", "Redis"],
  },
  {
    category: "Infrastructure",
    items: ["Docker", "Kubernetes", "AWS", "GCP", "Terraform", "GitHub Actions"],
  },
];

export const projects = [
  {
    title: "LLM-Powered Code Review Bot",
    description:
      "An automated GitHub Action that uses GPT-4 to review pull requests, flagging bugs, security issues, and style violations with inline comments.",
    tech: ["Python", "LangChain", "FastAPI", "GitHub Actions", "OpenAI"],
    github: "https://github.com/tarunmohan/code-review-bot",
    live: null,
    featured: true,
  },
  {
    title: "Real-Time Object Detection Dashboard",
    description:
      "A web dashboard that streams video from RTSP cameras, runs YOLOv8 inference, and displays bounding boxes and alert events in real time.",
    tech: ["Python", "YOLOv8", "WebSocket", "React", "FastAPI"],
    github: "https://github.com/tarunmohan/object-detection-dashboard",
    live: "https://demo.example.com",
    featured: true,
  },
  {
    title: "Distributed Task Queue",
    description:
      "A lightweight, Redis-backed distributed task queue with priority scheduling, retries, and a monitoring UI — inspired by Celery but simpler.",
    tech: ["Go", "Redis", "React", "Docker"],
    github: "https://github.com/tarunmohan/task-queue",
    live: null,
    featured: true,
  },
  {
    title: "Sentiment Analysis API",
    description:
      "Fine-tuned DistilBERT for multi-label sentiment classification on product reviews, served via a REST API with sub-50ms p99 latency.",
    tech: ["Python", "Transformers", "FastAPI", "Docker", "AWS"],
    github: "https://github.com/tarunmohan/sentiment-api",
    live: null,
    featured: false,
  },
];

export const experience = [
  {
    company: "Acme AI Corp",
    role: "Machine Learning Engineer Intern",
    period: "May 2025 – Aug 2025",
    location: "San Francisco, CA",
    bullets: [
      "Reduced model inference latency by 40% through quantization and batching optimizations on production BERT models.",
      "Built an internal data labeling platform that cut annotation time by 3× using active learning to surface high-uncertainty samples.",
      "Shipped a retrieval-augmented generation (RAG) pipeline for a customer-facing Q&A chatbot, achieving 87% answer accuracy on internal evals.",
    ],
  },
  {
    company: "State University Research Lab",
    role: "Research Assistant — NLP",
    period: "Sep 2024 – Apr 2025",
    location: "Remote",
    bullets: [
      "Co-authored a paper on low-resource named entity recognition, accepted at ACL 2025 workshop.",
      "Implemented data augmentation strategies (back-translation, mixup) that improved F1 by 6 points on benchmark datasets.",
      "Maintained experiment tracking with MLflow and contributed reproducibility scripts used by 3 other lab members.",
    ],
  },
  {
    company: "StartupXYZ",
    role: "Software Engineering Intern",
    period: "Jun 2023 – Aug 2023",
    location: "New York, NY",
    bullets: [
      "Developed REST APIs in Node.js for a B2B SaaS platform serving 200+ enterprise clients.",
      "Migrated legacy jQuery frontend to React, reducing bundle size by 35% and improving Lighthouse score from 62 to 91.",
      "Set up CI/CD pipelines using GitHub Actions and Docker, cutting deployment time from 45 minutes to under 5 minutes.",
    ],
  },
];

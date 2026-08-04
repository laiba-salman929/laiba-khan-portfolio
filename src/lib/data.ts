export const profile = {
  name: "Laiba Khan",
  role: "Artificial Intelligence Undergraduate",
  roles: [
    "Machine Learning",
    "Computer Vision",
    "Data Science",
    "AI-Driven Software",
  ],
  location: "Karachi, Pakistan",
  email: "laibasalman789@gmail.com",
  phone: "+92 335 6343466",
  linkedin: "https://www.linkedin.com/in/laiba-khan-4541aa2bb",
  about:
    "Artificial Intelligence undergraduate with strong foundations in machine learning, computer vision, data processing, and software development. Experienced in building AI-driven applications using Python, C++, and SQL, with hands-on work in machine learning models, database systems, and low-level programming. Seeking internship or entry-level opportunities in Artificial Intelligence, Machine Learning, Data Science, or AI-driven software development.",
};

export const education = [
  {
    period: "07/09/2023 — Current",
    place: "Karachi, Pakistan",
    degree: "BS Artificial Intelligence",
    school: "NED University of Engineering and Technology",
    detail: "Final grade 3.504 / 4.00",
  },
  {
    period: "Matriculation & Intermediate",
    place: "Daharki, Pakistan",
    degree: "Pre-Medical",
    school: "Mari Energies Higher Secondary School",
    detail: null,
  },
];

export const skills = {
  Programming: ["C/C++", "Python", "SQL", "Prolog", "x86 Assembly"],
  Tools: ["Visual Studio", "PyCharm", "Jupyter Notebook", "Excel", "Access"],
  "Soft Skills": [
    "Teamwork",
    "Management",
    "Communication",
    "Computational Thinking",
    "Adaptability",
    "Problem Solving",
  ],
};

export const projects = [
  {
    title: "Cyber Incident Detection System",
    subtitle: "Machine Learning & Graph Analysis",
    description:
      "A machine learning system that detects cybersecurity incidents from event log data, correlating related security events to surface insider threats.",
    points: [
      "Applied Random Forest classification to flag suspicious user activity",
      "Graph-based analysis to correlate related security events",
      "Feature engineering & preprocessing to lift model performance",
    ],
    tags: ["Python", "Random Forest", "Graph Analysis", "Security"],
  },
  {
    title: "Manipulation Pattern Detection",
    subtitle: "Deep Learning",
    description:
      "A Deep Neural Network that detects and classifies manipulation patterns in conversational data, with a focus on model robustness.",
    points: [
      "Built and tuned a DNN classifier for conversational text",
      "SHERLOCK-based verification for stability & output-range checks",
      "Evaluated via metrics, visualizations, and robustness testing",
    ],
    tags: ["Deep Learning", "NLP", "Model Evaluation"],
  },
  {
    title: "AI-Powered Blog Mining & Comment Generation",
    subtitle: "NLP & Generative AI",
    description:
      "An automated pipeline that mines blog content, scores sentiment and tone, and generates AI-written comments.",
    points: [
      "Web scraping + NLP pipeline for sentiment, tone, and motive inference",
      "Visual analytics dashboards with Matplotlib and Word Cloud",
      "Hugging Face Transformers + Microsoft Phi-3 Mini for comment generation",
    ],
    tags: ["NLP", "Hugging Face", "Phi-3 Mini", "Web Scraping"],
  },
  {
    title: "Sentiment Analysis Tool",
    subtitle: "C++ (OOP-Based)",
    description:
      "A sentiment analysis application built from the ground up in C++ using object-oriented design.",
    points: [
      "Text-processing algorithms classify positive / negative / neutral",
      "Modular class design for scalable, maintainable software",
    ],
    tags: ["C++", "OOP", "NLP"],
  },
  {
    title: "Employee Management System",
    subtitle: "SQL — DBMS Project",
    description:
      "A relational database system for managing employee and department records with a focus on data integrity.",
    points: [
      "Schema design with full database normalization",
      "Views, triggers, and advanced queries for reporting & auditing",
    ],
    tags: ["SQL", "Database Design", "DBMS"],
  },
  {
    title: "Hospital Bed Allocation System",
    subtitle: "Greedy & Dynamic Programming",
    description:
      "A patient-scheduling simulation that allocates limited hospital beds under urgency-based prioritization.",
    points: [
      "Compared Greedy vs. Dynamic Programming allocation strategies",
      "Benchmarked execution time, scalability, and allocation efficiency",
      "Simulated emergency scenarios for real-time decision-making",
    ],
    tags: ["Algorithms", "Dynamic Programming", "Simulation"],
  },
  {
    title: "Hangman Game",
    subtitle: "x86 Assembly — Irvine32",
    description:
      "A text-based Hangman game built directly in x86 Assembly to strengthen low-level programming fundamentals.",
    points: [
      "Random word selection, input validation, and scoring",
      "Hands-on work with registers and memory addressing",
    ],
    tags: ["Assembly", "Irvine32", "Low-Level"],
  },
];

export const certifications = [
  {
    issuer: "Coursera",
    year: "2026",
    title: "Computer Vision and Speech Recognition",
    points: [
      "Image processing with OpenCV",
      "Edge detection, filtering, thresholding, object detection",
      "Speech & audio processing using MFCC and spectrograms",
      "End-to-end pipelines for AI applications",
    ],
    link: "https://coursera.org/share/1b867d1af578ade7043b1fc8a94d0c86",
  },
  {
    issuer: "Google & Coursera",
    year: null,
    title: "Google AI Professional Certificate",
    points: [
      "7-course certification: AI fundamentals, prompt engineering, AI-assisted research, content creation, data analysis, and AI application development",
      "Generative AI tools, AI-powered workflows, and responsible AI usage",
    ],
    link: "https://coursera.org/share/e1e690b0e731a2b491740e8ee86181d2",
  },
];

export const leadership = [
  {
    role: "Member",
    org: "AI Club, NED",
    detail:
      "Participated in workshops, technical discussions, and AI-focused collaborative learning sessions.",
  },
  {
    role: "Participant",
    org: "Inter-University Coding Competitions",
    detail: "Solved algorithmic and logic-building problems using Python, SQL, and C++.",
  },
  {
    role: "Public Speaker",
    org: "Seminar on AI",
    detail:
      "Delivered a presentation on AI fundamentals and real-world applications to students and faculty.",
  },
];

export const languages = [
  { name: "Urdu", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Turkish", level: "Conversational" },
];

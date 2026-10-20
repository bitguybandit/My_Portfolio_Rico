import todosImg from '../images/todos.png'

// TODO: swap these placeholders for each project's real repository / demo links.
const GITHUB_PROFILE = 'https://github.com/bitguybandit'
const DEMO_PLACEHOLDER = '#'

export const projects = [
  {
    id: 1,
    title: "Awesome To-dos",
    description:
      "Awesome Todos is a full-stack web application that allows users to create, manage, and track their daily tasks in a simple and intuitive interface.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: todosImg,
    github: "https://github.com/bitguybandit",
    live: "https://awesome-todos-app-xjrx.onrender.com/",
    
  },
  {
    id: 2,
    title: 'eSumbong',
    description: 'A web-based complaint reporting and resolution system for Barangay LGUs. Features role-based access, anonymous reporting, and a transparent complaint lifecycle. Built as my OJT capstone project.',
    image: '/images/esumbong-landing.png',
    tech: ['React', 'Node.js', 'Express.js', 'Supabase', 'Tailwind CSS', 'Leaflet'],
    github: 'https://github.com/bitguybandit/eSumbong',
    live: 'https://esumbong-san-jose.vercel.app/',
  },
  {
    id: 3,
    title: "Smishing Detection App",
    description:
      "A Python-based machine learning application designed to detect and classify SMS phishing (smishing) attempts to protect users from scams.",
    tech: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
    image: "/images/smishing-landing.png",
    github: "https://github.com/bitguybandit/SmishingApp",
  },
  {
    id: 4,
    title: "OJTern",
    description:
      "A platform designed to streamline the internship application and tracking process for students and coordinators.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    image: "/images/ojtern-landing.png",
    github: "https://github.com/bitguybandit/OJTern",
  },
];
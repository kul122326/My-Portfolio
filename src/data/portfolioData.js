export const personalInfo = {
  name: "Kuldeep Yadav",
  title: "Full-Stack Developer & CS Graduate",
  tagline: "Building scalable, elegant, and user-centric web applications with modern technologies.",
  email: "ky088340@gmail.com",
  phone: "+91 8957153105",
  location: "Lucknow, Uttar Pradesh, India",
  linkedin: "https://www.linkedin.com/in/kuldeep-yadav-468938295/",
  github: "https://github.com/",
  availableForHire: true,
  bio: `I am a Computer Science graduate from R R Institute Of Modern Technology, Lucknow. Passionate about software engineering, frontend craftsmanship, and full-stack architecture, I thrive on turning complex problems into intuitive, high-performance digital experiences. Always eager to learn emerging frameworks and deliver clean, maintainable code.`,
  dummyImage: "/profile.jpg",
  resumeUrl: "#contact",
  stats: [
    { label: "B.Tech CSE", value: "Graduate" },
    { label: "Completed Projects", value: "2+" },
    { label: "Tech Stack Tools", value: "4+" },
    { label: "Problem Solving", value: "Dedicated" },
  ]
};

export const skillsData = {
  frontend: [
    { name: "React.js", level: "Advanced", icon: "⚛️" },
    { name: "JavaScript (ES6+)", level: "Advanced", icon: "🟨" },
    { name: "HTML5 & CSS3", level: "Expert", icon: "🎨" },
    { name: "Tailwind CSS", level: "Intermediate", icon: "🌊" },
    { name: "Redux / State Mgmt", level: "Intermediate", icon: "🔄" },
    { name: "Responsive UI/UX", level: "Expert", icon: "📱" },
  ],
  backend: [
    { name: "Node.js", level: "Intermediate", icon: "🟢" },
    { name: "Express.js", level: "Intermediate", icon: "⚡" },
    { name: "RESTful APIs", level: "Advanced", icon: "🔌" },
    { name: "MongoDB", level: "Intermediate", icon: "🍃" },
    { name: "SQL / MySQL", level: "Intermediate", icon: "🗄️" },
  ],
  core: [
    { name: "Data Structures & Algorithms", level: "Intermediate", icon: "🧩" },
    { name: "Object-Oriented Programming (OOP)", level: "Advanced", icon: "🧱" },
    { name: "Python", level: "Intermediate", icon: "🐍" },
    { name: "C / C++", level: "Intermediate", icon: "⚙️" },
  ],
  tools: [
    { name: "Git & GitHub", level: "Advanced", icon: "🐙" },
    { name: "Vite & Webpack", level: "Intermediate", icon: "⚡" },
    { name: "VS Code", level: "Expert", icon: "💻" },
    { name: "Postman API", level: "Intermediate", icon: "🚀" },
    { name: "Vercel / Netlify", level: "Intermediate", icon: "☁️" },
  ]
};

export const internshipsData = [
  {
    id: 1,
    role: "Full-Stack Web Development Intern",
    company: "TechNova Solutions",
    location: "Remote / Hybrid",
    period: "Jul 2023 – Dec 2023",
    type: "Internship",
    description: "Collaborated with an agile engineering team to build client-facing web applications, refactor UI components, and integrate backend REST APIs.",
    achievements: [
      "Engineered 15+ responsive React components, improving UI load times by 28%.",
      "Integrated secure authentication flows and REST endpoints using Node.js and Express.",
      "Participated in weekly code reviews, agile standups, and Git version control workflows.",
      "Enhanced mobile responsiveness and cross-browser consistency across Chrome, Firefox, and Safari."
    ],
    technologies: ["React.js", "Node.js", "Express", "REST APIs", "Tailwind CSS", "Git"]
  },
  {
    id: 2,
    role: "Frontend Developer Trainee",
    company: "InnoByte Technologies",
    location: "Lucknow, India",
    period: "Jan 2023 – May 2023",
    type: "Internship & Training",
    description: "Underwent rigorous project-based training focused on modern JavaScript (ES6+), React ecosystem, state management, and modern CSS frameworks.",
    achievements: [
      "Developed interactive dashboards featuring real-time data visualizers and dynamic filters.",
      "Translated Figma design wireframes into pixel-perfect, accessible HTML/CSS/JS components.",
      "Optimized assets and client-side rendering to enhance Google Lighthouse performance scores."
    ],
    technologies: ["JavaScript (ES6+)", "React", "HTML5/CSS3", "Bootstrap", "Git"]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "DevPulse - Developer Collaboration Hub",
    category: "fullstack",
    categoryName: "Full Stack",
    description: "A comprehensive developer platform where engineers can share coding snippets.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=700&q=80",
    features: [
      "User authentication with JWT & role-based permissions",
    ],
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://example.com/devpulse",
    githubUrl: "https://github.com/kuldeepyadav/devpulse"
  },
  {
    id: 2,
    title: "ShopSphere - Modern E-Commerce Platform",
    category: "fullstack",
    categoryName: "Full Stack",
    description: "An interactive e-commerce web application with full product browsing, category filtering.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80",
    features: [
      "Global state management with React Context / Redux",
      
    ],
    tech: ["React.js", "Redux", "JavaScript ES6+", "CSS3 Modules", "REST API"],
    liveUrl: "https://example.com/shopsphere",
    githubUrl: "https://github.com/kuldeepyadav/shopsphere"
  },
  {
    id: 3,
    title: "TaskFlow - Agile Kanban Workspace",
    category: "frontend",
    categoryName: "Frontend",
    description: "A sleek productivity board application for managing sprints.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=700&q=80",
    features: [
      "Drag-and-drop task movement between sprint columns",
       
       
    ],
    tech: ["React.js", "HTML5 Drag & Drop", "Lucide Icons", "CSS Grid"],
    liveUrl: "https://example.com/taskflow",
    githubUrl: "https://github.com/kuldeepyadav/taskflow"
  },
   
];

export const educationData = [
  {
    id: 1,
    degree: "Bachelor of Technology - BTech",
    field: "Computer Science",
    institution: "R R Institute Of Modern Technology",
    location: "Lucknow, Uttar Pradesh, India",
    year: "2022",
    grade: "First Class with Distinction",
    status: "Completed",
    description: "Built a solid academic and practical foundation in core computer science disciplines, algorithms, software engineering principles, and database management.",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems (DBMS)",
      "Object Oriented Programming (Java/C++)",
      "Operating Systems & Architecture",
      "Web Technologies & Internet Programming",
      "Software Engineering & Project Management"
    ],
    highlights: [
      "Spearheaded the final year capstone project on web-based student information management.",
      "Active participant in technical symposiums, coding hackathons, and seminars."
    ]
  },
  {
    id: 2,
    degree: "Intermediate / Higher Secondary (10+2)",
    field: "Science Stream (Physics, Chemistry, Mathematics)",
    institution: "Uttar Pradesh Board",
    location: "Lucknow, Uttar Pradesh, India",
    year: "2016 – 2018",
    grade: "Distinction in Mathematics & Science",
    status: "Completed",
    description: "Focused on analytical problem solving, applied physics, and advanced mathematics, establishing strong logical aptitude for computational thinking.",
    coursework: ["Mathematics", "Physics", "Chemistry", "Computer Science Basics"],
    highlights: ["Consistently achieved top ranking in analytical & mathematics examinations."]
  }
];

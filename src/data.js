export const personalInfo = {
  name: "Manan Modi",
  title: "Frontend Developer/Low code-No code developer",
  email: "modimanan00@gmail.com",
  phone: "+91 8850276939",
  location: "Mumbai , India",
  bio: "Passionate frontend developer with 2+ years of experience creating beautiful, responsive, and user-friendly interfaces. I specialize in Flutterflow, Bubble, and accessible web design. When I'm not coding, I enjoy hiking, photography, and contributing to open-source projects.",
  profileImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
  socialLinks: [
    { platform: "github", url: "https://github.com/manan427" },
    { platform: "linkedin", url: "www.linkedin.com/in/modimanan" },
    { platform: "twitter", url: "https://twitter.com/" },
    { platform: "dribbble", url: "https://dribbble.com/" }
  ],
  resumeUrl: "./Manan Modi.pdf",
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", level: 95, icon: "html5" },
      { name: "CSS3", level: 90, icon: "css3" },
      { name: "JavaScript", level: 92, icon: "javascript" },
      { name: "React.js", level: 95, icon: "react" },
      { name: "Tailwind CSS", level: 90, icon: "tailwind" },
    ]
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", level: 88, icon: "git" },
      { name: "Supabase", level: 80, icon: "supabase" },
      { name: "Flutterflow", level: 75, icon: "flutterflow" },
      { name: "Bubble", level: 70, icon: "bubble" },
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "A comprehensive admin dashboard for e-commerce sites with sales analytics, inventory management, and order tracking capabilities.",
    image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    techStack: ["React", "Redux", "Tailwind CSS", "Chart.js"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com",
    featured: true
  },
  {
    id: 2,
    title: "Weather App",
    description: "A sleek weather application that provides real-time weather data, forecasts, and beautiful visualizations based on location.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    techStack: ["React", "OpenWeather API", "CSS Modules", "Axios"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com",
    featured: true
  },
  {
    id: 3,
    title: "Task Management System",
    description: "A collaborative project management tool with task tracking, deadlines, and team communication features.",
    image: "https://images.pexels.com/photos/7234248/pexels-photo-7234248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    techStack: ["Flutterflow", "Supabase", "Dart"],
    liveUrl: "https://galaxy247-flutterflow.flutterflow.app/login",
    featured: true
  },
  {
    id: 4,
    title: "Fitness Tracker",
    description: "An application that helps users track their workouts, set goals, and visualize their fitness progress over time.",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    techStack: ["React", "Firebase", "Recharts", "Tailwind CSS"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com",
    featured: false
  }
];


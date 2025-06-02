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
      { name: "Git", level: 80, icon: "git" },
      { name: "Supabase", level: 80, icon: "supabase" },
      { name: "Flutterflow", level: 85, icon: "flutterflow" },
      { name: "Bubble", level: 90, icon: "bubble" },
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Ticketing App",
    description: "Implemented a ticketing system where user queries sent via email  (e.g., issues like ”Outlook not working”)are e automatically stored in an MSSQL database The data is retrieved in a Bubble app via API where enginners manage tickets by updating statuses and estimated resolution times The system sends automated email updates to users,notifying them when their tickets are picked up and resolved, with real-time updates reflected in both the app and the database ",
    image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    techStack: ["Bubble", "ApiConnector", "MsSql"],
    liveUrl: "https://ticket-58215.bubbleapps.io/version-test?debug_mode=true",
    featured: true
  },
  {
    id: 2,
    title: "Chatbot ",
    description: "Developed a chatbot using Gemini API, capable of handling smooth question-and-answer interactions.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    techStack: ["Flutterflow", "Dart", "Gemini"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com",
    featured: true
  },
  {
    id: 3,
    title: "Task Management System",
    description: "Developed a task management system enabling users to create and assign tasks to themselves or others, with options for daily, weekly, or monthly recurrence. Tasks include end dates, due dates, and automated email notifications for creation and approaching deadlines.",
    image: "https://images.pexels.com/photos/7234248/pexels-photo-7234248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    techStack: ["Flutterflow", "Supabase", "Dart"],
    liveUrl: "https://galaxy247-flutterflow.flutterflow.app/login",
    featured: true
  }
];


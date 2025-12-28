import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Moon, Sun, Download, Mail, Github, Linkedin, ExternalLink, 
  Send, Calendar, Layout, Server, BrainCircuit, Terminal 
} from 'lucide-react';

const Index = () => {
  const [isDark, setIsDark] = useState(true);
  const [isVisible, setIsVisible] = useState({});
  const { toast } = useToast();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // --- NEW DATA STRUCTURE: Cluster-Style Skills ---
  const skillCategories = [
    {
      title: "Frontend & Mobile",
      icon: <Layout className="w-8 h-8 text-pink-500" />,
      skills: ["React.js", "React Native", "Next.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5/CSS3"]
    },
    {
      title: "Backend & Architecture",
      icon: <Server className="w-8 h-8 text-purple-500" />,
      skills: ["Node.js", "Express.js", "C# .NET", "MongoDB", "MySQL", "RESTful APIs"]
    },
    {
      title: "AI & Machine Learning",
      icon: <BrainCircuit className="w-8 h-8 text-yellow-500" />,
      skills: ["Python", "TensorFlow", "Scikit-learn", "Gemini API", "NLP"]
    },
    {
      title: "DevOps & QA",
      icon: <Terminal className="w-8 h-8 text-blue-500" />,
      skills: ["Git / GitHub", "Playwright", "Postman", "Docker", "VS Code"]
    }
  ];

  const projects = [
    {
      title: 'AI Chatbot with Gemini API',
      description: 'Intelligent conversational AI built with Google\'s Gemini API, featuring natural language processing and contextual responses.',
      tech: ['JavaScript', 'Gemini API', 'React', 'Node.js'],
      github: 'https://github.com/Deepakps2004/Ai_chatbot',
      live: '#'
    },
    {
      title: 'Fully Functional Matrimony Site',
      description: 'A complete matrimony platform built with Apache, PHP, MySQL, and WordPress. Features user registration, profile management, search, and matchmaking.',
      tech: ['Apache', 'PHP', 'MySQL', 'WordPress'],
      github: 'http://sendhurvelanmatrimony.com/',
      live: 'http://sendhurvelanmatrimony.com/'
    },
    {
      title: 'Railway Pass Booking Web App',
      description: 'A simple, static web-based front-end concept simulating the experience of booking a railway pass. Pure HTML, IRCTC-inspired UI, responsive design.',
      tech: ['HTML', 'Tailwind CSS', 'UI/UX'],
      github: 'https://github.com/Deepakps2004/Railwaypass_booking',
      live: 'https://github.com/Deepakps2004/Railwaypass_booking'
    },
    {
      title: 'Student Connected Learning Platform',
      description: 'A React Native and Firebase based platform for students to connect, collaborate, and learn together. Features real-time chat and resource sharing.',
      tech: ['React Native', 'Firebase'],
      github: 'https://github.com/Deepakps2004/onespot',
      live: 'https://github.com/Deepakps2004/onespot'
    },
    {
      title: 'AI Resume Builder',
      description: 'Create professional resumes with AI assistance. Auto-saved progress, AI-enhanced summaries, and live preview.',
      tech: ['Next.js', 'Tailwind CSS', 'AI Integration'],
      github: 'https://ai-resume-builderr.vercel.app/',
      live: 'https://ai-resume-builderr.vercel.app/'
    }
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-900 via-purple-900 to-amber-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold gradient-text text-white">Deepak</div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDark(!isDark)}
              className="text-white hover:bg-white/10"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center section-padding pt-20">
        <div className={`text-center space-y-6 animate-fade-in ${isVisible.hero ? 'opacity-100' : 'opacity-0'}`}>
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-300 bg-clip-text text-transparent">Deepak</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              Freelance Full-Stack Developer | SaaS & Mobile App Architect
            </p>
            <p className="text-lg text-gray-300 max-w-xl mx-auto italic">
              Turning complex ideas into scalable SaaS tools and seamless digital experiences
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="https://drive.google.com/file/d/1xGBAcez2SXWTB5yt6bhWwCKF3xif_dK8/view?usp=drive_linkb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-white hover:opacity-90">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </a>

            <a href="mailto:deepakexplorer2004@gmail.com">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Mail className="mr-2 h-4 w-4" />
                Let's Connect
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-black/20">
        <div className="container mx-auto">
          <div className={`grid md:grid-cols-2 gap-12 items-center animate-slide-up ${isVisible.about ? 'opacity-100' : 'opacity-0'}`}>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  I am a Freelance Software Engineer who thrives on transforming abstract concepts into production-ready business solutions. With a strong foundation in Computer Applications (MCA) and a specialized focus on the MERN stack and .NET ecosystem, I build software that works for you.
                </p>
                <p>
                 I don't just write code; I partner with startups and businesses to create scalable SaaS platforms, responsive mobile applications, and high-performance websites. My approach blends technical precision with emotional intelligence—ensuring the final product is not only bug-free but also intuitive and user-centric.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="glass-card p-8 rounded-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="w-64 h-64 bg-gradient-to-tr from-pink-500 via-orange-400 to-yellow-300 rounded-full flex items-center justify-center">
                  <div className="text-8xl">👨‍💻</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- REFACTORED SKILLS SECTION (Cluster Style) --- */}
      <section id="skills" className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technical Expertise</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit designed to build scalable SaaS products and intelligent applications.
            </p>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up ${isVisible.skills ? 'opacity-100' : 'opacity-0'}`}>
            {skillCategories.map((category) => (
              <Card 
                key={category.title} 
                className="glass-card bg-white/5 border border-white/10 hover:border-pink-500/30 transition-all duration-300 group overflow-hidden relative"
              >
                 {/* Subtle Gradient Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-pink-400 transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1.5 text-sm font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full 
                                 hover:bg-pink-500/20 hover:text-white hover:border-pink-500/30 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Featured Projects</h2>
          
          <div className={`grid md:grid-cols-2 gap-8 animate-slide-up ${isVisible.projects ? 'opacity-100' : 'opacity-0'}`}>
            {projects.map((project) => (
              <Card key={project.title} className="glass-card border-white/10 hover:border-pink-400/50 transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-pink-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-pink-500/20 text-pink-300 border-pink-500/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 hover:opacity-90">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section - UPDATED WITH FREELANCE ROLE */}
      <section id="experience" className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Experience</h2>
          
          <div className={`max-w-3xl mx-auto space-y-6 animate-slide-up ${isVisible.experience ? 'opacity-100' : 'opacity-0'}`}>
            
            {/* Freelance Role */}
            <Card className="glass-card border-white/10 hover:border-pink-500/30 transition-colors">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-white text-xl">Freelance Full-Stack Developer</CardTitle>
                    <CardDescription className="text-pink-400 text-lg font-semibold">
                      Remote / Self-Employed
                    </CardDescription>
                  </div>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 w-fit">
                    <Calendar className="mr-1 h-3 w-3" />
                    Current
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Architecting and building custom SaaS tools and mobile applications for diverse clients. 
                    Specializing in translating business requirements into technical specifications and deliverable 
                    milestones using the MERN stack and .NET ecosystem.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-pink-500/30 text-pink-300">SaaS</Badge>
                    <Badge variant="outline" className="border-pink-500/30 text-pink-300">React Native</Badge>
                    <Badge variant="outline" className="border-pink-500/30 text-pink-300">.NET</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Intern Role */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-white text-xl">Web Development Intern</CardTitle>
                    <CardDescription className="text-pink-400 text-lg font-semibold">
                      Zerame Infotech, Coimbatore
                    </CardDescription>
                  </div>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30 w-fit">
                    <Calendar className="mr-1 h-3 w-3" />
                    1 Month
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Gained hands-on experience in web development, working extensively with Flask web applications 
                    and creating responsive user interfaces using HTML & CSS. Collaborated with the development 
                    team to deliver high-quality web solutions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-pink-500/30 text-pink-300">Flask</Badge>
                    <Badge variant="outline" className="border-pink-500/30 text-pink-300">Python</Badge>
                    <Badge variant="outline" className="border-pink-500/30 text-pink-300">HTML/CSS</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Get In Touch</h2>
          
          <div className={`max-w-2xl mx-auto animate-slide-up ${isVisible.contact ? 'opacity-100' : 'opacity-0'}`}>
            <Card className="glass-card border-white/10">
              <CardHeader className="text-center">
                <CardTitle className="text-white">Let's Build Something Amazing Together</CardTitle>
                <CardDescription className="text-gray-400">
                  Have a project in mind? I'd love to hear from you!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input 
                      placeholder="Your Name" 
                      required 
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                    />
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      required 
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <Textarea 
                    placeholder="Your Message" 
                    required 
                    rows={4}
                    className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                  />
                  <Button type="submit" className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 hover:opacity-90">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
                
                <div className="flex justify-center gap-6 mt-8 pt-6 border-t border-white/10">
                  <a href="https://github.com/Deepakps2004" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                      <Github className="h-5 w-5" />
                    </Button>
                  </a>
                  <a href="https://www.linkedin.com/in/deepakps1/" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </a>
                  <a href="mailto:deepak2004ps@outlook.com">
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                      <Mail className="h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 bg-black/30">
        <div className="container mx-auto text-center text-gray-400">
          <p>© 2025 Deepak. Engineered for performance.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Download, Mail, Github, Linkedin, ExternalLink, 
  Send, Calendar, Layout, Server, BrainCircuit, Terminal,
  ArrowUpRight, Code2, Sparkles, CheckCircle2, ChevronRight
} from 'lucide-react';
import { Hero3DCanvas } from "@/components/Hero3DCanvas";
import { TiltCard3D } from "@/components/TiltCard3D";
import { MotionBlurMarquee } from "@/components/MotionBlurMarquee";
import { RoleCycler } from "@/components/RoleCycler";
import { MotionBlurReveal } from "@/components/MotionBlurReveal";

const Index: React.FC = () => {
  const { toast } = useToast();

  const skillCategories = [
    {
      title: "FRONTEND & MOBILE",
      icon: <Layout className="w-6 h-6 text-black" />,
      skills: ["React.js", "React Native", "Next.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5/CSS3"]
    },
    {
      title: "BACKEND & ARCHITECTURE",
      icon: <Server className="w-6 h-6 text-black" />,
      skills: ["Node.js", "Express.js", "C# .NET", "MongoDB", "MySQL", "RESTful APIs"]
    },
    {
      title: "AI & MACHINE LEARNING",
      icon: <BrainCircuit className="w-6 h-6 text-black" />,
      skills: ["Python", "TensorFlow", "Scikit-learn", "Gemini API", "NLP"]
    },
    {
      title: "DEVOPS & QA",
      icon: <Terminal className="w-6 h-6 text-black" />,
      skills: ["Git / GitHub", "Playwright", "Postman", "Docker", "VS Code"]
    }
  ];

  const projects = [
    {
      title: 'AI Chatbot with Gemini API',
      description: 'Intelligent conversational AI built with Google\'s Gemini API, featuring natural language processing, context persistence, and lightning-fast streaming responses.',
      tech: ['JavaScript', 'Gemini API', 'React', 'Node.js'],
      github: 'https://github.com/Deepakps2004/Ai_chatbot',
      live: '#'
    },
    {
      title: 'Fully Functional Matrimony Site',
      description: 'A complete commercial matrimony platform built with Apache, PHP, MySQL, and WordPress. Features secure user registration, profile management, and matchmaking algorithms.',
      tech: ['Apache', 'PHP', 'MySQL', 'WordPress'],
      github: 'http://sendhurvelanmatrimony.com/',
      live: 'http://sendhurvelanmatrimony.com/'
    },
    {
      title: 'Railway Pass Booking Web App',
      description: 'A front-end ticketing application simulating the digital experience of purchasing and verifying transit passes with responsive UI and modern form flows.',
      tech: ['HTML5', 'Tailwind CSS', 'UI/UX'],
      github: 'https://github.com/Deepakps2004/Railwaypass_booking',
      live: 'https://github.com/Deepakps2004/Railwaypass_booking'
    },
    {
      title: 'Student Connected Learning Platform',
      description: 'A React Native and Firebase based platform for student networking, team collaboration, live group discussions, and academic resource sharing.',
      tech: ['React Native', 'Firebase', 'Realtime DB'],
      github: 'https://github.com/Deepakps2004/onespot',
      live: 'https://github.com/Deepakps2004/onespot'
    },
    {
      title: 'AI Resume Builder',
      description: 'Production-ready resume authoring platform powered by AI suggestions, live template rendering, automated formatting, and instant PDF exports.',
      tech: ['Next.js', 'Tailwind CSS', 'AI Integration'],
      github: 'https://ai-resume-builderr.vercel.app/',
      live: 'https://ai-resume-builderr.vercel.app/'
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "MESSAGE TRANSMITTED",
      description: "Thank you for reaching out. I will respond to your inquiry shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-neutral-900 selection:bg-black selection:text-white font-sans antialiased">
      {/* Navigation - Clean Monochrome & No Dark/White toggle */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/90 border-b border-black/10">
        <div className="container mx-auto px-4 sm:px-6 h-16 flex justify-between items-center">
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="w-3 h-3 bg-black inline-block group-hover:scale-125 transition-transform duration-200" />
            <span className="font-black tracking-tighter text-xl text-black uppercase">
              DEEPAK<span className="text-neutral-400 font-mono text-sm ml-1">.DEV</span>
            </span>
          </a>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-neutral-600 font-bold">
            <a href="#about" className="hover:text-black transition-colors duration-150">01. About</a>
            <a href="#skills" className="hover:text-black transition-colors duration-150">02. Stack</a>
            <a href="#projects" className="hover:text-black transition-colors duration-150">03. Works</a>
            <a href="#experience" className="hover:text-black transition-colors duration-150">04. Career</a>
            <a href="#contact" className="hover:text-black transition-colors duration-150">05. Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="#contact">
              <Button 
                size="sm"
                className="bg-black hover:bg-neutral-800 text-white font-mono text-xs uppercase tracking-wider rounded-none px-4 py-2 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                Hire Me
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Big Bold Black Texts, 3D Canvas, Motion Blur */}
      <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden border-b border-black/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Big Bold Typography & Kinetic Text */}
            <div className="lg:col-span-7 space-y-6">
              
              <MotionBlurReveal direction="left" delay={0.1}>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-xs font-mono tracking-widest uppercase mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  AVAILABLE FOR FREELANCE & SAAS CONTRACTS
                </div>
              </MotionBlurReveal>

              <MotionBlurReveal direction="up" delay={0.2}>
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-black uppercase tracking-tighter leading-[0.88] select-none">
                  DEEPAK
                </h1>
                <p className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-400 uppercase tracking-tighter mt-1">
                  FULL-STACK ARCHITECT
                </p>
              </MotionBlurReveal>

              {/* Kinetic Animated Role Switcher with Motion Blur */}
              <MotionBlurReveal direction="up" delay={0.35}>
                <div className="border-l-4 border-black pl-4 py-1 my-4 bg-neutral-100/70">
                  <RoleCycler />
                </div>
              </MotionBlurReveal>

              <MotionBlurReveal direction="up" delay={0.45}>
                <p className="text-lg sm:text-xl text-neutral-700 max-w-xl font-medium leading-relaxed">
                  Transforming ambitious ideas into scalable SaaS platforms, intelligent AI systems, and high-precision full-stack architectures.
                </p>
              </MotionBlurReveal>

              {/* High Contrast Solid CTAs (No Gradients) */}
              <MotionBlurReveal direction="up" delay={0.55}>
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="https://drive.google.com/file/d/1xGBAcez2SXWTB5yt6bhWwCKF3xif_dK8/view?usp=drive_linkb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button 
                      size="lg" 
                      className="bg-black text-white hover:bg-neutral-800 text-sm font-bold uppercase tracking-wider rounded-none px-8 py-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </Button>
                  </a>

                  <a href="#contact">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="bg-white text-black hover:bg-black hover:text-white text-sm font-bold uppercase tracking-wider rounded-none px-8 py-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Initiate Contact
                    </Button>
                  </a>
                </div>
              </MotionBlurReveal>

              {/* Quick Specs */}
              <MotionBlurReveal direction="up" delay={0.65}>
                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-black/10 font-mono">
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-black">100%</div>
                    <div className="text-xs uppercase text-neutral-500 font-bold mt-1">Delivery Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-black">MERN + .NET</div>
                    <div className="text-xs uppercase text-neutral-500 font-bold mt-1">Core Arsenal</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-black">AI READY</div>
                    <div className="text-xs uppercase text-neutral-500 font-bold mt-1">Gemini & ML</div>
                  </div>
                </div>
              </MotionBlurReveal>

            </div>

            {/* Right Column: Interactive 3D Canvas Experience */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <MotionBlurReveal direction="right" delay={0.3} className="w-full">
                <div className="relative border-2 border-black bg-white p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center justify-between border-b border-black pb-3 mb-2 font-mono text-xs uppercase font-bold text-black">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-black inline-block" />
                      3D_RENDER_VIEWPORT.OBJ
                    </span>
                    <span className="text-neutral-500">REALTIME INTERACTIVE</span>
                  </div>

                  {/* Three.js 3D Wireframe Scene */}
                  <Hero3DCanvas />

                  <div className="border-t border-black pt-3 mt-2 flex items-center justify-between text-[11px] font-mono text-neutral-600">
                    <span>MOVE POINTER TO ROTATE 3D MODEL</span>
                    <span className="font-bold text-black">60 FPS // WEBGL</span>
                  </div>
                </div>
              </MotionBlurReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Infinite Motion Blur Running Marquee */}
      <MotionBlurMarquee />

      {/* About Section - Big Bold Black Typography with 3D Depth */}
      <section id="about" className="py-24 border-b border-black/10 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <MotionBlurReveal direction="up" delay={0.1}>
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-bold mb-2">
              01 // BIOGRAPHY & PHILOSOPHY
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-black uppercase tracking-tighter mb-12">
              ABOUT ME
            </h2>
          </MotionBlurReveal>

          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-7 space-y-6 text-neutral-800 text-lg sm:text-xl leading-relaxed font-normal">
              <MotionBlurReveal direction="up" delay={0.2}>
                <p className="font-semibold text-black text-2xl sm:text-3xl leading-snug tracking-tight">
                  I am a Freelance Software Engineer who turns abstract business concepts into rock-solid, production-grade applications.
                </p>
              </MotionBlurReveal>

              <MotionBlurReveal direction="up" delay={0.3}>
                <p>
                  With a master’s background in Computer Applications (MCA) and hands-on depth across the full JavaScript ecosystem, React Native, and enterprise C# .NET, I engineer tools that are performant, resilient, and ready for commercial scale.
                </p>
              </MotionBlurReveal>

              <MotionBlurReveal direction="up" delay={0.4}>
                <p>
                  I don't just ship syntax; I partner directly with founders, growing teams, and businesses. My architectural approach blends clean engineering standards with intuitive product instincts—ensuring each digital solution is fast, bulletproof, and effortless for users.
                </p>
              </MotionBlurReveal>

              <MotionBlurReveal direction="up" delay={0.5}>
                <div className="grid grid-cols-2 gap-4 pt-4 font-mono text-xs uppercase font-bold text-black">
                  <div className="border border-black p-4 bg-neutral-50 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <span className="block text-2xl font-black mb-1">MCA</span>
                    Master of Computer Applications
                  </div>
                  <div className="border border-black p-4 bg-neutral-50 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <span className="block text-2xl font-black mb-1">AGILE</span>
                    Rapid Milestone Delivery
                  </div>
                </div>
              </MotionBlurReveal>
            </div>

            {/* 3D Tilt Developer Spec Block */}
            <div className="md:col-span-5">
              <MotionBlurReveal direction="right" delay={0.3}>
                <TiltCard3D>
                  <div className="border-2 border-black bg-neutral-900 text-white p-8 rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <div className="font-mono text-xs uppercase text-neutral-400 tracking-widest border-b border-neutral-700 pb-4 mb-6 flex justify-between items-center">
                      <span>ENGINEER_SPEC.JSON</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>

                    <div className="space-y-4 font-mono text-sm">
                      <div className="flex justify-between border-b border-neutral-800 pb-2">
                        <span className="text-neutral-400">NAME:</span>
                        <span className="font-bold text-white">DEEPAK</span>
                      </div>
                      <div className="flex justify-between border-b border-neutral-800 pb-2">
                        <span className="text-neutral-400">ROLE:</span>
                        <span className="font-bold text-white">FULL-STACK ARCHITECT</span>
                      </div>
                      <div className="flex justify-between border-b border-neutral-800 pb-2">
                        <span className="text-neutral-400">LOCATION:</span>
                        <span className="font-bold text-white">TAMIL NADU, INDIA</span>
                      </div>
                      <div className="flex justify-between border-b border-neutral-800 pb-2">
                        <span className="text-neutral-400">SPECIALTY:</span>
                        <span className="font-bold text-white">SAAS, MOBILE & AI</span>
                      </div>
                      <div className="flex justify-between border-b border-neutral-800 pb-2">
                        <span className="text-neutral-400">AVAILABILITY:</span>
                        <span className="font-bold text-emerald-400">IMMEDIATE</span>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-neutral-800">
                      <div className="text-xs font-mono text-neutral-400 uppercase mb-2">MISSION STATEMENT</div>
                      <p className="text-sm text-neutral-300 font-sans italic">
                        "Build tools that empower users, eliminate friction, and scale effortlessly under load."
                      </p>
                    </div>
                  </div>
                </TiltCard3D>
              </MotionBlurReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Arsenal (Skills) - Big Bold Typography & 3D Tilt Cards */}
      <section id="skills" className="py-24 border-b border-black/10 bg-[#fafafa]">
        <div className="container mx-auto px-4 sm:px-6">
          <MotionBlurReveal direction="up" delay={0.1}>
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-bold mb-2">
              02 // TECHNICAL ARSENAL
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-black uppercase tracking-tighter">
                CORE STACK
              </h2>
              <p className="text-neutral-600 font-mono text-sm max-w-md">
                ENGINEERED WITH MODERN TECHNOLOGIES FOR HIGH PERFORMANCE, RESPONSIVENESS, AND SCALE.
              </p>
            </div>
          </MotionBlurReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => (
              <MotionBlurReveal key={category.title} direction="up" delay={0.15 * (idx + 1)}>
                <TiltCard3D>
                  <Card className="rounded-none border-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                    <CardHeader className="border-b-2 border-black bg-neutral-50 pb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 border border-black bg-white">
                            {category.icon}
                          </div>
                          <CardTitle className="text-xl sm:text-2xl font-black text-black tracking-tight uppercase">
                            {category.title}
                          </CardTitle>
                        </div>
                        <span className="font-mono text-xs font-bold text-neutral-400">0{idx + 1}</span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex flex-wrap gap-2.5">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3.5 py-2 text-xs sm:text-sm font-mono font-bold text-black bg-neutral-100 border border-black rounded-none hover:bg-black hover:text-white transition-colors duration-150 cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TiltCard3D>
              </MotionBlurReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects - Big Bold Titles & 3D Cards */}
      <section id="projects" className="py-24 border-b border-black/10 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <MotionBlurReveal direction="up" delay={0.1}>
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-bold mb-2">
              03 // SELECTED PRODUCTIONS
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-black uppercase tracking-tighter">
                FEATURED WORKS
              </h2>
              <p className="text-neutral-600 font-mono text-sm max-w-md">
                A SHOWCASE OF PRODUCTION SYSTEMS, SAAS PROTOTYPES, AND AI AGENTS.
              </p>
            </div>
          </MotionBlurReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <MotionBlurReveal key={project.title} direction="up" delay={0.15 * (idx + 1)}>
                <TiltCard3D>
                  <Card className="rounded-none border-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col justify-between h-full group">
                    <CardHeader className="border-b-2 border-black pb-4">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <div className="font-mono text-xs text-neutral-400 font-bold mb-1">
                            PROJECT // 0{idx + 1}
                          </div>
                          <CardTitle className="text-2xl sm:text-3xl font-black text-black tracking-tight uppercase group-hover:text-neutral-700 transition-colors">
                            {project.title}
                          </CardTitle>
                        </div>
                        <ArrowUpRight className="h-6 w-6 text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                      <CardDescription className="text-neutral-600 text-sm mt-3 font-normal leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-6">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t) => (
                          <Badge 
                            key={t} 
                            variant="secondary"
                            className="bg-neutral-100 text-black border border-neutral-300 font-mono text-xs font-bold rounded-none px-2.5 py-1"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-3 pt-2">
                        {project.github && project.github !== '#' && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1"
                          >
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="w-full rounded-none border border-black bg-white text-black font-mono font-bold text-xs uppercase hover:bg-black hover:text-white transition-colors"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              Source
                            </Button>
                          </a>
                        )}

                        {project.live && project.live !== '#' && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1"
                          >
                            <Button 
                              size="sm" 
                              className="w-full rounded-none border border-black bg-black text-white font-mono font-bold text-xs uppercase hover:bg-neutral-800 transition-colors"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </Button>
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TiltCard3D>
              </MotionBlurReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section - Big Bold Black Typography */}
      <section id="experience" className="py-24 border-b border-black/10 bg-[#fafafa]">
        <div className="container mx-auto px-4 sm:px-6">
          <MotionBlurReveal direction="up" delay={0.1}>
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-bold mb-2">
              04 // WORK HISTORY
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-black uppercase tracking-tighter">
                EXPERIENCE
              </h2>
              <p className="text-neutral-600 font-mono text-sm max-w-md">
                COMMERCIAL FREELANCE CONTRACTS AND INDUSTRIAL SOFTWARE INTERNSHIPS.
              </p>
            </div>
          </MotionBlurReveal>

          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Freelance Role */}
            <MotionBlurReveal direction="up" delay={0.2}>
              <TiltCard3D>
                <Card className="rounded-none border-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 sm:p-8">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b-2 border-black pb-4 mb-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight">
                        Freelance Full-Stack Developer
                      </h3>
                      <div className="font-mono text-sm font-bold text-neutral-600 mt-1">
                        REMOTE / INDEPENDENT CONTRACTOR
                      </div>
                    </div>
                    <Badge className="bg-black text-white font-mono text-xs uppercase px-3 py-1 rounded-none border border-black w-fit">
                      <Calendar className="mr-1.5 h-3.5 w-3.5" />
                      Current
                    </Badge>
                  </div>

                  <p className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-6">
                    Architecting and deploying custom SaaS tools, responsive web applications, and mobile products for founders and business clients. Specializing in translating user requirements into production milestones using modern JavaScript (React/Next.js/Node) and the .NET enterprise stack.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {["SaaS Architecture", "React Native", "Node.js", ".NET Core", "Database Modeling", "API Integration"].map((item) => (
                      <span key={item} className="px-3 py-1 bg-neutral-100 border border-black font-mono text-xs font-bold text-black">
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
              </TiltCard3D>
            </MotionBlurReveal>

            {/* Intern Role */}
            <MotionBlurReveal direction="up" delay={0.35}>
              <TiltCard3D>
                <Card className="rounded-none border-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 sm:p-8">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b-2 border-black pb-4 mb-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-black uppercase tracking-tight">
                        Web Development Intern
                      </h3>
                      <div className="font-mono text-sm font-bold text-neutral-600 mt-1">
                        ZERAME INFOTECH, COIMBATORE
                      </div>
                    </div>
                    <Badge className="bg-neutral-200 text-black font-mono text-xs uppercase px-3 py-1 rounded-none border border-black w-fit">
                      <Calendar className="mr-1.5 h-3.5 w-3.5" />
                      1 Month Intensive
                    </Badge>
                  </div>

                  <p className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-6">
                    Gained direct industry exposure to software development cycles, contributing to Python Flask web applications and responsive client-side interfaces. Collaborated with senior developers on frontend fidelity and backend service endpoints.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {["Python", "Flask", "HTML5/CSS3", "JavaScript", "Responsive Design"].map((item) => (
                      <span key={item} className="px-3 py-1 bg-neutral-100 border border-black font-mono text-xs font-bold text-black">
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
              </TiltCard3D>
            </MotionBlurReveal>

          </div>
        </div>
      </section>

      {/* Contact Section - Big Bold Black Typography */}
      <section id="contact" className="py-24 border-b border-black/10 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <MotionBlurReveal direction="up" delay={0.1}>
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-bold mb-2">
              05 // INITIATE TRANSMISSION
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-black uppercase tracking-tighter mb-4">
              GET IN TOUCH
            </h2>
            <p className="text-neutral-600 font-mono text-sm max-w-lg mb-16">
              HAVE A SAAS PROJECT, MOBILE APP, OR FREELANCE ROLE? DROP A MESSAGE BELOW.
            </p>
          </MotionBlurReveal>

          <div className="max-w-2xl mx-auto">
            <MotionBlurReveal direction="up" delay={0.25}>
              <div className="border-2 border-black bg-white p-8 sm:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-xs uppercase font-bold text-black mb-2">
                        Your Name
                      </label>
                      <Input 
                        placeholder="John Doe" 
                        required 
                        className="rounded-none border-2 border-black bg-neutral-50 text-black font-medium focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-black"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs uppercase font-bold text-black mb-2">
                        Your Email
                      </label>
                      <Input 
                        type="email" 
                        placeholder="john@example.com" 
                        required 
                        className="rounded-none border-2 border-black bg-neutral-50 text-black font-medium focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-black"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase font-bold text-black mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell me about your project scope, requirements, or vision..." 
                      required 
                      rows={5}
                      className="rounded-none border-2 border-black bg-neutral-50 text-black font-medium focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-black"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-black text-white hover:bg-neutral-800 text-sm font-bold uppercase tracking-wider rounded-none py-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Transmit Message
                  </Button>
                </form>

                {/* Direct Social Links */}
                <div className="mt-10 pt-6 border-t-2 border-black flex flex-wrap justify-center gap-4">
                  <a href="https://github.com/Deepakps2004" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="rounded-none border border-black bg-white text-black font-mono font-bold text-xs uppercase hover:bg-black hover:text-white transition-colors">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                  </a>
                  <a href="https://www.linkedin.com/in/deepakps1/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="rounded-none border border-black bg-white text-black font-mono font-bold text-xs uppercase hover:bg-black hover:text-white transition-colors">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Button>
                  </a>
                  <a href="mailto:deepak2004ps@outlook.com">
                    <Button variant="outline" className="rounded-none border border-black bg-white text-black font-mono font-bold text-xs uppercase hover:bg-black hover:text-white transition-colors">
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </Button>
                  </a>
                </div>

              </div>
            </MotionBlurReveal>
          </div>
        </div>
      </section>

      {/* Footer - Minimalist Monochrome */}
      <footer className="py-12 bg-black text-white border-t-2 border-black">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs uppercase">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-white inline-block" />
            <span className="font-black tracking-tight text-sm">DEEPAK // 2026</span>
          </div>

          <div className="text-neutral-400">
            ENGINEERED WITH REACT, THREE.JS & TAILWIND CSS
          </div>

          <a href="#hero" className="text-white hover:underline flex items-center gap-1 font-bold">
            BACK TO TOP [↑]
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
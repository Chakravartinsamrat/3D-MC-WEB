import { useEffect, useState, useRef } from 'react';
import { Pickaxe, Github, Linkedin, Mail, ChevronDown, Code2, Brain, Briefcase, User, Send, MapPin } from 'lucide-react';
import dirt from "../assests/dirt.svg";
import steve from "../assests/steve.svg";
import stone from "../assests/stone.svg";
// You'll need to import additional background images
import deepslate from "../assests/diamond.svg";
import negger from "../assests/negger.svg";
import pfp from "../assests/pfp.svg";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [typedName, setTypedName] = useState('');
  const [activeSection, setActiveSection] = useState('surface');
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});
  const name = 'Piyush Chakarborthy';
  
  useEffect(() => {
    // Simulate loading screen
    setTimeout(() => setIsLoading(false), 2000);
    
    // Animate name typing
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex <= name.length) {
        setTypedName(name.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 150);

    // Intersection Observer for section detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section');
            if (sectionId) setActiveSection(sectionId);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all sections
    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      clearInterval(typeInterval);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = sectionsRef.current[sectionId];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const languages = [
    { name: 'JavaScript', level: 90, type: 'Diamond' },
    { name: 'TypeScript', level: 85, type: 'Diamond' },
    { name: 'Python', level: 80, type: 'Gold' },
    { name: 'Java', level: 75, type: 'Iron' },
    { name: 'SQL', level: 85, type: 'Diamond' },
  ];

  const frameworks = [
    { name: 'React', level: 90, type: 'Diamond' },
    { name: 'Next.js', level: 85, type: 'Diamond' },
    { name: 'Express', level: 80, type: 'Gold' },
    { name: 'TensorFlow', level: 70, type: 'Iron' },
    { name: 'Django', level: 75, type: 'Iron' },
  ];

  const tools = [
    { name: 'AWS', level: 80, type: 'Gold' },
    { name: 'Docker', level: 75, type: 'Iron' },
    { name: 'Git', level: 90, type: 'Diamond' },
    { name: 'VS Code', level: 95, type: 'Diamond' },
    { name: 'Figma', level: 70, type: 'Iron' },
  ];

  const projects = [
    {
      title: 'Project One',
      description: 'A full-stack application built with React and Node.js',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
      github: 'https://github.com/yourusername/project-one',
      demo: 'https://project-one-demo.com'
    },
    {
      title: 'Project Two',
      description: 'An AI-powered data analytics platform',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      github: 'https://github.com/yourusername/project-two',
      demo: 'https://project-two-demo.com'
    },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#1D1D1D] flex flex-col items-center justify-center text-white pixel-font">
        <div className="w-64 h-2 bg-[#555555] rounded">
          <div className="h-full bg-[#8B8B8B] rounded animate-progress"></div>
        </div>
        <p className="mt-4 text-gray-400">Loading world...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative"> 
      {/* Navigation */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-[#1D1D1D] bg-opacity-80 backdrop-blur-sm p-2 rounded-full z-50">
        <div className="flex gap-4">
          <button 
            onClick={() => scrollToSection('surface')}
            type="button" // Explicitly set type to button
            className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${activeSection === 'surface' ? 'bg-[#54CC5C]' : 'hover:bg-gray-700'}`}
          >
            <User className="w-5 h-5 text-white" />
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            type="button" // Explicitly set type to button
            className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${activeSection === 'about' ? 'bg-[#54CC5C]' : 'hover:bg-gray-700'}`}
          >
            <Brain className="w-5 h-5 text-white" />
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            type="button" // Explicitly set type to button
            className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${activeSection === 'skills' ? 'bg-[#54CC5C]' : 'hover:bg-gray-700'}`}
          >
            <Code2 className="w-5 h-5 text-white" />
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            type="button" // Explicitly set type to button
            className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${activeSection === 'projects' ? 'bg-[#54CC5C]' : 'hover:bg-gray-700'}`}
          >
            <Briefcase className="w-5 h-5 text-white" />
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            type="button" // Explicitly set type to button
            className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${activeSection === 'contact' ? 'bg-[#54CC5C]' : 'hover:bg-gray-700'}`}
          >
            <Mail className="w-5 h-5 text-white" />
          </button>
        </div>
      </nav>

      {/* Sections */}
      <div className="snap-y snap-mandatory h-screen overflow-y-auto">
        {/* Surface Layer - Landing */}
        <section 
          ref={el => sectionsRef.current['surface'] = el}
          data-section="surface"
          className="snap-start h-screen relative"
          style={{
            backgroundImage: `url(${steve})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Semi-transparent overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-sky-400 to-sky-200 opacity-0"></div>

          <div className="relative h-full flex flex-col items-center justify-center px-4">
            <div className="minecraft-container bg-black bg-opacity-50 p-8 rounded-lg backdrop-blur-sm">
              <h1 className="text-4xl md:text-6xl text-white mb-6 pixel-font">
                {typedName}<span className="animate-blink">_</span>
              </h1>
              <p className="text-gray-200 text-xl mb-8 pixel-font">AI\ML and Full Stack Developer</p>
              
              <button 
                onClick={() => scrollToSection('about')}
                type="button" // Explicitly set type to button
                className="minecraft-button bg-[#54CC5C] hover:bg-[#47B24E] text-white pixel-font py-3 px-6 rounded flex items-center gap-2 transform hover:scale-110 transition-all duration-300 hover:shadow-glow active:translate-y-1"
              >
                <Pickaxe className="w-5 h-5" />
                Start Mining
              </button>
            </div>
            <ChevronDown className="absolute bottom-8 text-white animate-bounce w-8 h-8" />
          </div>
        </section>

        {/* Dirt Layer - About */}
        <section 
          ref={el => sectionsRef.current['about'] = el}
          data-section="about"
          className="snap-start h-screen relative"
          style={{
            backgroundImage: `url(${dirt})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'cover'
          }}
        >
          {/* Semi-transparent overlay for blending */}
          <div className="absolute inset-0 bg-[#8B5E34] opacity-50"></div>
          
          <div className="relative h-full flex items-center justify-center px-4">
            <div className="minecraft-container bg-[#6D4B2C] bg-opacity-90 p-8 rounded-lg max-w-4xl">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Profile Image */}
                <div className="minecraft-profile-frame bg-[#5D3E21] p-2 rounded-lg">
                  <div className="h-48 w-48 rounded-lg overflow-hidden">
                    <img 
                      src={pfp} 
                      alt="Piyush Chakarborthy"
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
                
                {/* About Text */}
                <div className="flex-1">
                  <h2 className="text-3xl text-white mb-6 pixel-font">About Me</h2>
                  <p className="text-gray-200 pixel-font leading-relaxed mb-6">
                    I'm a passionate developer with a love for creating innovative solutions. 
                    With expertise in modern web technologies, I craft robust and scalable applications 
                    that solve real-world problems.
                  </p>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.linkedin.com/in/piyushc2003/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="minecraft-button bg-[#4267B2] hover:bg-[#365899] text-white pixel-font py-2 px-4 rounded inline-flex items-center gap-2 transform hover:scale-110 transition-all duration-300 hover:shadow-glow active:translate-y-1"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span>LinkedIn</span>
                    </a>
                    <a 
                      href="https://github.com/Chakravartinsamrat" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="minecraft-button bg-[#333333] hover:bg-[#2B2B2B] text-white pixel-font py-2 px-4 rounded inline-flex items-center gap-2 transform hover:scale-110 transition-all duration-300 hover:shadow-glow active:translate-y-1"
                    >
                      <Github className="w-5 h-5" />
                      <span>GitHub</span>
                    </a>
                    <a 
                      href="mailto:piyushchakarborthy@gmail.com" 
                      className="minecraft-button bg-[#EA4335] hover:bg-[#D33828] text-white pixel-font py-2 px-4 rounded inline-flex items-center gap-2 transform hover:scale-110 transition-all duration-300 hover:shadow-glow active:translate-y-1"
                    >
                      <Mail className="w-5 h-5" />
                      <span>Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stone Layer - Skills */}
        <section 
          ref={el => sectionsRef.current['skills'] = el}
          data-section="skills"
          className="snap-start h-screen relative"
          style={{
            backgroundImage: `url(${stone})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'cover'
          }}
        >
          {/* Semi-transparent overlay for blending */}
          <div className="absolute inset-0 bg-[#7A7A7A] opacity-40"></div>
          
          <div className="relative h-full flex items-center justify-center px-4">
            <div className="minecraft-container bg-[#666666] bg-opacity-90 p-8 rounded-lg max-w-5xl w-full">
              <h2 className="text-3xl text-white mb-6 pixel-font">Skills</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Languages Column */}
                <div className="space-y-4">
                  <h3 className="text-xl text-white pixel-font mb-3 text-center">Languages</h3>
                  {languages.map((skill) => (
                    <div key={skill.name} className="bg-[#555555] p-4 rounded hover:bg-[#606060] transition-all duration-300">
                      <div className="flex justify-between mb-2">
                        <span className="text-white pixel-font">{skill.name}</span>
                        <span className="text-gray-300 pixel-font">{skill.type}</span>
                      </div>
                      <div className="h-4 bg-[#333333] rounded overflow-hidden">
                        <div 
                          className="h-full bg-[#54CC5C] transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Frameworks Column */}
                <div className="space-y-4">
                  <h3 className="text-xl text-white pixel-font mb-3 text-center">Frameworks</h3>
                  {frameworks.map((skill) => (
                    <div key={skill.name} className="bg-[#555555] p-4 rounded hover:bg-[#606060] transition-all duration-300">
                      <div className="flex justify-between mb-2">
                        <span className="text-white pixel-font">{skill.name}</span>
                        <span className="text-gray-300 pixel-font">{skill.type}</span>
                      </div>
                      <div className="h-4 bg-[#333333] rounded overflow-hidden">
                        <div 
                          className="h-full bg-[#54CC5C] transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Tools Column */}
                <div className="space-y-4">
                  <h3 className="text-xl text-white pixel-font mb-3 text-center">Tools</h3>
                  {tools.map((skill) => (
                    <div key={skill.name} className="bg-[#555555] p-4 rounded hover:bg-[#606060] transition-all duration-300">
                      <div className="flex justify-between mb-2">
                        <span className="text-white pixel-font">{skill.name}</span>
                        <span className="text-gray-300 pixel-font">{skill.type}</span>
                      </div>
                      <div className="h-4 bg-[#333333] rounded overflow-hidden">
                        <div 
                          className="h-full bg-[#54CC5C] transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diamond Layer - Projects */}
        <section 
          ref={el => sectionsRef.current['projects'] = el}
          data-section="projects"
          className="snap-start h-screen relative"
          style={{
            backgroundColor: '#4A80AA', // Fallback color while deepslate image loads
            backgroundImage: `url(${deepslate})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'cover'
          }}
        >
          {/* Semi-transparent overlay for deepslate texture with diamond highlights */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#4A80AA] to-[#62B6FF] opacity-10"></div>
          
          {/* Diamond particles */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Animated diamond particles */}
            <div className="diamond-particle"></div>
            <div className="diamond-particle" style={{animationDelay: '1.5s'}}></div>
            <div className="diamond-particle" style={{animationDelay: '3s'}}></div>
            <div className="diamond-particle" style={{animationDelay: '4.5s'}}></div>
            <div className="diamond-particle" style={{animationDelay: '6s'}}></div>
          </div>
          
          <div className="relative h-full flex items-center justify-center px-4">
            <div className="minecraft-container bg-[#3B6488] bg-opacity-90 p-8 rounded-lg max-w-4xl w-full">
              <h2 className="text-3xl text-white mb-6 pixel-font">Projects</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project) => (
                  <div key={project.title} className="bg-[#2C4C66] p-4 rounded transform hover:scale-105 transition-transform duration-300">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover rounded mb-4"
                    />
                    <h3 className="text-xl text-white pixel-font mb-2">{project.title}</h3>
                    <p className="text-gray-300 pixel-font mb-4">{project.description}</p>
                    <div className="flex gap-4">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="minecraft-button bg-[#333333] hover:bg-[#2B2B2B] text-white pixel-font py-2 px-4 rounded inline-flex items-center gap-2 transform hover:scale-110 transition-all duration-300 hover:shadow-glow active:translate-y-1"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="minecraft-button bg-[#54CC5C] hover:bg-[#47B24E] text-white pixel-font py-2 px-4 rounded inline-flex items-center gap-2 transform hover:scale-110 transition-all duration-300 hover:shadow-glow active:translate-y-1"
                      >
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Nether Layer - Contact */}
        <section 
          ref={el => sectionsRef.current['contact'] = el}
          data-section="contact"
          className="snap-start h-screen relative overflow-hidden"
          style={{
            backgroundColor: '#6B1F1F', // Fallback color while nether image loads
            backgroundImage: `url(${negger})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'cover'
          }}
        >
          {/* Semi-transparent overlay for nether texture with lava highlights */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#6B1F1F] to-[#B83333] opacity-40"></div>
          
          {/* Animated lava particles */}
          <div className="absolute inset-0">
            <div className="lava-particle"></div>
            <div className="lava-particle" style={{animationDelay: '2s'}}></div>
            <div className="lava-particle" style={{animationDelay: '4s'}}></div>
            <div className="lava-particle" style={{animationDelay: '6s'}}></div>
            <div className="lava-particle" style={{animationDelay: '8s'}}></div>
          </div>
          
          <div className="relative h-full flex items-center justify-center px-4">
            <div className="minecraft-container bg-[#8B2F2F] bg-opacity-90 p-8 rounded-lg max-w-5xl w-full">
              <h2 className="text-3xl text-white mb-6 pixel-font">Contact Me</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div className="space-y-4">
                  <form className="space-y-4">
                    <div>
                      <label className="block text-white pixel-font mb-2">Name</label>
                      <input 
                        type="text"
                        className="w-full bg-[#6B1F1F] border-2 border-[#FF4A3C] rounded p-2 text-white pixel-font focus:outline-none focus:border-[#FF8C7C] transition-all duration-300"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-white pixel-font mb-2">Email</label>
                      <input 
                        type="email"
                        className="w-full bg-[#6B1F1F] border-2 border-[#FF4A3C] rounded p-2 text-white pixel-font focus:outline-none focus:border-[#FF8C7C] transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-white pixel-font mb-2">Message</label>
                      <textarea 
                        className="w-full bg-[#6B1F1F] border-2 border-[#FF4A3C] rounded p-2 text-white pixel-font focus:outline-none focus:border-[#FF8C7C] min-h-[120px] transition-all duration-300"
                        placeholder="Write your message"
                      ></textarea>
                    </div>
                    <button 
                      type="button" // Changed from submit to button to prevent form submission
                      className="minecraft-button bg-[#FF4A3C] hover:bg-[#FF8C7C] text-white pixel-font py-3 px-6 rounded flex items-center gap-2 transform hover:scale-110 transition-all duration-300 hover:shadow-glow active:translate-y-1"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </form>
                </div>
                
                {/* Location Map */}
                <div className="space-y-4">
                  <div className="bg-[#6B1F1F] border-2 border-[#FF4A3C] rounded p-4">
                    <h3 className="text-xl text-white pixel-font mb-4">Location</h3>
                    <div className="aspect-video bg-[#551A1A] rounded relative overflow-hidden">
                      {/* Placeholder for map - in a real app you'd integrate Google Maps here */}
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <MapPin className="w-12 h-12 text-[#FF4A3C] mx-auto mb-2" />
                          <p className="text-white pixel-font">Bangalore, India</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-white pixel-font flex items-center gap-2 mb-2">
                        <MapPin className="w-5 h-5 text-[#FF4A3C]" />
                        <span>Bangalore, Karnataka, India</span>
                      </p>
                      <p className="text-white pixel-font flex items-center gap-2">
                        <Mail className="w-5 h-5 text-[#FF4A3C]" />
                        <span>piyushchakarborthy@gmail.com</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
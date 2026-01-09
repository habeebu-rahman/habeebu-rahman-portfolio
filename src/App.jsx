import { useEffect,useState } from 'react';
import { NavLink } from './components/NavLink';
import { MobileNavLink } from './components/MobileNavLink';
import { ProjectCard } from './components/ProjectCard';
import { SectionHeader } from './components/SectionHeader';
import { SkillItem } from './components/SkillItem';
import { SocialIcon } from './components/SocialIcon';
import { SoftSkillItem } from './components/SoftSkillItem';
import { Icons } from './components/Icons';



const App = () => {
      const [isScrolled, setIsScrolled] = useState(false);
      const [isMenuOpen, setIsMenuOpen] = useState(false);

      //form
      const [contactName, setContactName] = useState("");
      const [contactEmail, setContactEmail] = useState("");
      const [contactMessage, setContactMessage] = useState("");
      const [contactStatus, setContactStatus] = useState("");

      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

        useEffect(() => {
          // Make sure the container exists (React has rendered)
          const container = document.getElementById("lottie-hero");
          if (!container || !window.lottie) return;

          const anim = window.lottie.loadAnimation({
            container: container,
            renderer: "svg",
            loop: true,
            autoplay: true,
            // If JSON is in same folder:
            path: "script.json",
            // If JSON is in /lottie/dev-animation.json:
            // path: "lottie/dev-animation.json",
          });

          // Optional cleanup when component unmounts
          return () => {
            anim.destroy();
          };
        }, []);

        // Init EmailJS once
        useEffect(() => {
          if (window.emailjs) {
            window.emailjs.init("l4QHK3DeIpcMm7bWA"); // from EmailJS
          } else {
          console.log("emailjs NOT loaded");
        }
        }, []);


        // send data with fetch()
        const handleContactSubmit = (e) => {
        e.preventDefault();
        setContactStatus("Sending...");

        if (!window.emailjs) {
          setContactStatus("Sorry, EmailJS not loaded");
          return;
        }

        window.emailjs
          .send("service_rav8m14", "template_w6nfl7f", {
            from_name: contactName,
            from_email: contactEmail,
            message: contactMessage,
          })
          .then(
            (response) => {
              console.log("SUCCESS!", response.status, response.text);
              setContactStatus("Message sended");
              setContactName("");
              setContactEmail("");
              setContactMessage("");
            },
            (error) => {
              console.error("FAILED...", error);
              setContactStatus("Failed to send");
            }
          );
      };

      

      return (
        <div className="min-h-screen">
          
          {/* --- NAVIGATION --- */}
          <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
              isScrolled
                ? 'bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-md border-b border-gray-800 py-4'
                : 'bg-transparent py-6'
            }`}
          >
            <div className="container mx-auto px-6 flex justify-between items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-purple-500 bg-clip-text text-transparent">
                Dev.Portfolio
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8 items-center">
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#skills">Skills</NavLink>
                <NavLink href="#projects">Projects</NavLink>
                <a
                  href="#contact"
                  className="px-5 py-2 rounded-full bg-blue-900 text-gray-300 font-bold transition-all transform hover:-bg-blue-100 transition-colors hover:-translate-y-0.5 shadow-lg"
                >
                  Hire Me
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <Icons.X size={28} /> : <Icons.Menu size={28} />}
              </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
              <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 border-b border-gray-800 p-6 flex flex-col space-y-4 shadow-2xl">
                <MobileNavLink onClick={() => setIsMenuOpen(false)} href="#home">Home</MobileNavLink>
                <MobileNavLink onClick={() => setIsMenuOpen(false)} href="#about">About</MobileNavLink>
                <MobileNavLink onClick={() => setIsMenuOpen(false)} href="#skills">Skills</MobileNavLink>
                <MobileNavLink onClick={() => setIsMenuOpen(false)} href="#projects">Projects</MobileNavLink>
                <MobileNavLink onClick={() => setIsMenuOpen(false)} href="#contact">Contact</MobileNavLink>
              </div>
            )}
          </nav>

          {/* --- HERO SECTION --- */}
          <section id="home" className="relative min-h-screen flex items-center pt-20">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 bg-opacity-20 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700 bg-opacity-10 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 fade-in-up">
                <div className="inline-block px-4 py-1 rounded-full border border-blue-900 bg-blue-900 bg-opacity-10 text-blue-900 text-sm font-semibold tracking-wider">
                  PYTHON FULL STACK DEVELOPER
                </div>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Building{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-purple-900">
                    Secure
                  </span>{' '}
                  & <br />
                  <span className="text-white">Scalable</span> Systems.
                </h1>
                <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                  Recent BCA graduate proficient in Python, Django, and Modern Web Tech. 
                  I build digital solutions that are secure, responsive, and user-centric.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href="#projects"
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-center hover:shadow-lg transition-all hover:from-blue-900 hover:to-purple-900 transform hover:-translate-y-0.5"
                  >
                    View My Work
                  </a>
                  <a
                    href="#contact"
                    className="px-8 py-3 rounded-full border border-gray-700 bg-gray-800 bg-opacity-50 hover:bg-gray-800 text-white font-semibold text-center hover:border-blue-900 hover:text-blue-900 transition-all"
                  >
                    Contact Me
                  </a>
                </div>

                <div className="flex items-center gap-4 pt-8 text-gray-500">
                  <SocialIcon icon={<Icons.Github size={20} />} href="https://github.com/habeebu-rahman" />
                  <SocialIcon icon={<Icons.Linkedin size={20} />} href="#" />
                  <SocialIcon icon={<Icons.Mail size={20} />} href="mailto:habeeburahman271@gmail.com" />
                  <SocialIcon icon={<Icons.Document size={20} />} href="Habeebu Rahman.pdf" target="_blank"/>
                </div>
              </div>

              {/* 3D Animation / Lottie Area */}
              <div className="relative flex justify-center items-center h-80 md:h-96">
                <div className="absolute w-64 h-64 md:w-96 md:h-96 border border-gray-800 rounded-full animate-spin" />
                <div
                  className="absolute w-72 h-72 md:w-96 md:h-96 border border-gray-800 rounded-full animate-spin"
                  style={{ animationDuration: '15s', animationDirection: 'reverse', opacity: 0.5 }}
                />

                {/* Lottie container */}
                <div
                  id="lottie-hero"
                  className="w-full h-full max-w-xs md:max-w-sm relative z-10"
                ></div>
              </div>


            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500">
              <Icons.ChevronDown size={24} />
            </div>
            </div>
          </section>

          {/* --- ABOUT SECTION --- */}
          <section id="about" className="py-20 bg-gray-900 bg-opacity-50">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
                <div className="h-1 w-20 bg-purple-900 mx-auto rounded-full " />
                <p className="text-gray-300 text-lg leading-relaxed">
                  I am a recent <strong className="text-white">BCA graduate</strong> with a strong foundation in computer science principles and hands-on experience as a{' '}
                  <strong className="text-blue-600">Python Full-Stack Intern</strong>. 
                  My expertise spans the entire development lifecycle, from designing secure backends with<strong className="text-blue-600"> Django </strong> to crafting responsive frontends using <strong className="text-blue-600"> Bootstrap and JavaScript.</strong>
                  I successfully designed and deployed a web-based <strong className="text-blue-600"> digital voting system </strong>, proving my ability to solve real-world problems. 
                  I am now seeking a developer role to immediately apply my skills in a fast-paced, innovative team.
                </p>
              </div>
            </div>
          </section>

          {/* --- SKILLS SECTION --- */}
          <section id="skills" className="py-20 relative overflow-hidden">
            {/* Removed arbitrary bg-[url(...)] to be Tailwind 2 compatible */}
            <div className="container mx-auto px-6 relative z-10">
              <SectionHeader title="Technical Proficiency" subtitle="My Stack" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                
                {/* Hard Skills */}
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-blue-900 transition-colors duration-300 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-500 bg-opacity-10 rounded-lg text-blue-900">
                      <Icons.Terminal size={24} />
                    </div>
                    <h3 className="text-2xl font-bold">Development Stack</h3>
                  </div>
                  
                  <div className="grid grid-cols-2  gap-4">
                    <SkillItem name="Python" level="90%" />
                    <SkillItem name="Django" level="85%" />
                    <SkillItem name="JavaScript" level="80%" />
                    <SkillItem name="HTML5 / CSS3" level="95%" />
                    <SkillItem name="Bootstrap" level="90%" />
                    <SkillItem name="jQuery" level="75%" />
                    <SkillItem name="SQL / SQLite" level="70%" />
                    <SkillItem name="Git / GitHub" level="75%" />
                  </div>
                </div>

                {/* Soft Skills */}
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-purple-500 transition-colors duration-300 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-purple-500 bg-opacity-10 rounded-lg text-purple-400">
                      <Icons.User size={24} />
                    </div>
                    <h3 className="text-2xl font-bold">Professional Skills</h3>
                  </div>

                  <div className="space-y-4">
                    <SoftSkillItem title="Problem Solving" desc="Ability to break down complex logic into efficient code." />
                    <SoftSkillItem title="Team Collaboration" desc="Experienced in agile workflows and peer code reviews." />
                    <SoftSkillItem title="Adaptability" desc="Quick learner of new frameworks and tech stacks." />
                    <SoftSkillItem title="Communication" desc="Clear documentation and effective technical articulation." />
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* --- PROJECTS SECTION --- */}
          <section id="projects" className="py-24 bg-gray-900">
            <div className="container mx-auto px-6">
              <SectionHeader title="Featured Projects" subtitle="What I've Built" />

              <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                <ProjectCard 
                  title="Secure Digital Voting System"
                  tags={['Python', 'Django', 'OpenCV', 'Bootstrap']}
                  description="A secure web-based application enabling online voting with automated counting. The system features real-time face detection authentication to ensure a 'one-person-one-vote' policy, significantly reducing fraud risks compared to traditional methods."
                  icon={<Icons.Database size={32} className="text-blue-900" />}
                />

                <ProjectCard 
                  title="E-Commerce API Service"
                  tags={['Python', 'Flask', 'REST API', 'SQL']}
                  description="Designed a scalable e-commerce backend API featuring secure user authentication, product and inventory management, and simulated payment processing, while optimizing SQL queries to improve performance and reduce response times across endpoints."
                  icon={<Icons.Server size={32} className="text-purple-900" />}
                />

                <ProjectCard 
                  title="Interactive Portfolio V1"
                  tags={['React', 'Tailwind', 'Framer Motion']}
                  description="Developed a highly responsive personal portfolio website to showcase development skills. Implemented dark mode toggling, smooth scrolling, and animated UI components to enhance user experience and engagement."
                  icon={<Icons.Code2 size={32} className="text-pink-700" />}
                />
              </div>
            </div>
          </section>

          {/* --- TESTIMONIALS --- */}
          <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-6">
              <SectionHeader title="Testimonials" subtitle="Feedback" />
              
              <div className="mt-12 max-w-4xl mx-auto">
                <div className="bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur border border-gray-700 p-8 md:p-12 rounded-2xl relative">
                  <div className="absolute -top-6 left-10 text-6xl text-blue-800 opacity-30 font-serif">"</div>
                  <p className="text-xl md:text-2xl text-gray-300 italic mb-6">
                    "During his time as a Python Full-Stack Intern, Habeebu quickly became one of the most reliable members of the team.
                    He takes ownership of his tasks, asks the right questions, and delivers clean, well-structured code. 
                    His work on the E-Commerce API Service showed that he can handle both backend logic and frontend details with equal care."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-100 to-blue-900 flex items-center justify-center font-bold text-white">
                      T T
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Internship Mentor</h4>
                      <p className="text-blue-900 text-sm">Python Full-Stack Team</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- CONTACT SECTION --- */}
          <section id="contact" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-4xl">
              <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-700 bg-opacity-10 rounded-full blur-3xl -z-0" />

                <div className="relative z-10 grid md:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
                    <p className="text-gray-400 mb-8">
                      I am Habeebu Rahman currently available for full-time opportunities. If you are looking for a developer who is passionate about Python and Web Development, let's connect!
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-gray-300">
                        <Icons.Mail className="text-blue-900" />
                        <a href="mailto:habeeburahman271@gmail.com"><span>habeeburahman271@gmail.com</span></a>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <Icons.Linkedin className="text-blue-900" />
                        <span>linkedin.com/in/username</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <Icons.Github className="text-blue-900" />
                        <a href="https://github.com/habeebu-rahman"><span>github.com/habeebu-rahman</span></a>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <Icons.Document className="text-blue-900" />
                        <a href="Habeebu Rahman.pdf " target="_blank"><span>Resume</span></a>
                      </div>
                    </div>
                  </div>

                  <form className="space-y-4" onSubmit={handleContactSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-900 transition-colors text-white"
                      placeholder="Your Name"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-900 transition-colors text-white"
                      placeholder="hr@company.com"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                    <textarea
                      rows={4}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-900 transition-colors text-white"
                      placeholder="Hi, I'd like to interview you..."
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-900 hover:from-blue-900 hover:to-purple-900 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all hover:bg-blue-900 transform hover:-translate-y-0.5"
                  >
                    Send Message <Icons.Send size={18} />
                  </button>

                  {contactStatus && (
                    <p className="text-sm text-gray-300 pt-2">
                      {contactStatus}
                    </p>
                  )}
                </form>


                </div>
              </div>
            </div>
          </section>

          <footer className="py-8 bg-gray-900 border-t border-gray-900 text-center text-gray-500 text-sm">
            <p>© Build by Habeebu Rahman 2025 - 26 </p>
          </footer>
        </div>
      );
    };

export default App

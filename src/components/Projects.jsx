import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const myProjects = [
    {
      title: "Inventory Management System",
      desc: "A full-stack Java/MySQL application built to streamline Surat-based textile business operations.",
      tech: ["Java", "MySQL", "JDBC", "Swing"],
      link: "https://github.com/KunalHemani"
    },
    {
      title: "Personalized Portfolio Engine",
      desc: "High-performance React portfolio with Tailwind v4, Framer Motion, and Glassmorphism design.",
      tech: ["React", "Vite", "Tailwind v4"],
      link: "https://github.com/KunalHemani"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-4xl font-bold text-white whitespace-nowrap">Featured <span className="text-cyan-400">Projects</span></h2>
          <div className="h-[1px] w-full bg-white/10" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {myProjects.map((proj, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="glass rounded-[3rem] overflow-hidden border-white/5 hover:border-cyan-500/40 transition-all duration-500 group"
            >
              {/* Visual Preview Area */}
              <div className="relative h-64 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:30px_30px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-slate-800 font-black text-6xl group-hover:scale-125 transition-transform duration-700 opacity-50 uppercase tracking-tighter italic">
                    {proj.title.split(' ')[0]}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-10">
                <div className="flex gap-3 mb-6">
                  {proj.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase border border-cyan-500/20 px-3 py-1 rounded-md bg-cyan-500/5">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{proj.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-8">{proj.desc}</p>
                
                <div className="flex gap-6">
                  <a href={proj.link} target="_blank" className="flex items-center gap-2 text-white text-sm font-bold hover:text-cyan-400 transition-colors">
                    <Github size={18} /> Source Code
                  </a>
                  <a href="#" className="flex items-center gap-2 text-white text-sm font-bold hover:text-cyan-400 transition-colors">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
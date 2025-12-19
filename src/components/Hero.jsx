import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#030712]">
      {/* Background Masked Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_90%)]" />
      
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8">
            MCA Final Year Student
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold mb-6 tracking-tight text-white"
        >
          Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Kunal Hemani</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A passionate developer from <span className="text-white">Surat</span> crafting digital experiences with clean code and creative solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a href="#projects" className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-cyan-500/20">
            View My Work
          </a>
          <a href="/Kunal_Hemani_Resume.pdf" download className="glass px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all text-white">
            <Download size={18} /> Download CV
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex gap-8 justify-center items-center">
          <a href="https://github.com/KunalHemani" target="_blank" className="text-slate-500 hover:text-cyan-400 transition-colors"><Github size={24}/></a>
          <a href="https://www.linkedin.com/in/kunal-hemani-2208knh" target="_blank" className="text-slate-500 hover:text-cyan-400 transition-colors"><Linkedin size={24}/></a>
          <a href="mailto:kunalnhemani@gmail.com" className="text-slate-500 hover:text-cyan-400 transition-colors"><Mail size={24}/></a>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
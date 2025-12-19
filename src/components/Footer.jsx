import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-white/5 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-left">
          <h2 className="text-2xl font-black text-white tracking-tighter">KUNAL.</h2>
          <p className="text-slate-500 text-sm mt-1 uppercase tracking-widest">Surat, Gujarat</p>
        </div>
        
        <div className="flex gap-6">
          <a href="https://github.com/KunalHemani" className="text-slate-500 hover:text-white transition-colors"><Github size={20}/></a>
          <a href="https://www.linkedin.com/in/kunal-hemani-2208knh" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={20}/></a>
          <a href="mailto:kunalnhemani@gmail.com" className="text-slate-500 hover:text-white transition-colors"><Mail size={20}/></a>
        </div>

        <p className="text-slate-600 text-xs font-medium uppercase tracking-widest">
          © {new Date().getFullYear()} Kunal Hemani
        </p>
      </div>
    </footer>
  );
};
export default Footer;
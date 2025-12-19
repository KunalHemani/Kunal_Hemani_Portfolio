import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-white/5 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-4">
        <p className="text-slate-600 text-xs font-medium uppercase tracking-widest">
          © {new Date().getFullYear()} Kunal Hemani. Made with ❤️ by Kunal Hemani.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
